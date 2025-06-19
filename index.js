
document.addEventListener('DOMContentLoaded', function () {

  const emailInput = document.getElementById('email');
  const submitButton = document.querySelector('.btn-submit');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (submitButton) {
    submitButton.addEventListener('click', function (e) {
      e.preventDefault();
      const emailValue = emailInput.value.trim();

      if (emailRegex.test(emailValue)) {
        localStorage.setItem('subscribedEmail', emailValue);
        window.location.href = 'success.html';
      } else {
        const errorMsg = document.querySelector('em') || document.createElement('em');
        errorMsg.textContent = 'Valid email required.';
        if (!errorMsg.parentNode) {
          emailInput.parentNode.appendChild(errorMsg);
        }
        emailInput.style.borderColor = 'rgb(255, 99, 71)';
        emailInput.style.color = 'rgb(255, 99, 71)';
        emailInput.style.backgroundColor = 'rgba(255, 99, 71, 0.6)';
      }
    });
  }

  const userEmailSpan = document.getElementById('user-email');
  if (userEmailSpan) {
    const storedEmail = localStorage.getItem('subscribedEmail');
    if (storedEmail) {
      userEmailSpan.textContent = storedEmail;
    }

    const dismissBtn = document.querySelector('.btn-submit, .dismiss-btn');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }
  }
});


