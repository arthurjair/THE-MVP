/*chatgptd how to make mouse scroll automatically scroll instead of keypad */
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll');

    let scrollAmount = 0;
    let isScrolling = false;

    scrollContainer.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            scrollAmount += event.deltaY;

            if (!isScrolling) {
                isScrolling = true;
                smoothScroll();
            }
        }
    });
/*for a smoother scroll since it kinda glitches */
    function smoothScroll() {
        if (Math.abs(scrollAmount) < 1) {
            isScrolling = false;
            scrollAmount = 0; // Reset when done
            return;
        }

        scrollContainer.scrollLeft += scrollAmount * 0.2; // Adjust the speed by changing 0.2
        scrollAmount *= 0.9; // Apply friction for smoother deceleration

        requestAnimationFrame(smoothScroll);
    }
});
