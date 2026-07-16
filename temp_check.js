
// ---- MATRIX CANVAS BACKGROUND DYNAMIC ----
const matrixEngine = (function(){
    const ch = '01アイウエオカキクケコサシスセソ０１２３４５６７８９';
    const fs = 14;
    let cols = 0, drops = [], colPh = [];
    let canvas = null, ctx = null, animId = null, lastT = 0;
    
    function init(c) {
        if (!c) return;
        stop();
        canvas = c;
        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        cols = Math.floor(canvas.width / fs);
        drops = Array.from({length: cols}, () => Math.random() * (canvas.height / fs));
        colPh = Array.from({length: cols}, () => Math.random() * Math.PI * 2);
        lastT = 0;
        loop(0);
    }
    
    function stop() {
        if (animId) {
            cancelAnimationFrame(animId);
            animId = null;
        }
        if (ctx && canvas) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        canvas = null;
        ctx = null;
    }
    
    function loop(ts) {
        if (!canvas || !ctx) return;
        animId = requestAnimationFrame(loop);
        if (ts - lastT < 55) return; // Khoảng 18 FPS mượt mà và tiết kiệm pin
        lastT = ts;
        
        ctx.fillStyle = 'rgba(10,12,16,0.14)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.font = fs + 'px JetBrains Mono, monospace';
        
        for (let i = 0; i < cols; i++) {
            const char = ch[Math.floor(Math.random() * ch.length)];
            const wave = (Math.sin(ts * 0.0008 + colPh[i]) + 1) / 2;
            const fl = Math.random();
            const br = wave * 0.5 + fl * 0.5;
            
            // Xanh dương neon sáng giống hệt story
            ctx.fillStyle = br > 0.88 ? `rgba(200,245,255,${0.65 + br * 0.35})`
                          : br > 0.65 ? `rgba(0,190,255,${0.50 + br * 0.30})`
                          : br > 0.38 ? `rgba(0,110,210,${0.30 + br * 0.22})`
                                      : `rgba(0,60,165,${br * 0.28})`;
                                      
            ctx.fillText(char, i * fs, drops[i] * fs);
            if (drops[i] * fs > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += (Math.random() * 0.18 + 0.08);
        }
    }
    
    window.addEventListener('resize', () => {
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            cols = Math.floor(canvas.width / fs);
            drops = Array.from({length: cols}, () => Math.random() * (canvas.height / fs));
            colPh = Array.from({length: cols}, () => Math.random() * Math.PI * 2);
        }
    });
    
    return { init: init, stop: stop };
})();

// Cập nhật canvas ma trận khi đổi slide
function updateActiveMatrix() {
    const activeSlide = document.querySelector('.sl.active');
    if (activeSlide) {
        const c = activeSlide.querySelector('.sl-matrix');
        matrixEngine.init(c);
    }
}

// ---- SLIDE NAVIGATION ----
const TOTAL = 8;
let cur = 0;
const sls = document.querySelectorAll('.sl');
const dots = document.querySelectorAll('.cmp-dot');
const pf = document.getElementById('ptfill');
const sn = document.getElementById('sn');
let barDone = new Set();

function goTo(n){
    n = ((n % TOTAL) + TOTAL) % TOTAL;
    sls[cur].classList.remove('active');
    dots[cur].classList.remove('active');
    cur = n;
    sls[cur].classList.add('active');
    dots[cur].classList.add('active');
    sn.textContent = cur + 1;
    
    // Cập nhật matrix của slide mới
    updateActiveMatrix();
    
    if(cur === 4){ setTimeout(drawRadar, 80); }
    if(cur === 5 && !barDone.has(5)){ setTimeout(animateBars, 80); barDone.add(5); }
    if(presMode) resetPresTimer();
}

document.getElementById('pb').onclick = () => goTo(cur-1);
document.getElementById('nb').onclick = () => goTo(cur+1);
dots.forEach(function(d){
    d.addEventListener('click', function(){ goTo(parseInt(d.dataset.s)); });
});

