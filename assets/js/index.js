document.addEventListener('DOMContentLoaded', function () {
    let pageNav = document.querySelector('#navbar');
    let navLinks = pageNav.querySelectorAll('.nav-link');
    let navSects = document.querySelectorAll('section'); 

    function setActiveNavLink() {
        let current = '';

        navSects.forEach(navSect => {
            const sectionTop = navSect.offsetTop;
            if (scrollY >= sectionTop - pageNav.offsetHeight * 2) {
                current = navSect.getAttribute('id');
            }
        })

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            current = 'Contact';
        }
        
        navLinks.forEach(navLink => {
            navLink.children[0].classList.remove('active'); 
        })

        if (current !== '') {
            navLinks.forEach(navLink => {
                if (navLink.getAttribute('href') === '#' + current) {
                    navLink.children[0].classList.add('active'); 
                }
            })
        }
    }
    
    setActiveNavLink();
    window.addEventListener('scroll', setActiveNavLink);
});