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


function toggleSection() {
    var experienceBtn = document.getElementById('experienceBtn');
    var educationBtn = document.getElementById('educationBtn');
    var experience = document.getElementById('experience');
    var education = document.getElementById('education');

    if (education.style.display === 'block') {
        experience.style.display = 'block';
        education.style.display = 'none';
        experienceBtn.classList.add('active');
        educationBtn.classList.remove('active');
    } else {
        experience.style.display = 'none';
        education.style.display = 'block';
        experienceBtn.classList.remove('active');
        educationBtn.classList.add('active');
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

document.addEventListener('DOMContentLoaded', () => {
	// Initialize Web3Forms
	const form = document.getElementById('contact-form');
	new Web3Forms('your-form-id', form);
});
