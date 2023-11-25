(function() {
    let form = document.querySelector('#register-form');
    let emailInput = document.querySelector('#contact-email');
    let phoneInput = document.querySelector('#contact-tel');
  
  function showErrorMessage (input, message) {
    let container = input.parentElement;
  
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    } 
    if (message) {
      let error = document.createElement ('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }
    
    function validateEmail() {
      let value = emailInput.value;
      if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
      }
      if (value.indexOf('@') === -1) {
        showErrorMessage(emailInput, 'Email host name is required');
        return false;
      }
      if (value.indexOf('.') === -1) {
        showErrorMessage(emailInput, 'What is your emails domain');
        return false;
      }
      showErrorMessage(emailInput, null);
      return true;
    }
  
    function validatePhone () {
        let phone = phoneInput.value

        if (!phone) {
            showErrorMessage(phoneInput, 'Phone number is required.');
            return false;
        }
        
        if (phone.length < 10) {
            showErrorMessage(phoneInput, 'Area code and phone number required.');
            return false;
        }

        showErrorMessage(phoneInput, null);
        return true;
        }
    
    function validateForm() {
      let isValidEmail = validateEmail();
      let isValidPhone = validatePhone();
      return isValidEmail && isValidPhone;
    }
  
    emailInput.addEventListener ('input', validateEmail);
    phoneInput.addEventListener ('input', validatePhone);
    
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 
      if (validateForm()) {
        alert('Thank you for reaching out to me!');
      }
    })
  })();