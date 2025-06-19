document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const submitButton = document.querySelector('.sub-btn');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (submitButton && emailInput) {
    submitButton.addEventListener('click', function (e) {
      e.preventDefault();
      const emailValue = emailInput.value.trim();
      let errorMsg = document.querySelector('em');
      if (errorMsg) errorMsg.remove();

      if (emailRegex.test(emailValue)) {
        localStorage.setItem('subscribedEmail', emailValue);
        window.location.href = 'success.html'; // no leading slash to avoid Vercel routing issues
      } else {
        errorMsg = document.createElement('em');
        errorMsg.textContent = 'Valid email required.';
        errorMsg.classList.add('error-msg');
        emailInput.classList.add('error');
        emailInput.parentNode.appendChild(errorMsg);
      }
    });
  }

  const userEmailSpan = document.getElementById('user-email');
  const dismissBtn = document.querySelector('.dismiss-btn');

  if (userEmailSpan) {
    const storedEmail = localStorage.getItem('subscribedEmail');
    if (storedEmail) {
      userEmailSpan.textContent = storedEmail;
    }
  }

  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }
});
