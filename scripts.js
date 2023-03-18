document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('h2, p, input, textarea, button, a');
  
    elements.forEach(function(element, index) {
      element.style.animation = 'fadeIn 1s ease-in forwards';
      element.style.animationDelay = index * 100 + 'ms';
    });
  });
  