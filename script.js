// =========================================
// PORTFOLIO JAVASCRIPT
// =========================================


// 1. Current year automatically update
const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${new Date().getFullYear()} Shoaib Khan. All Rights Reserved.`;
}


// 2. Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// 3. Scroll reveal animation
const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .info-card, .interest-grid div"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// 4. Active navigation link
const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


// 5. Contact button protection
const callButton = document.querySelector('a[href^="tel:"]');

if (callButton) {

    callButton.addEventListener("click", () => {

        console.log("Opening phone dialer...");

    });

}


// 6. Email button
const emailButton = document.querySelector('a[href^="mailto:"]');

if (emailButton) {

    emailButton.addEventListener("click", () => {

        console.log("Opening email application...");

    });

}