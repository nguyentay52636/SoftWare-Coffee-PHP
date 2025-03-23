(function(){
    // Back to Top - by CodyHouse.co
	var backTop = document.getElementsByClassName('js-cd-top')[0],
		offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
		offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		scrollDuration = 700,
		scrolling = false;

	if( backTop ) {
		//update back to top visibility on scrolling
		window.addEventListener("scroll", function(event) {
			if( !scrolling ) {
				scrolling = true;
				(!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
			}
		});

		//smooth scroll to top
		backTop.addEventListener('click', function(event) {
			event.preventDefault();
			(!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
		});
	}

	function checkBackToTop() {
		var windowTop = window.scrollY || document.documentElement.scrollTop;
		( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
		( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
		scrolling = false;
	}
})();

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