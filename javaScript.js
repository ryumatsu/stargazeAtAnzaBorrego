// toggle button functions
const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBtn.onclick = function () {
   dropdownMenu.classList.toggle("open");
   const isOpen = dropdownMenu.classList.contains("open");

   if (isOpen) {
      toggleBtnIcon.classList.remove("fa-bars");
      toggleBtnIcon.classList.add("fa-xmark");
   } else {
      toggleBtnIcon.classList.remove("fa-xmark");
      toggleBtnIcon.classList.add("fa-bars");
   }
};

// testimonials section
gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
   scrollTrigger: {
      trigger: ".reviews",
      start: "top 40%",
      end: "bottom top",
      scrub: 1,
   },
});

tl.fromTo("#testimonials .review.rl", { y: "350%" }, { y: "-150%" }, 0);
tl.fromTo("#testimonials .review.rr", { y: "300%" }, { y: "-50%" }, 0);

gsap.fromTo(
   ".rtitle",
   { x: "100%" },
   {
      x: "-120%",
      scrollTrigger: {
         trigger: ".rtitle",
         start: "center center",
         end: "bottom center",
         endTrigger: ".reviews",
         pin: true,
         scrub: 1,
      },
   },
   0
);
