document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('animatedBox');
    const button = document.getElementById('animateBtn');
    const countDisplay = document.getElementById('count');

    // Retrieve count from localStorage or initialize to 0
    let animationCount = parseInt(localStorage.getItem('animationCount')) || 0;
    countDisplay.textContent = animationCount;

    // Function to trigger animation
    function triggerAnimation() {
        // Remove the animation class if present to restart animation
        box.classList.remove('animate');

        // Trigger reflow to restart animation
        void box.offsetWidth;

        // Add animation class to start animation
        box.classList.add('animate');

        // Increment count and update localStorage and display
        animationCount++;
        localStorage.setItem('animationCount', animationCount);
        countDisplay.textContent = animationCount;
    }

    // Attach event listener to button
    button.addEventListener('click', triggerAnimation);

    // Optional: trigger animation on box click as well
    box.addEventListener('click', triggerAnimation);
});
