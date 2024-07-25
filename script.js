// Generate a random CAPTCHA string
function generateCaptcha() {
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captchaText = '';
  for (let i = 0; i < 6; i++) {
    captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById('captchaText').textContent = captchaText;
}

// Verify the entered CAPTCHA
function verifyCaptcha() {
  let userInput = document.getElementById('captchaInput').value.trim();
  let generatedCaptcha = document.getElementById('captchaText').textContent.trim();
  
  if (userInput === generatedCaptcha) {
    alert('CAPTCHA Matched!');
  } else {
    alert('CAPTCHA does not match. Please try again.');
    generateCaptcha(); // Regenerate a new CAPTCHA for retry
  }
}