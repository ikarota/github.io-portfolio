        // JavaScript for collapsible sections
        document.addEventListener('DOMContentLoaded', () => {
            var coll = document.getElementsByClassName("collapsible");
            for (let i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.maxHeight){
                        content.style.maxHeight = null;
                    } else {
                        // Set maxHeight to scrollHeight for smooth expansion
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
            }

            // JavaScript for smooth scrolling navigation
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    // Get the target element by its ID
                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - (document.querySelector('header').offsetHeight + 20), // Adjust for fixed header height + a little extra padding
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Update current year in footer
            document.getElementById('current-year').textContent = new Date().getFullYear();

            // Adjust collapsible height on window resize to ensure correct expansion/collapse
            window.addEventListener('resize', () => {
                for (let i = 0; i < coll.length; i++) {
                    if (coll[i].classList.contains('active')) {
                        // Recalculate and set maxHeight if the section is open
                        coll[i].nextElementSibling.style.maxHeight = coll[i].nextElementSibling.scrollHeight + "px";
                    }
                }
            });
        });
