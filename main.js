function scrollAppear(){
  var slideup = document.querySelector('.slideUp');
  var mid = document.querySelectorAll('.mid');
  var slidePosition = slideup.getBoundingClientRect().top;
  var screenPosition = window.innerHeight/1.6;

  if(slidePosition < screenPosition){
    mid.forEach(item => {
      item.classList.add('mid-appear');
    })
  }
}

window.addEventListener('scroll',scrollAppear);