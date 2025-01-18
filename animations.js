document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll');

    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    // Start dragging
    scrollContainer.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.pageX - scrollContainer.offsetLeft;
        scrollStart = scrollContainer.scrollLeft;
        scrollContainer.style.cursor = 'grabbing';
    });

    // Dragging motion
    scrollContainer.addEventListener('mousemove', (event) => {
        if (!isDragging) return;

        event.preventDefault(); // Prevent text selection
        const x = event.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1; // Adjust the drag speed with this multiplier
        scrollContainer.scrollLeft = scrollStart - walk;
    });

    // Stop dragging
    scrollContainer.addEventListener('mouseup', () => {
        isDragging = false;
        scrollContainer.style.cursor = 'grab';
    });

    // Handle the case where the mouse leaves the container while dragging
    scrollContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        scrollContainer.style.cursor = 'grab';
    });

    // Set initial cursor style
    scrollContainer.style.cursor = 'grab';
});


document.getElementById("myBtn").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
