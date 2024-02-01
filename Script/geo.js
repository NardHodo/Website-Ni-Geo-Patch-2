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

    var list = document.getElementById('js-list');
    var items = list.getElementsByTagName('li');
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
setInterval(changePhoto , 5000);
setInterval(changeText, 5000);
setInterval(toggleULs, 5000);
