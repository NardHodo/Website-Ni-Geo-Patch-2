function showSection(sectionId) {
    
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });


    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');
}  


var portImages = ['Images/Portfolio-Image-1.jpg', 'Images/Portfolio-Image-2.jpg'];

var index = 0;
var photoElement = document.getElementById('grad-pic');

function changePhoto(){
    photoElement.src = portImages[index];
    index = (index + 1) %portImages.length;
}

setInterval(changePhoto , 5000);