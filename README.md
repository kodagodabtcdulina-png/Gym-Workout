# Gym-Workout
I created my own website for gym branches
Overview

NuggetsGYM is a modern, interactive gym website designed to showcase your gym’s brand, provide a registration form for new members, and offer smooth animations for a premium user experience. Users can register online and receive a confirmation email upon enrollment.

Features

Hero Section with parallax scrolling effect.

Blurred Glass Image Card for premium UI.

Registration Form that sends a confirmation email using EmailJS.

Glass Card Fade-In on scroll effect.

Image Lightbox for gallery images.

Smooth Animations across sections for enhanced UX.

Technologies Used

HTML5 & CSS3

JavaScript (ES6+)

EmailJS (Client-side email sending)

Responsive design for desktop and mobile

Project Structure
NuggetsWebApp/
│
├── index.html              # Main landing page with hero, glass card, and registration
├── style.css               # CSS styles for hero, glass card, registration form, animations
├── script.js               # JavaScript for animations, email sending, lightbox
├── images/                 # Folder for all images used in the website
└── README.md               # Project description and setup instructions


Setup Instructions

Clone the Repository

git clone https://github.com/your-username/NuggetsGYM.git


Open index.html in a Browser

You can open it directly in Chrome, Firefox, or any modern browser.

EmailJS Integration

Create an account at EmailJS
.

Add a new email service (e.g., Gmail) and connect it.

Create a new email template with placeholders:

{{user_name}} for the user’s name
{{user_email}} for the user’s email


Copy your Public Key, Service ID, and Template ID.

Update script.js:

emailjs.init("YOUR_PUBLIC_KEY");
const serviceID = 'YOUR_SERVICE_ID';
const templateID = 'YOUR_TEMPLATE_ID';


Ensure your form input names match the template placeholders:

<input type="text" name="user_name" required>
<input type="email" name="user_email" required>


Test Registration

Fill the registration form.

Submit and check the provided email — you should receive a confirmation email.

How to Use

Scroll through the page to see parallax hero and fade-in glass cards.

Click images in glass cards to open them in a lightbox view.

Register with your name and email to receive a confirmation email.

Credits

EmailJS
 for client-side email functionality.

Inspired by modern glassmorphism UI and interactive web designs.

License

This project is licensed under the MIT License.

I can also create a slightly shorter “GitHub-ready” version with badges and setup instructions optimized for your repository page if you want.
