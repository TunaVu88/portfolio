// JavaScript xử lý các tương tác động trên website Portfolio TuNa88VN

// Hàm khởi tạo canvas ma trận điện (dùng cho index.html - particle network)
function initElectricMatrix(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const maxParticles = Math.min(50, Math.floor((width * height) / 25000));
    const connectionDist = 135;

    // Các màu sắc tương ứng theo stage
    const colors = {
        'default': { dot: 'rgba(0, 240, 255, 0.4)', line: 'rgba(0, 240, 255, 0.08)' },
        'stage-0': { dot: 'rgba(239, 68, 68, 0.4)', line: 'rgba(239, 68, 68, 0.08)' },
        'stage-1': { dot: 'rgba(168, 85, 247, 0.4)', line: 'rgba(168, 85, 247, 0.08)' },
        'stage-2': { dot: 'rgba(6, 182, 212, 0.4)', line: 'rgba(6, 182, 212, 0.08)' },
        'stage-3': { dot: 'rgba(34, 197, 94, 0.4)', line: 'rgba(34, 197, 94, 0.08)' },
        'stage-4': { dot: 'rgba(244, 63, 94, 0.4)', line: 'rgba(244, 63, 94, 0.08)' }
    };

    // Hàm lấy màu sắc hiện tại dựa trên class trên body
    function getCurrentColors() {
        for (const stage in colors) {
            if (stage !== 'default' && document.body.classList.contains(stage)) {
                return colors[stage];
            }
        }
        return colors['default'];
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw(color) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }

    let lightning = null;
    function createLightning() {
        if (particles.length < 2) return;
        const p1 = particles[Math.floor(Math.random() * particles.length)];
        const p2 = particles[Math.floor(Math.random() * particles.length)];
        if (p1 !== p2 && Math.hypot(p1.x - p2.x, p1.y - p2.y) < 220) {
            lightning = {
                start: p1,
                end: p2,
                steps: [],
                life: 12
            };
            
            let curX = p1.x;
            let curY = p1.y;
            const segments = 4;
            for (let i = 1; i < segments; i++) {
                const ratio = i / segments;
                const targetX = p1.x + (p2.x - p1.x) * ratio;
                const targetY = p1.y + (p2.y - p1.y) * ratio;
                curX = targetX + (Math.random() - 0.5) * 16;
                curY = targetY + (Math.random() - 0.5) * 16;
                lightning.steps.push({x: curX, y: curY});
            }
            lightning.steps.push({x: p2.x, y: p2.y});
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        const currentConfig = getCurrentColors();

        particles.forEach(p => {
            p.update();
            p.draw(currentConfig.dot);
        });

        ctx.lineWidth = 0.8;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
                if (dist < connectionDist) {
                    const alpha = (1 - dist / connectionDist) * 0.16;
                    ctx.strokeStyle = currentConfig.line.replace('0.08', alpha.toFixed(2));
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        if (Math.random() < 0.012 && !lightning) {
            createLightning();
        }

        if (lightning) {
            ctx.beginPath();
            ctx.moveTo(lightning.start.x, lightning.start.y);
            ctx.lineWidth = Math.random() * 2 + 1;
            ctx.strokeStyle = currentConfig.dot;
            
            lightning.steps.forEach(step => {
                ctx.lineTo(step.x, step.y);
            });
            ctx.stroke();
            
            lightning.life--;
            if (lightning.life <= 0) lightning = null;
        }

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo ma trận điện
    initElectricMatrix('electric-matrix');

    // Khởi tạo các icon từ Lucide CDN
    lucide.createIcons();

    // 1. Mobile Menu Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', () => {
            const isVisible = navLinksContainer.style.display === 'flex';
            if (isVisible) {
                navLinksContainer.style.display = 'none';
                navToggle.innerHTML = '<i data-lucide="menu"></i>';
            } else {
                navLinksContainer.style.display = 'flex';
                navLinksContainer.style.flexDirection = 'column';
                navLinksContainer.style.position = 'absolute';
                navLinksContainer.style.top = '80px';
                navLinksContainer.style.left = '0';
                navLinksContainer.style.width = '100%';
                navLinksContainer.style.backgroundColor = 'rgba(10, 12, 16, 0.95)';
                navLinksContainer.style.padding = '2rem';
                navLinksContainer.style.borderBottom = '1px solid var(--border-color)';
                navToggle.innerHTML = '<i data-lucide="x"></i>';
            }
            lucide.createIcons(); // Cập nhật lại icon mới (menu hoặc x)
        });

        // Đóng menu khi click vào một link link bất kỳ (trên mobile)
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinksContainer.style.display = 'none';
                    navToggle.innerHTML = '<i data-lucide="menu"></i>';
                    lucide.createIcons();
                }
            });
        });
    }

    // 2. Active Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 3. Project Filter (Góc Sáng Tạo)
    const tabButtons = document.querySelectorAll('.tab-btn');
    const projectCards = document.querySelectorAll('.project-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const category = button.getAttribute('data-tab');

            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Hiệu ứng fade out
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'flex';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // 4. Scroll Reveal animation
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .godot-console, .godot-info, .contact-detail-item, .contact-form-container');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Thiết lập thuộc tính ban đầu cho hiệu ứng reveal
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Chạy lần đầu tiên để hiện các phần tử trong màn hình

    // 5. Interactive Image Tilt & Parallax effect for Projects (Mục 3)
    const projectContainers = document.querySelectorAll('.project-image-container, .project-music-ui, .digital-sub-bg');
    
    projectContainers.forEach(container => {
        const img = container.querySelector('.project-img') || container.querySelector('.music-disc') || container.querySelector('.placeholder-icon');
        
        if (!img) return;
        
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Xoay 3D nhẹ từ -8 đến 8 độ
            const rotateX = ((y - centerY) / centerY) * -8;
            const rotateY = ((x - centerX) / centerX) * 8;
            
            // Parallax dịch chuyển nhẹ ảnh từ -6px đến 6px
            const moveX = ((x - centerX) / centerX) * -6;
            const moveY = ((y - centerY) / centerY) * -6;
            
            if (img.classList.contains('project-img')) {
                img.style.transform = `scale(1.12) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate(${moveX}px, ${moveY}px)`;
            } else {
                img.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            }
        });
        
        container.addEventListener('mouseleave', () => {
            // Trả về trạng thái ban đầu một cách mượt mà
            if (img.classList.contains('project-img')) {
                img.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg) translate(0, 0)';
            } else {
                img.style.transform = 'translate(0, 0) scale(1)';
            }
        });
    });
});
