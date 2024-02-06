document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.hidden-pic');

    function showImages() {
        images.forEach(image => {
            image.classList.remove('hidden-pic');
        });
    }
    const delay = 2000; 
    setTimeout(showImages, delay);


    const footerDelay = 3000;

   
    function showFooter() {
        document.getElementById('footer').style.display = 'block';
        document.getElementById('footer').style.opacity = 1; 
    }
    setTimeout(showFooter, footerDelay);
    
});

const intervalTime = 2000;


function showNavbar() {
    document.getElementById('navbar').style.display = 'block';
}

setInterval(showNavbar, intervalTime);

function removeAnimation(){
    const animatedElement = document.getElementById('header-text');
    animatedElement.style.animation = 'none';
    animatedElement.style.border = 'none';
}

setInterval(removeAnimation, 2500);


document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll('.nav-link');
  
    links.forEach(function(link) {
      link.addEventListener('click', function() {
       
        links.forEach(function(l) {
          l.classList.remove('active');
        });
  
        this.classList.add('active');
      });
    });
  });
  