// Phím tắt bàn phím
document.addEventListener('keydown', function(e){
    if(e.code === 'ArrowRight' || e.code === 'ArrowDown'){ e.preventDefault(); goTo(cur+1); }
    else if(e.code === 'ArrowLeft' || e.code === 'ArrowUp'){ e.preventDefault(); goTo(cur-1); }
    else if(e.key >= '1' && e.key <= '8') goTo(parseInt(e.key)-1);
    else if(e.code === 'Space'){ e.preventDefault(); presMode ? togglePause() : startPres(); }
    else if(e.code === 'Escape'){ e.preventDefault(); if(presMode) stopPres(); }
});

// Vuốt màn hình trên điện thoại
let tx = 0;
document.addEventListener('touchstart', function(e){ tx = e.touches[0].clientX; }, {passive:true});
document.addEventListener('touchend', function(e){
    var dx = e.changedTouches[0].clientX - tx;
    if(Math.abs(dx) > 50) goTo(dx < 0 ? cur+1 : cur-1);
});

// ---- RADAR CHART (BIỂU ĐỒ MẠNG NHỆN) ----
function drawRadar(){
    var svg = document.getElementById('radarSvg');
    if(!svg) return;
    var NS = 'http://www.w3.org/2000/svg';
    var sz = 340, cx = 170, cy = 170, maxR = 118;
    var axes = ['Kiểm soát DL', 'Tuỳ biến', 'Phát triển DL', 'Hiệu quả CP', 'Offline', 'Bảo mật NB'];
    var datasets = [
        { vals: [7, 3, 2, 9, 9, 7], color: '#fbbf24' },  // Rời rạc
        { vals: [3, 5, 6, 3, 2, 4], color: '#9d9dff' },  // Power
        { vals: [10, 10, 9, 8, 8, 10], color: '#00f0ff' } // Web Platform
    ];
    var n = axes.length;
    svg.innerHTML = '';
    
    // Grid rings
    [.2, .4, .6, .8, 1].forEach(function(frac){
        var pts = axes.map(function(_, i){
            var a = (2*Math.PI*i/n) - Math.PI/2;
            return (cx + maxR*frac*Math.cos(a)).toFixed(1) + ',' + (cy + maxR*frac*Math.sin(a)).toFixed(1);
        }).join(' ');
        var el = document.createElementNS(NS, 'polygon');
        el.setAttribute('points', pts);
        el.setAttribute('fill', 'none');
        el.setAttribute('stroke', frac===1 ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.06)');
        el.setAttribute('stroke-width', '1');
        svg.appendChild(el);
        
        if(frac>0.19 && frac<0.81){
            var t = document.createElementNS(NS, 'text');
            t.setAttribute('x', cx+5); t.setAttribute('y', cy-maxR*frac+3);
            t.setAttribute('font-size', '7'); t.setAttribute('fill', 'rgba(255,255,255,0.28)');
            t.setAttribute('font-family', 'Inter, sans-serif');
            t.textContent = Math.round(frac*10);
            svg.appendChild(t);
        }
    });
    
    // Các trục và nhãn
    axes.forEach(function(_, i){
        var a = (2*Math.PI*i/n) - Math.PI/2;
        var line = document.createElementNS(NS, 'line');
        line.setAttribute('x1', cx); line.setAttribute('y1', cy);
        line.setAttribute('x2', (cx + maxR*Math.cos(a)).toFixed(1));
        line.setAttribute('y2', (cy + maxR*Math.sin(a)).toFixed(1));
        line.setAttribute('stroke', 'rgba(255,255,255,0.1)'); line.setAttribute('stroke-width', '1');
        svg.appendChild(line);
        
        var lx = cx + (maxR + 22)*Math.cos(a), ly = cy + (maxR + 22)*Math.sin(a);
        var t = document.createElementNS(NS, 'text');
        t.setAttribute('x', lx.toFixed(1)); t.setAttribute('y', ly.toFixed(1));
        t.setAttribute('font-size', '9.5'); t.setAttribute('fill', 'rgba(255,255,255,0.72)');
        t.setAttribute('font-family', 'Inter, sans-serif');
        var anch = Math.abs(lx - cx) < 8 ? 'middle' : lx > cx ? 'start' : 'end';
        var base = Math.abs(ly - cy) < 8 ? 'middle' : ly > cy ? 'hanging' : 'auto';
        t.setAttribute('text-anchor', anch); t.setAttribute('dominant-baseline', base);
        t.textContent = axes[i];
        svg.appendChild(t);
    });
    
    // Vẽ đa giác dữ liệu
    datasets.forEach(function(ds){
        var pts = ds.vals.map(function(v, i){
            var a = (2*Math.PI*i/n) - Math.PI/2;
            var r = maxR*v/10;
            return (cx + r*Math.cos(a)).toFixed(1) + ',' + (cy + r*Math.sin(a)).toFixed(1);
        }).join(' ');
        var fill = document.createElementNS(NS, 'polygon');
        fill.setAttribute('points', pts);
        fill.setAttribute('fill', ds.color + '20');
        fill.setAttribute('stroke', ds.color);
        fill.setAttribute('stroke-width', '2.5');
        fill.setAttribute('stroke-linejoin', 'round');
        fill.style.opacity = '0'; fill.style.transition = 'opacity 0.65s ease';
        svg.appendChild(fill);
        
        setTimeout(function(){ fill.style.opacity = '1'; }, 120);
        
        ds.vals.forEach(function(v, i){
            var a = (2*Math.PI*i/n) - Math.PI/2;
            var r = maxR*v/10;
            var dot = document.createElementNS(NS, 'circle');
            dot.setAttribute('cx', (cx + r*Math.cos(a)).toFixed(1));
            dot.setAttribute('cy', (cy + r*Math.sin(a)).toFixed(1));
            dot.setAttribute('r', '4.5'); dot.setAttribute('fill', ds.color);
            dot.setAttribute('stroke', 'rgba(10,12,16,0.8)'); dot.setAttribute('stroke-width', '1.5');
            svg.appendChild(dot);
        });
    });
}

