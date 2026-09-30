(function () {
  emailjs.init({
    publicKey: 'La-mahUIgmG5LeYeq',
  });
})();

const form = document.querySelector('#contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  emailjs
    .sendForm(
      'portfolio_email',
      'template_elep9lr',
      this
    )
    .then(function () {
      alert('메일이 성공적으로 전송되었습니다.');
      form.reset();
    })
    .catch(function (error) {
      alert('메일 전송에 실패했습니다.');
      console.error('EmailJS ERROR:', error);
    });
});
const projectRadios = document.querySelectorAll(
  '.project > input[type="radio"]'
);
const projectTabs = document.querySelectorAll(
  '.project_tab > label'
);
const projectBoxes = document.querySelectorAll(
  '.project_box'
);
// gsap
gsap.set(".flair", {
  xPercent: -50,
  yPercent: -50
});

const xSetter = gsap.quickSetter(".flair", "x", "px");
const ySetter = gsap.quickSetter(".flair", "y", "px");

window.addEventListener("mousemove", (e) => {
  xSetter(e.clientX);
  ySetter(e.clientY);
});

let currentIndex = 0;
// 프로젝트 변경
function showProject(index) {

  if (index < 0) {
    index = projectBoxes.length - 1;
  }
  if (index >= projectBoxes.length) {
    index = 0;
  }
  currentIndex = index;
  projectRadios.forEach((radio, i) => {
    radio.checked = i === currentIndex;
  });
  projectBoxes.forEach((box, i) => {
    box.classList.toggle(
      'active',
      i === currentIndex
    );
  });
  projectTabs.forEach((tab, i) => {
    tab.classList.toggle(
      'active',
      i === currentIndex
    );
  });
}
// 탭 클릭
projectTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    showProject(index);
  });
});
// 이전 / 다음 버튼
projectBoxes.forEach((box) => {
  const prevButton = box.querySelector(
    '.fa-chevron-left'
  );
  const nextButton = box.querySelector(
    '.fa-chevron-right'
  );
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      showProject(currentIndex - 1);
    });
  }
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      showProject(currentIndex + 1);
    });
  }
});
// 초기 실행
showProject(0);

$(function(){
  let point=0;
  $('section').mousewheel(function(event, delta){
    if(delta>0){
      point=$(this).prev().offset().top;
    }else if(delta<0){
      point=$(this).next().offset().top;
    }$('html,body').stop().animate({scrollTop:point},500);
  })
})

