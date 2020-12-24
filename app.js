//nav bar
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

//AJAX Method
$(document).ready(function() {
    var delay = 2000;
    $('.btn-default').click(function(e){
    e.preventDefault();
    var name = $('#name').val();
    if(name == ""){
    $('.message_box').html(
    '<span style="color:red; background-color: rgb(255, 232, 232); border: 1px solid red; padding: 10px 25px; display: block; width: 90; margin: auto;">Enter Your Name!</span>'
    );
    $('#name').focus();
    return false;
    }
    var email = $('#Email').val();
    if(email == ""){
    $('.message_box').html(
    '<span style="color:red; background-color: rgb(255, 232, 232); border: 1px solid red; padding: 10px 25px; display: block; width: 90; margin: auto;">Enter Email Address!</span>'
    );
    $('#Email').focus();
    return false;
    }
    if( $("#Email").val()!="" ){
    if( !isValidEmailAddress( $("#Email").val() ) ){
    $('.message_box').html(
    '<span style="color:red; background-color: rgb(255, 232, 232); border: 1px solid red; padding: 10px 25px; display: block; width: 90; margin: auto;">Provided email address is incorrect!</span>'
    );
    $('#Email').focus();
    return false;
    }
    }
    var Subject = $('#Subject').val();
    if(Subject == ""){
    $('.message_box').html(
    '<span style="color:red; background-color: rgb(255, 232, 232); border: 1px solid red; padding: 10px 25px; display: block; width: 90; margin: auto;">Enter Your Subject Here!</span>'
    );
    $('#Subject').focus();
       return false;
    }
    var message = $('#Message').val();
    if(message == ""){
    $('.message_box').html(
    '<span style="color:red; background-color: rgb(255, 232, 232); border: 1px solid red; padding: 10px 25px; display: block; width: 90; margin: auto;">Enter Your Message Here!</span>'
    );
    $('#Message').focus();
       return false;
    }
    $.ajax
    ({
    type: "POST",
    url: "contact.php",
    data: "name="+name+"&email="+email+"&Subject="+Subject+"&message="+message,
   
    success: function(data)
    {
    $('#contact-form').trigger('reset');
    setTimeout(function() {
    $('.message_box').html(data);
    }, delay);
    }
    });
    });
 });

 //Email Validation Function
 function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&’*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&’*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|”((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?”)@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

//scrollcue
scrollCue.init({

    // duration
    duration : 600,
  
    // interval
    interval : -0.7,
  
    // scroll position to trigger the animation
    percentage : 0.75 
    
  });

  //image gallery
  let potimg1 = document.querySelector('#potimg1');
  let potimg2 = document.querySelector('#potimg2');
  let potimg3 = document.querySelector('#potimg3');
  let button1 = document.querySelector('#button1');
  let button2 = document.querySelector('#button2');
  let button3 = document.querySelector('#button3');
  let button4 = document.querySelector('#button4');

  button1.addEventListener('click', () => {
    potimg1.src ='./imges/port1.png';
    potimg2.src ='./imges/port2.png';
    potimg3.src ='./imges/port3.png';
  });
  button2.addEventListener('click', () => {
    potimg1.src ='./imges/port4.png';
    potimg2.src ='./imges/port5.png';
    potimg3.src ='./imges/port6.png';
  });
  button3.addEventListener('click', () => {
    potimg1.src ='./imges/port6.png';
    potimg2.src ='./imges/port5.png';
    potimg3.src ='./imges/port2.png';
  });
  button4.addEventListener('click', () => {
    potimg1.src ='./imges/port3.png';
    potimg2.src ='./imges/port6.png';
    potimg3.src ='./imges/port4.png';
  });

   // Add active class to the current button (highlight it)
   var header = document.getElementById("myDIV");
   var btns = header.getElementsByClassName("cta");
   for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function() {
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
     });
   }