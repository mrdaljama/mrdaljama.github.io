const header = document.querySelector('header');
const nav = document.querySelector('nav');
const goToTopButton = document.getElementById('go-to-top');

let isNavVisible = true;

window.addEventListener('scroll', function() {
  const headerHeight = header.offsetHeight;
  const navOffsetTop = nav.offsetTop;

  if (window.pageYOffset > navOffsetTop - headerHeight) {
    isNavVisible = false;
  } else {
    isNavVisible = true;
  }

  if (!isNavVisible || window.pageYOffset === 0) {
    goToTopButton.classList.add('show');
  } else {
    goToTopButton.classList.remove('show');
  }
});

goToTopButton.addEventListener('click', function(e) {
  e.preventDefault();
  scrollToTop(1000);
});

function scrollToTop(duration) {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    const timeElapsed = currentTime - startTime;
    const scrollAmount = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, scrollAmount);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Check initial scroll position
window.addEventListener('DOMContentLoaded', function() {
  if (window.pageYOffset === 0) {
    goToTopButton.classList.remove('show');
  }
});
