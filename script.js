document.addEventListener('DOMContentLoaded', function() {

    // スクロール時のフェードインアニメーション
    const fadeInElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeInElements.forEach(el => {
        // 初期状態ではアニメーションを一時停止
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

});