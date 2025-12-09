/* ==========================================================================
   WASHED AF (and Folded) - JavaScript
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  // --------------------------------------------------------------------------
  // Mobile Menu Toggle
  // --------------------------------------------------------------------------
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }

  // --------------------------------------------------------------------------
  // Smooth Scroll with Offset for Fixed Navigation
  // --------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        const nav = document.querySelector("nav");
        const navHeight = nav ? nav.offsetHeight : 0;
        const targetPosition = target.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // --------------------------------------------------------------------------
  // Contact Form Submission
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;

      // Here you would typically send the data to a server
      // For now, we'll just show a confirmation message
      console.log("Form submitted:", { name, email, phone, message });

      // Show confirmation
      alert(
        "Thank you, " +
          name +
          "! We'll be in touch soon to confirm your pickup."
      );

      // Reset form
      contactForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // Navigation Background on Scroll (Optional Enhancement)
  // --------------------------------------------------------------------------
  const nav = document.querySelector("nav");

  if (nav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.05)";
      } else {
        nav.style.boxShadow = "none";
      }
    });
  }

  // --------------------------------------------------------------------------
  // Intersection Observer for Scroll Animations (Optional Enhancement)
  // --------------------------------------------------------------------------
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe service cards for animation
  document.querySelectorAll(".service-card").forEach(function (card) {
    observer.observe(card);
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      const isActive = item.classList.contains("active");

      // Close all other items
      faqItems.forEach(function (otherItem) {
        otherItem.classList.remove("active");
        otherItem
          .querySelector(".faq-question")
          .setAttribute("aria-expanded", "false");
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add("active");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
});
