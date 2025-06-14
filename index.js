document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn'); // Get the new close button
    const navLinks = document.getElementById('navLinks');

    // Function to open the sidebar
    function openSidebar() {
        navLinks.classList.remove('-translate-x-full'); // Slides it in
        navLinks.classList.add('translate-x-0');      // Makes it fully visible
    }

    // Function to close the sidebar
    function closeSidebar() {
        navLinks.classList.remove('translate-x-0');    // Moves it back to off-screen
        navLinks.classList.add('-translate-x-full');  // Hides it completely off-screen
    }

    // Event listener for opening the sidebar (hamburger icon)
    if (menuBtn) {
        menuBtn.addEventListener('click', openSidebar);
    }

    // Event listener for closing the sidebar (new 'X' button)
    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', closeSidebar);
    }

    // Optional: Close sidebar when a navigation link is clicked (common UX)
    const navLinksList = navLinks.querySelectorAll('a');
    navLinksList.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});



// Declare variable to store navbar element
const navElement = document.getElementById('navbar');
const navTextElements = document.querySelectorAll('.nav-text');
// detect scroll event on the document
document.addEventListener('scroll', function () {
    // console.log(window.scrollY);
    if (window.scrollY > 50) {
        // change navbar bg to white and text to black
        navElement.classList.add('bg-slate-600');
        navElement.classList.remove('bg-transparent');
        // Change text color to black
        navTextElements.forEach(function (el) {
            el.classList.add('text-white');
            el.classList.remove('text-slate-800');
    });
 } else {
        // change navbar bg to transparent
        navElement.classList.add('bg-transparent');
        navElement.classList.remove('bg-slate-600');

         // Revert text color to white (or your preferred default)
        navTextElements.forEach(function (el) {
            el.classList.add('text-slate-800');
            el.classList.remove('text-white');
        });
    }
});