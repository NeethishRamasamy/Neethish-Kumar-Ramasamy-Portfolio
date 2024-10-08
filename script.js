document.addEventListener('DOMContentLoaded', (event) => {
    const shapes = document.querySelectorAll('.shape');

    document.addEventListener('mousemove', (e) => {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;

        shapes.forEach(shape => {
            let speed = shape.getAttribute('data-speed');
            let moveX = (window.innerWidth * speed) * (0.5 - x);
            let moveY = (window.innerHeight * speed) * (0.5 - y);

            shape.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
        });
    });


    //parrallax effect
    window.addEventListener('scroll', function () {
        var scrollPosition = window.pageYOffset;
        var parallaxElements = document.getElementsByClassName('parallax');
        for (var i = 0; i < parallaxElements.length; i++) {
            var speed = 0.5; // Adjust for desired parallax speed
            parallaxElements[i].style.backgroundPositionY = -(scrollPosition * speed) + "px";
        }
    });

    // Navbar functionality
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }

    navSlide();
});


//  portfolio section
document.addEventListener('DOMContentLoaded', (event) => {
    // ... (keep your existing code)

    // Portfolio tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
});
// skills
document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill-item');

    function animateSkills() {
        skillItems.forEach(item => {
            const circle = item.querySelector('.skill-progress');
            const percentage = item.querySelector('.skill-percentage').textContent;
            const percentageValue = parseInt(percentage);
            const circumference = 2 * Math.PI * 45; // 45 is the radius of our circle
            const offset = circumference - (percentageValue / 100 * circumference);

            circle.style.strokeDashoffset = offset;
        });
    }

    // Intersection Observer to trigger animation when skills section is in view
    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});

//contact me
document.addEventListener('DOMContentLoaded', (event) => {
    // ... your existing code ...

    // Contact form submission handling
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        alert('Thank you for your message! I\'ll get back to you shortly.');
        contactForm.reset(); // Reset the form fields
    });
});