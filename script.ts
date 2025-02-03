// Smooth scrolling
function scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form submission handling
const contactForm = document.getElementById('contact-form') as HTMLFormElement;
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;

        // Simulate form submission
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Thank you for your message!');
        contactForm.reset();
    });
}