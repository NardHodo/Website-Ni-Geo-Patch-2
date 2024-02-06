
function showSection(sectionId) {
    
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });


    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.add('active');

    window.scrollTo({
        top: selectedSection.offsetTop,
        behavior: 'smooth'
    });
}  


var portImages = ['Images/Portfolio-Image-1.jpg', 'Images/Portfolio-Image-2.jpg'];

var index = 0;
var photoElement = document.getElementById('grad-pic');
var listElements = document.getElementById('achievements-list');

function changePhoto(){
    photoElement.src = portImages[index];
    index = (index + 1) %portImages.length;
}



var schoolElement = document.getElementById('school-header');
var index2 = 0;
var schoolList = ['Higher Grade of BNAHS(SHS)', 'University of Makati'];

function changeText(){
    schoolElement.textContent = schoolList[index2];
    index2 = (index2 + 1) %schoolList.length;
}



// Function to toggle the visibility of unordered lists
function toggleULs() {
    // Get the ul elements
    var list1 = document.getElementById('shs-list');
    var list2 = document.getElementById("umak-list");

    // Toggle the "hidden" class to show/hide lists
    list1.classList.toggle('hidden');
    list2.classList.toggle('hidden');
}

// Set an interval to call the toggleULs function every 5 seconds
setInterval(changePhoto , 3500);
setInterval(changeText, 3500);
setInterval(toggleULs, 3500);

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-60px"; /* Adjust as needed */
    }

    prevScrollpos = currentScrollPos;
};
