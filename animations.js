// Waits for the DOM to fully load before running this script.
document.addEventListener('DOMContentLoaded', () => {
    // Selects the element with the class 'scroll' for horizontal scrolling.
    const scrollContainer = document.querySelector('.scroll');

    // Variables to track dragging state and positions.
    let isDragging = false; // Checks if the user is dragging.
    let startX = 0; // Stores the initial X position when dragging starts.
    let scrollStart = 0; // Saves the initial scroll position when dragging starts.


    // when I hold left click drag will start
    scrollContainer.addEventListener('mousedown', (event) => {
        isDragging = true;
        startX = event.pageX - scrollContainer.offsetLeft;
        scrollStart = scrollContainer.scrollLeft;
        scrollContainer.style.cursor = 'grabbing';
    });

    // moving the mouse right or left will drag the container
    scrollContainer.addEventListener('mousemove', (event) => {
        if (!isDragging) return;

        event.preventDefault(); 
        const x = event.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1; // speed of how fast the drag will be
        scrollContainer.scrollLeft = scrollStart - walk;
    });

    // releasing left click will stop the drag effect
    scrollContainer.addEventListener('mouseup', () => {
        isDragging = false;
        scrollContainer.style.cursor = 'grab';
    });

    // if mouse not in the container cursor wont turn into"grab" pointer
    scrollContainer.addEventListener('mouseleave', () => {
        isDragging = false;
        scrollContainer.style.cursor = 'grab';
    });

    // cursor style
    scrollContainer.style.cursor = 'grab';
});

// footer button to scroll back
document.getElementById("myBtn").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
