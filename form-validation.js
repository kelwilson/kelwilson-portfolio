function checkemail() {
  const form = document.getElementById('contact-form');
  const email = form.elements.email.value;
  const re = /@/g;
  const lower = email.toLowerCase();
  
  if (re.test(String(email).toLowerCase()) === true) {
    if (lower === email) { // Check if email is lowercase
      form.submit(); 
    } else {
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const error = document.createElement('aside'); 
        error.textContent = 'Please make sure the email is all lower case'; 
        error.id = 'error-popup'; 
        setTimeout(() => {
          error.classList.add('fade'); // Add delay of 0.5s to not override class
        }, 500);
        form.appendChild(error);
        setTimeout(() => { // Delay for function to remove appended children
          form.removeChild(document.getElementById('error-popup'));
        }, 3500);
      });
    }
  }
}

checkemail();
