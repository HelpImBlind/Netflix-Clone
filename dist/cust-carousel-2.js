async function loadSlides() {
    try {
        const res = await fetch('carousel.json');
        const slides = await res.json();
        const carouselBody = document.querySelector('.carousel-body');

        slides.forEach((slideData, i) => {
            const slideEl = document.createElement('div');
            slideEl.classList.add('carousel-slide');
            slideEl.setAttribute("aria-haspopup", "dialog");
            slideEl.setAttribute("aria-expanded", "false");
            slideEl.setAttribute("aria-controls", `middle-center-modal-${slideData.id}`);
            slideEl.setAttribute("data-overlay", `#middle-center-modal-${slideData.id}`);

            if (i === 0) slideEl.classList.add('active');

            slideEl.innerHTML = `
                <div>
                    <button class="bg-center bg-no-repeat bg-cover bg-fixed border-0 w-[150px] h-[300px] flex justify-start cursor-pointer rounded-3xl" style="background-image: url(${slideData.bgImage})">
                        <span class="font-bold text-black text-6xl top-0 ml-[-15px]" style="-webkit-text-stroke: 0.125rem #ffffff;">${slideData.id}</span>
                    </button>
                </div>`;

            carouselBody.appendChild(slideEl);
        });

        window.HSStaticMethods.autoInit();

    } catch (err) {
        console.error('Error loading slides:', err);
    }
}


document.addEventListener('DOMContentLoaded', loadSlides);
