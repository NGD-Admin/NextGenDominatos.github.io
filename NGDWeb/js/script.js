// section js code
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav a');
  
    links.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  

// Swipper js code
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// modal js ccode

// Function to open the modal with the given id
function openModal(id) {
  var modal = document.getElementById(id);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Disable scrolling on the body
  modal.addEventListener('click', function(event) {
    event.stopPropagation();
  });
  setTimeout(function(){ modal.querySelector('.modal-content').classList.add('active'); }, 10);
}

// Function to close the modal with the given id
function closeModal(id) {
  var modal = document.getElementById(id);
  modal.querySelector('.modal-content').classList.remove('active');
  setTimeout(function(){ 
    modal.classList.remove('active'); 
    document.body.style.overflow = ''; // Enable scrolling on the body
    modal.querySelector('.modal-content').style.opacity = '0'; 
  }, 300);
}

// Close the modal when clicking on the close button
window.onclick = function(event) {
  if (event.target.classList.contains('close')) {
    var modal = event.target.closest('.modal');
    modal.querySelector('.modal-content').classList.remove('active');
    setTimeout(function(){ 
      modal.classList.remove('active'); 
      document.body.style.overflow = ''; // Enable scrolling on the body
      modal.querySelector('.modal-content').style.opacity = '0'; 
    }, 300);
  }
}