/* Функция для покупки программы */
function buyProgram() {
    window.location.href = 'https://t.me/pokypkivorobeysbot';
}

/* Функция для связи с поддержкой */
function contactUs() {
    window.location.href = 'https://t.me/CTPAX_TBOIX_MOZGOB';
}

/* Плавный скролл и анимации */
document.addEventListener('DOMContentLoaded', function() {
    // Анимация элементов при загрузке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Наблюдаем за карточками
    document.querySelectorAll('.feature-card, .use-case, .faq-item, .download-btn').forEach(el => {
        observer.observe(el);
    });

    // Активные ссылки в навигации
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.style.color = '');
            this.style.color = 'var(--primary)';
        });
    });

    // Анимация скролла активной ссылки
    window.addEventListener('scroll', function() {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = '';
            if (current && link.getAttribute('href') === '#' + current) {
                link.style.color = 'var(--primary)';
            }
        });
    });

    // Кнопки скачивания
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Скачивание начнётся. Благодарим за использование Audio Frequency Extractor!');
            // Здесь можно добавить реальную ссылку на скачивание
        });
    });
});

// Отслеживание аналитики (опционально)
console.log('🎵 Audio Frequency Extractor - Website Loaded');
