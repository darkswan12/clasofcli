document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.ux-btn');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.parentElement.style.display = 'none';
    });
  });

  /*window.addEventListener('click', event => {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });*/
});
