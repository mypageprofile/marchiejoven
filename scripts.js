document.addEventListener('DOMContentLoaded', function() {
    const headerLinks = document.querySelectorAll('nav ul li a');

    headerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Smooth scroll to the section
                window.scrollTo({
                    top: targetSection.offsetTop - (window.innerHeight - targetSection.offsetHeight) / 2,
                    behavior: 'smooth'
                });
            }
        });
    });
});


function toggleSection(section) {
    var experienceBtn = document.getElementById('experienceBtn');
    var educationBtn = document.getElementById('educationBtn');
    var experience = document.getElementById('experience');
    var education = document.getElementById('education');

    if (section === 'education') {
        // Show education section, hide experience section
        experience.style.display = 'none';
        education.style.display = 'block';
        experienceBtn.classList.remove('active');
        educationBtn.classList.add('active');
    } else {
        // Show experience section, hide education section
        experience.style.display = 'block';
        education.style.display = 'none';
        experienceBtn.classList.add('active');
        educationBtn.classList.remove('active');
    }
}

function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        var offset = element.offsetTop - (window.innerHeight / 2);
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}


// JavaScript for parallax background effect
document.addEventListener('mousemove', function(e) {
    const body = document.querySelector('body');
    const xOffset = -(e.clientX / window.innerWidth - 0.5) * 5; // Adjust the multiplier for intensity
    const yOffset = -(e.clientY / window.innerHeight - 0.5) * 30; // Adjust the multiplier for intensity
    body.style.backgroundPosition = `${xOffset}px ${yOffset}px`;
});

// JavaScript for Check CV button
function openCV() {
    window.open('img/cv.pdf', '_blank');
}

// JaveScript for Progress Bar animation
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');

    const animateProgressBars = () => {
        progressBars.forEach(progressBar => {
            const percentage = progressBar.getAttribute('data-percentage');
            progressBar.style.width = percentage + '%';
            console.log(`Animating progress bar to ${percentage}%`); // Debug log
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Skills section is in view'); // Debug log
                animateProgressBars();
                observer.unobserve(skillsSection);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FOR SEND BUTTON PROCESS
const form = document.getElementById('contact-form');
const result = document.getElementById('result');
const homeSection = document.getElementById('home'); // Replace 'home' with the ID of your home section

// Hide result element initially
result.style.display = 'none';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    const json = JSON.stringify(object);

    result.textContent = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        const jsonResponse = await response.json();
        if (response.ok) {
            result.textContent = "Form submitted successfully";
            // Show result element
            result.style.display = 'block';
            // Redirect to home section after successful form submission
            setTimeout(() => {
                // Scroll to home section
                homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Adjusting window location to home section to ensure proper visibility
                if (!window.location.hash || window.location.hash !== '#home') {
                    window.location.hash = '#home'; // Redirect to the home section
                }
            }, 2000); // Redirect after 2 seconds (adjust delay as needed)
        } else {
            console.log(response);
            result.textContent = jsonResponse.message || "Failed to submit form";
            // Show result element
            result.style.display = 'block';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        result.textContent = "Something went wrong!";
        // Show result element
        result.style.display = 'block';
    })
    .finally(() => {
        form.reset();
        setTimeout(() => {
            // Hide result element after delay
            result.style.display = 'none';
            result.textContent = ""; // Clear result message
        }, 3000);
    });
});





