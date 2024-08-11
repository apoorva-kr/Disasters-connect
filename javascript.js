function showResource(resource) {
    alert("Showing more information about " + resource);
}

function handleSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Normally, you'd send this data to a server.
    console.log("Form Data Submitted:", Object.fromEntries(formData.entries()));

    document.getElementById('formResponse').innerText = "Thank you for contacting us! We'll be in touch soon.";
    form.reset();
}
// Geolocation API
navigator.geolocation.getCurrentPosition(position => {
    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
  });
  
  // User Authentication
  const auth0 = new Auth0({
    domain: 'your-auth0-domain',
    clientId: 'your-client-id',
    redirectUri: 'http://localhost:3000'
  });
  
  // Login functionality
  document.getElementById('login-btn').addEventListener('click', () => {
    auth0.authorize();
  });
  
  // Logout functionality
  document.getElementById('logout-btn').addEventListener('click', () => {
    auth0.logout();
  });