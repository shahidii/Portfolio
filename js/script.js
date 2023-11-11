/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let hieght = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if( top >= offset  && top < offset + hieght) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
       };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active');
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    //    reset: true,
      distance: '80px',
      duration: 1000,
      delay: 200

});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .wraper .right', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .wraper .left', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
    strings: ['Freelancer...!','Developer...!','Designer...!'],
    typeSpeed: 150,
    backSpeed: 100,
    backDelay: 100,
    loop: true
});

/*==================== validation ====================*/
        var Error = document.getElementById('error')

        function namecheck(){
            let name = document.getElementById('name').value;
            if(!name.match(/^[a-zA-Z]*$/)){
                Error.innerHTML = "Special charecters and numbers not allowed";
                return false;
            }
            if(name.length < 3){
                error.innerHTML="Name Should have minimum 3 charecters";
                return false;
            } 
        }
        emailcheck = () => {
            let email = document.getElementById('email').value;
            if(email.length < 1){
                error.innerHTML = "Not meeting minimum charecters"
                return false;
             }
            if(!email.match(/^[a-zA-Z0-9]+@/)){
                error.innerHTML = "Not valid mail id"
                return false;
            }
        }
        numbercheck = () => {
            let number = document.getElementById('number').value;
            if(number.length < 11){
                error.innerHTML = "invalid number"
                return false;
             }
            if(!number.match(/^[0-9]/)){
                error.innerHTML = "invalid number"
                return false;
            }
        }
        messagecheck = () => {
            let msg = document.getElementById('message').value;
            if(msg.length < 15){
                error.innerHTML = "Enter minimum 15 charecters...";
                return false;
            } 
        }
        subjectcheck = () => {
            let sub = document.getElementById('subject').value;
            if(sub.length < 10){
                error.innerHTML = "Enter minimum 10 charecters...";
                return false;
            } 
        }

 /*==================== form submission ====================*/
 $("#gform").submit((e) => {
    e.preventDefault()
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbwBFlhbv3OabGxO1o_H3z4AubaVzHf11ZS8ldm42A-n4ghAibRD6uH5VRytRc82i1FKFQ/exec",
      data: $("#gform").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully")
        window.location.reload()
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error")

      }
    })
  })
 