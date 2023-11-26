document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    
    let isValid = true;
    
    if (name.length <= 5) {
      nameError.textContent = 'Name must be more than 5 characters';
      isValid = false;
    } else {
      nameError.textContent = '';
    }
    
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = 'Enter a valid email address';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
    
    if (subject.length <= 10) {
      subjectError.textContent = 'Subject must be more than 15 characters';
      isValid = false;
    } else {
      subjectError.textContent = '';
    }
    
    if (message.length <= 25) {
      messageError.textContent = 'Message must be more than 25 characters';
      isValid = false;
    } else {
      messageError.textContent = '';
    }
    

    if (isValid) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Subject:', subject);
      console.log('Message:', message);
    }
  });
  