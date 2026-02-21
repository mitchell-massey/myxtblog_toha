// Immediately remove blur filter from background - CRITICAL FIX
(function() {
  'use strict';
  
  // Inject CSS immediately - this must run before page renders
  const style = document.createElement('style');
  style.id = 'remove-blur-fix';
  style.textContent = '#homePageBackgroundImageDivStyled,.background{filter:none!important;-webkit-filter:none!important;transform:none!important;-webkit-transform:none!important}';
  (document.head || document.documentElement).appendChild(style);
  
  function removeBlur() {
    // Target the background element
    const bgDiv = document.getElementById('homePageBackgroundImageDivStyled');
    if (bgDiv) {
      bgDiv.style.setProperty('filter', 'none', 'important');
      bgDiv.style.setProperty('-webkit-filter', 'none', 'important');
      bgDiv.style.setProperty('transform', 'none', 'important');
      bgDiv.style.setProperty('-webkit-transform', 'none', 'important');
    }
    
    // Also target .background class
    const bgElements = document.querySelectorAll('.background');
    bgElements.forEach(el => {
      el.style.setProperty('filter', 'none', 'important');
      el.style.setProperty('-webkit-filter', 'none', 'important');
      el.style.setProperty('transform', 'none', 'important');
      el.style.setProperty('-webkit-transform', 'none', 'important');
    });
  }
  
  // Run immediately
  removeBlur();
  
  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeBlur);
  } else {
    removeBlur();
  }
  
  // Run multiple times to ensure it sticks
  setTimeout(removeBlur, 10);
  setTimeout(removeBlur, 100);
  setTimeout(removeBlur, 500);
  setTimeout(removeBlur, 1000);
})();
