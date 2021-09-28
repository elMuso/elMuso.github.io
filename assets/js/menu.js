// Mobile menu

const menuTrigger = document.querySelector(".menu-trigger");
const mobileQuery = getComputedStyle(document.body).getPropertyValue(
  "--phoneWidth"
);
const isMobile = () => window.matchMedia(mobileQuery).matches;
const isMobileMenu = () => {
  menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile());
};

isMobileMenu();



window.addEventListener("resize", isMobileMenu);


window.onscroll = function() {myFunction()};
            function myFunction() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
}