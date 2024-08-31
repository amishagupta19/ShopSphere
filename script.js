const carouselInner = document.querySelector('.carousel-inner');
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        }

        function updateCarousel() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        document.getElementById('next').addEventListener('click', showNextSlide);
        document.getElementById('prev').addEventListener('click', showPrevSlide);

        // Auto-slide every 5 seconds
        setInterval(showNextSlide, 5000);