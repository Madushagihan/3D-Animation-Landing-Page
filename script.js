  // Dark/Light Mode Toggle
    const toggleBtn = document.getElementById("modeToggle");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
    });

    // Navbar Scroll Effect
    window.addEventListener("scroll", () => {
      const nav = document.querySelector(".navbar");
      nav.classList.toggle("scrolled", window.scrollY > 50);
    });

    // Scroll Animations
    const fadeElems = document.querySelectorAll(".fade-in");
    window.addEventListener("scroll", () => {
      fadeElems.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 100){
          el.classList.add("visible");
        }
      });
    });

    // Counters
    function animateCounter(id, target) {
      let count = 0;
      const counter = document.getElementById(id);
      const interval = setInterval(() => {
        if(count < target){
          count++;
          counter.textContent = count;
        } else {
          clearInterval(interval);
        }
      }, 20);
    }
    window.addEventListener("scroll", () => {
      if(document.getElementById("stats").getBoundingClientRect().top < window.innerHeight){
        animateCounter("visitors", 500);
        animateCounter("bookings", 1200);
        animateCounter("countries", 80);
      }
    }, { once: true });