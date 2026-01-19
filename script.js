class ImageSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.dot');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.currentIndex = 0;
        this.autoSlideInterval = null;
        this.autoSlideDelay = 3000;
        
        // Background color schemes matching each slide
        this.backgrounds = [
            'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // Mountain landscape
            'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // Forest path
            'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // Beach sunset
            'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Desert scenery
            'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // City skyline
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)', // Lake with mountains
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', // Waterfall in forest
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'  // Autumn trees
        ];
        
        this.init();
    }
    
    init() {
        this.addEventListeners();
        this.changeBackground(); // Set initial background
        this.startAutoSlide();
    }
    
    addEventListeners() {
        this.prevBtn.addEventListener('click', () => this.goToPrevious());
        this.nextBtn.addEventListener('click', () => this.goToNext());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
        
        this.slides.forEach(slide => {
            slide.addEventListener('mouseenter', () => this.pauseAutoSlide());
            slide.addEventListener('mouseleave', () => this.startAutoSlide());
        });
        
        this.prevBtn.addEventListener('mouseenter', () => this.pauseAutoSlide());
        this.prevBtn.addEventListener('mouseleave', () => this.startAutoSlide());
        
        this.nextBtn.addEventListener('mouseenter', () => this.pauseAutoSlide());
        this.nextBtn.addEventListener('mouseleave', () => this.startAutoSlide());
    }
    
    goToSlide(index) {
        this.slides[this.currentIndex].classList.remove('active');
        this.dots[this.currentIndex].classList.remove('active');
        
        this.currentIndex = index;
        
        this.slides[this.currentIndex].classList.add('active');
        this.dots[this.currentIndex].classList.add('active');
        
        // Change background color to match current slide
        this.changeBackground();
    }
    
    changeBackground() {
        document.body.style.background = this.backgrounds[this.currentIndex];
    }
    
    goToNext() {
        let nextIndex = this.currentIndex + 1;
        if (nextIndex >= this.slides.length) {
            nextIndex = 0;
        }
        this.goToSlide(nextIndex);
    }
    
    goToPrevious() {
        let prevIndex = this.currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = this.slides.length - 1;
        }
        this.goToSlide(prevIndex);
    }
    
    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.goToNext();
        }, this.autoSlideDelay);
    }
    
    pauseAutoSlide() {
        clearInterval(this.autoSlideInterval);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    new ImageSlider();
});