// ---- BAR CHART ANIMATION (BIỂU ĐỒ CỘT) ----
function animateBars(){
    var fills = document.querySelectorAll('#barChart .bar-fill');
    fills.forEach(function(f, i){
        var val = parseInt(f.getAttribute('data-val')) || 0;
        setTimeout(function(){ f.style.width = val + '%'; }, i*55);
    });
}

// ---- SETTINGS PANEL & SLIDER (GIỐNG STORY) ----
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('slideshowSettingsPanel');
const settingsCloseBtn = document.getElementById('settingsCloseBtn');
const durationSlider = document.getElementById('durationSlider');
const durationDisplay = document.getElementById('durationDisplay');
const settingsDurationLabel = document.getElementById('settingsDurationLabel');
const presetBtns = document.querySelectorAll('.preset-btn');

let presInterval = 10; // Mặc định là 10s

function updateDuration(seconds) {
    presInterval = parseInt(seconds);
    durationSlider.value = presInterval;
    durationDisplay.textContent = presInterval + 's';
    settingsDurationLabel.textContent = presInterval + 's';
    
    // Cập nhật trạng thái nút active
    presetBtns.forEach(btn => {
        if (parseInt(btn.dataset.seconds) === presInterval) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    if (presMode) {
        resetPresTimer();
    }
}

settingsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsPanel.classList.toggle('visible');
    settingsBtn.classList.toggle('is-open');
});

settingsCloseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    settingsPanel.classList.remove('visible');
    settingsBtn.classList.remove('is-open');
});

// Click ra ngoài panel thì đóng panel
document.addEventListener('click', (e) => {
    if (settingsPanel.classList.contains('visible') && !settingsPanel.contains(e.target) && e.target !== settingsBtn) {
        settingsPanel.classList.remove('visible');
        settingsBtn.classList.remove('is-open');
    }
});

// Slider thay đổi
durationSlider.addEventListener('input', function() {
    updateDuration(this.value);
});

// Click nút preset
presetBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        updateDuration(this.dataset.seconds);
    });
});

