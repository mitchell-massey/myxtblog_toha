// CRITICAL FIX: Remove blur filter from background
(function() {
  const style = document.createElement('style');
  style.id = 'remove-blur-fix';
  style.textContent = '#homePageBackgroundImageDivStyled,.background{filter:none!important;-webkit-filter:none!important;transform:none!important;-webkit-transform:none!important}';
  (document.head || document.documentElement).appendChild(style);
  
  function fix() {
    document.querySelectorAll('#homePageBackgroundImageDivStyled,.background').forEach(el => {
      el.style.setProperty('filter', 'none', 'important');
      el.style.setProperty('-webkit-filter', 'none', 'important');
      el.style.setProperty('transform', 'none', 'important');
      el.style.setProperty('-webkit-transform', 'none', 'important');
    });
  }
  fix();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fix);
  setTimeout(fix, 10); setTimeout(fix, 100); setTimeout(fix, 500);
})();
