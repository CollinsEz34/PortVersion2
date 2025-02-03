// Smooth scrolling
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
// Form submission handling
var contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        // Simulate form submission
        console.log("Name: ".concat(name, ", Email: ").concat(email, ", Message: ").concat(message));
        alert('Thank you for your message!');
        contactForm.reset();
    });
}
const nameElement = document.getElementById('name');
    const nameText = "Collins Kiprotich Cheruiyot"; // Your name
    let i = 0;

    function typeName() {
        if (i < nameText.length) {
            nameElement.innerHTML += nameText.charAt(i);
            i++;
            setTimeout(typeName, 100); // Adjust speed here (100ms between letters)
        }
    }

    // Start the typing effect when the page loads
    window.onload = function() {
        typeName();
    };
    