// ---- PRESENTATION MODE (CHẾ ĐỘ TRÌNH CHIẾU TỰ ĐỘNG) ----
var presMode = false, presPaused = false;
var presElapsed = 0, presRAF = null, presLastTick = 0;
const playBtn = document.getElementById('playSlideshowBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const playBtnLabel = document.getElementById('playBtnLabel');
const closePresBtn = document.getElementById('cmpPresCloseBtn');

function startPres(){
    presMode = true; presPaused = false; presElapsed = 0;
    document.body.classList.add('pres-active');
    playBtn.classList.add('is-playing');
    playIcon.style.display = 'none';
    pauseIcon.style.display = '';
    playBtnLabel.textContent = 'Tạm dừng';
    
    // Đóng panel settings nếu đang mở
    settingsPanel.classList.remove('visible');
    settingsBtn.classList.remove('is-open');
    
    // KÍCH HOẠT FULLSCREEN THỰC SỰ
    try {
        const el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
    } catch(e) {}
    
    presLastTick = performance.now();
    tickTimer();
}

function stopPres(){
    presMode = false; presPaused = false;
    document.body.classList.remove('pres-active', 'pres-paused');
    playBtn.classList.remove('is-playing');
    playIcon.style.display = '';
    pauseIcon.style.display = 'none';
    playBtnLabel.textContent = 'Trình chiếu';
    
    document.getElementById('ptfill').style.width = '0%';
    if(presRAF){ cancelAnimationFrame(presRAF); presRAF = null; }
    
    // THOÁT FULLSCREEN THỰC SỰ
    try {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
            (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        }
    } catch(e) {}
}

function togglePause(){
    presPaused = !presPaused;
    document.body.classList.toggle('pres-paused', presPaused);
    if(presPaused) {
        playBtnLabel.textContent = 'Tiếp tục';
        playIcon.style.display = '';
        pauseIcon.style.display = 'none';
        if(presRAF){ cancelAnimationFrame(presRAF); presRAF = null; }
    } else {
        playBtnLabel.textContent = 'Tạm dừng';
        playIcon.style.display = 'none';
        pauseIcon.style.display = '';
        presLastTick = performance.now();
        tickTimer();
    }
}

function resetPresTimer(){ presElapsed = 0; presLastTick = performance.now(); }

function tickTimer(){
    if(!presMode || presPaused){ presRAF = null; return; }
    var now = performance.now();
    presElapsed += (now - presLastTick)/1000;
    presLastTick = now;
    var frac = Math.min(presElapsed/presInterval, 1);
    document.getElementById('ptfill').style.width = (frac*100) + '%';
    
    if(frac >= 1){
        presElapsed = 0;
        if(cur === TOTAL - 1) {
            stopPres();
            goTo(0); // Quay lại slide đầu tiên
        } else {
            goTo(cur+1);
        }
    } else {
        presRAF = requestAnimationFrame(tickTimer);
    }
}

playBtn.onclick = function(){ presMode ? togglePause() : startPres(); };

// Click nút close trình chiếu
closePresBtn.onclick = function(e){
    e.stopPropagation();
    stopPres();
};

// Đồng bộ khi người dùng thoát fullscreen bằng phím ESC mặc định của trình duyệt
document.addEventListener('fullscreenchange', function() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && presMode) {
        stopPres();
    }
});
document.addEventListener('webkitfullscreenchange', function() {
    if (!document.fullscreenElement && !document.webkitFullscreenElement && presMode) {
        stopPres();
    }
});

// ---- PAGE FADE-IN KHI LOAD ----
(function(){
    var ov = document.getElementById('pageEnterOverlay');
    if(!ov) return;
    requestAnimationFrame(function(){ setTimeout(function(){ ov.style.opacity = '0'; }, 50); });
})();

// Cập nhật ban đầu khi trang vừa load
window.addEventListener('DOMContentLoaded', () => {
    // Vẽ biểu đồ khi load nếu ở slide tương ứng
    if(cur === 4) drawRadar();
    if(cur === 5) { animateBars(); barDone.add(5); }
    
    // Khởi động matrix canvas ban đầu
    updateActiveMatrix();
});
