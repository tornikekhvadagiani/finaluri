let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); 
}



// first section 
const slideShow = document.querySelectorAll('.hide');
let currentImageCounter = 0;

slideShow[currentImageCounter].style.display ="block";
   setInterval(nextImage, 5000);

function nextImage(){
    slideShow[currentImageCounter].style.display ="none";
    currentImageCounter= (currentImageCounter + 1)%(slideShow.length);
    slideShow[currentImageCounter].style.display ="block";
}

const skills = document.querySelector('.skills');
const Design = document.getElementById('Design');
const Photography = document.getElementById('Photography');
const Marking = document.getElementById('Marking');
const Photoshop = document.getElementById('Photoshop');

window.addEventListener('scroll', () => {
    if(skills.getBoundingClientRect().top <= 400) {
        Design.style.width = 80 + "%"
        Photography.style.width = 50 + "%"
        Marking.style.width = 65 + "%"
        Photoshop.style.width = 30 + "%"
    }
})


// section four slide with buttons

const firstButton = document.querySelector('.slide-btn-first');
const secondButton = document.querySelector('.slide-btn-second');
const thirdButton = document.querySelector('.slide-btn-third');

const firstReview = document.getElementById('review-1');
const secondReview = document.getElementById('review-2');
const thirdReview = document.getElementById('review-3');

secondButton.addEventListener('click', ()=>{
    secondReview.classList.remove('none');
    firstReview.classList.add('none');
    thirdReview.classList.add('none');
})

firstButton.addEventListener('click',()=>{
    firstReview.classList.remove('none');
    secondReview.classList.add('none');  
    thirdReview.classList.add('none');
})

thirdButton.addEventListener('click', ()=>{
    thirdReview.classList.remove('none');
    firstReview.classList.add('none');
    secondReview.classList.add('none');  
})


// send user to server 

const regForm = document.getElementById('reg-form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userUrl = document.getElementById('url');
const userMessage = document.getElementById('user-message');

const regButton = document.getElementById('submit');
const modal = document.querySelector('.block');
const modalButton = document.querySelector('.modal-btn');


function addNewUser(info) {
    fetch("https://borjomi.loremipsum.ge/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
    })
        .then((res) => res.json())
        .then((data) => {
          
        })
       
       
        .catch((err) => {
            console.log(err);
        });
}



regForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    const userNameValue = userName.value   
    const userEmailValue = userEmail.value
    const userUrlValue = userUrl.value
    const userMessageValue = userMessage.value



    const user = {
        Name:userNameValue,
        Email:userEmailValue,
        website: userUrlValue,
        message:  userMessageValue
    }
    console.log(user);
    
    buttonsEvent();
    addNewUser(user);
 
     regForm.reset();
    
})

function buttonsEvent(){

        modal.classList.remove('block');
       
       modalButton.addEventListener('click',()=>{
         modal.classList.add('block');
       })
}




const navLi = document.querySelectorAll('.nav-li');
const frontImage = document.querySelectorAll('.front-project');
const background = document.querySelectorAll('.title-background');

navLi.forEach((e) => 
    e.addEventListener('click', (li) =>{
        let clickedId = li.target.getAttribute('id');
        if(clickedId != "allid"){
            showCurrentImage(clickedId);
        } else {
            showAllImages();
        }
    })
)
     
function showCurrentImage(itemId){

    let activeImage = itemId + "-img";

     frontImage.forEach((el) =>{
        let image = el.getAttribute('id');
          if(activeImage != image){
            el.classList.add('display')
          } else {
            el.classList.remove('display');
          }
     })

     background.forEach((e) => {
        e.classList.remove('title-background');
        e.classList.add('block');
     })
}

function showAllImages(){
    frontImage.forEach((el) =>{
        el.classList.remove('display');
    })
    background.forEach((e) => {
        e.classList.remove('block');
        e.classList.add('title-background');
       
     })
}


