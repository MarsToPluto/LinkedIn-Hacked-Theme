function moveRandomly() {
  try {
    const element = document.querySelector('.global-nav__primary-item');
    if (!element) {
      throw new Error("Element with class '.global-nav__primary-item' not found.");
    }
    const parent = element.parentElement;
    if (!parent) {
      throw new Error("Parent element not found.");
    }
    const parentWidth = parent.offsetWidth;
    const parentHeight = parent.offsetHeight;
    const randomX = Math.floor(Math.random() * (parentWidth - element.offsetWidth));
    const randomY = Math.floor(Math.random() * (parentHeight - element.offsetHeight));
    const randomSpeed = (Math.random() * 0.5) + 0.1;
    element.style.transition = `transform ${randomSpeed}s ease-in-out`;
    element.style.transform = `translate(${randomX}px, ${randomY}px)`;
  } catch (error) {
    console.error("An error occurred while moving the element:", error.message);
  }
}
try {
  setInterval(moveRandomly, Math.random() * 500 + 200);
} catch (error) {
  console.error("An error occurred during the interval setup:", error.message);
}
const elements = document.querySelectorAll('.global-nav__primary-item:not(:first-child)');
// Function to continuously trigger animations
function applyInfiniteAnimation(element) {
  function loopAnimation() {
    // Start with the falling animation
    element.classList.add('falling');
    setTimeout(() => {
      element.classList.remove('falling');
      element.classList.add('goingUpFast');
      setTimeout(() => {
        element.classList.remove('goingUpFast');
        element.classList.add('falling');
        loopAnimation();
      }, 500);
    }, Math.random() * 3000);
  }
  loopAnimation();
}
elements.forEach(applyInfiniteAnimation);
