
      document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector("#site-header");
        
            if (navbar) {
              window.addEventListener("scroll", function () {
                var scroll = window.scrollY; // Lấy vị trí cuộn
                if (scroll >= 80) {
                  navbar.classList.add("nav-fixed");
                  navbar.style.top = "-50px";
                } else {
            //  navbar.classList.remove("nav-fixed"); 
                  navbar.style.top = "0px";
                }
              });
            }
          });
          let mybutton = document.querySelector(".back_to_top");

          // When the user scrolls down 20px from the top of the document, show the button
          window.onscroll = function() {scrollFunction()};
          
          function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
          }
          
          // When the user clicks on the button, scroll to the top of the document
          function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          }
          mybutton.addEventListener("click", topFunction);
          const listSlick= [
            ":	https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-1.png",
            "	https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-2.png",
            "	https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-3.png",
            "	https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-4.png",
            "	https://barista.qodeinteractive.com/elementor/wp-content/uploads/2017/02/Client-5.png",


          ]