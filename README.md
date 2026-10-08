# Portfolio

**From zer0, To developer**

컴맹에서 시작해 주니어 개발자로 성장하고 있는 과정을 담은 개인 포트폴리오입니다.

‘퍼즐을 하나씩 맞춰가며 해결한다’​는 의미를 포트폴리오 전체 디자인에 담아
자기소개부터 프로젝트, 기술 스택, Contact까지 하나의 흐름으로 구성했습니다.

## ✨ 주요 기능

* 프로젝트별 작업 내용 및 기술 스택 구성
* jQuery를 활용한 동적 인터랙션
* 퍼즐을 활용한 자기소개 인터랙션
* GSAP 메인 타이틀, 텍스트 순차 등장 애니메이션
* EmailJS를 활용한 Contact Form 구현

## 🛠️ 기술 스택

### Markup

* HTML5

### Frontend

* SCSS
* JavaScript
* jQuery
* GSAP

### Tools

* GitHub
* Figma
* ChatGPT

## ⭐ 주요 구현 내용

### 01. 퍼즐을 활용한 자기소개
```text
포트폴리오의 핵심 컨셉인 '성장'을 퍼즐에 비유하여
자기소개 콘텐츠를 퍼즐 형태의 인터랙션으로 구성하였습니다.

각 퍼즐 조각에 마우스를 올리면 관련 콘텐츠가 나타나도록 구현하여
사용자가 직접 탐색하며 정보를 확인할 수 있도록 구성하였습니다.
```
### 02. 프로젝트 Hover 인터랙션
```text
프로젝트 목록에 마우스를 올리면
프로젝트 이미지가 나타나도록 구현하여 콘텐츠에 대한 시각적인 흥미를 높였습니다.

프로젝트명과 이미지가 자연스럽게 연결되도록 구성하여
사용자가 프로젝트 정보를 직관적으로 확인할 수 있도록 구현하였습니다.
```
### 03. GSAP를  애니메이션
```text
GSAP를 활용하여 홈 화면의 메인 타이틀과
하단 텍스트 순차 등장 애니메이션 인터랙션을 구현했습니다.

메인 타이틀 등장 애니메이션
하단 텍스트 순차 등장 애니메이션
```
<details>
<summary>코드 보기</summary>

```js
document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.title', {
    x: -1500,
    duration: 1.3,
    ease: 'elastic.out(1, 0.8)'
  });

  gsap.from('.title_bottom p', {
    opacity: 0,
    delay: (index) => index * 0.5
  });
});
```
</details>

#### 💡 셀프 코드리뷰 & 배운 점

* **GSAP를 활용한 애니메이션 구현**: GSAP를 활용하여 홈 화면의 메인 타이틀과 하단 텍스트가 순차적으로 등장하도록 애니메이션을 구현했습니다. CSS만으로 구현하는 것보다 `duration`, `delay`, `ease` 등의 속성을 활용해 애니메이션의 움직임과 속도를 세밀하게 조절할 수 있다는 것을 배웠습니다.

* **순차적인 등장 효과 구현**: 하단 텍스트에 `delay`를 적용하여 각각의 텍스트가 순서대로 나타나도록 구현했습니다. 같은 애니메이션을 반복해서 작성하지 않고 요소의 순서에 따라 지연 시간을 다르게 적용하면서 GSAP의 애니메이션 제어 방식을 이해할 수 있었습니다.

* **애니메이션과 사용자 경험**: 단순히 요소를 움직이는 것보다 페이지가 처음 보여질 때 어떤 순서로 콘텐츠가 등장하는지가 사용자에게 전달되는 정보의 흐름에도 영향을 준다는 것을 경험했습니다. 메인 타이틀을 먼저 보여주고 하단 텍스트가 이어서 등장하도록 구성하여 자연스러운 첫 화면 인터랙션을 만들었습니다.

* **앞으로의 보완점**: 현재는 페이지가 로드될 때 애니메이션이 한 번 실행되는 방식으로 구현했습니다. 앞으로는 스크롤 위치에 따라 요소가 등장하거나 사라지는 `ScrollTrigger`를 활용해 다양한 인터랙션을 구현하고, 화면 크기에 따른 애니메이션 동작도 세밀하게 조정해 보고 싶습니다.

### 04. Contact Form
```text
EmailJS를 활용하여 사용자가 Contact Form에 작성한 내용을
이메일로 전달할 수 있도록 구현하였습니다.
```

<details>
<summary>코드 보기</summary>
  
```js
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
      alert('메일이 성공적으로 전송되었습니다. 감사합니다^^');
      form.reset();
    })
    .catch(function (error) {
      alert('메일 전송에 실패했습니다.');
      console.error('EmailJS ERROR:', error);
    });
});
```
</details>

#### 💡 셀프 코드리뷰 & 배운 점

* **jQuery를 활용한 프로젝트 탭 제어**: 프로젝트 탭을 클릭했을 때 해당 프로젝트만 보여주도록 `showProject()` 함수를 만들어 구현했습니다. `addClass`, `removeClass` 대신 `classList.toggle()`을 활용하여 현재 선택된 프로젝트에만 `active` 클래스를 적용하는 방식으로 화면을 제어했습니다.

* **이전·다음 버튼 기능 구현**: 프로젝트마다 이전·다음 버튼을 연결하고 `showProject()` 함수에 현재 인덱스를 전달하여 프로젝트를 이동할 수 있도록 구현했습니다. 첫 번째 프로젝트에서 이전 버튼을 누르면 마지막 프로젝트로 이동하고, 마지막 프로젝트에서 다음 버튼을 누르면 첫 번째 프로젝트로 이동하도록 인덱스를 처리하면서 배열의 순환 구조를 이해할 수 있었습니다.

* **마우스휠을 활용한 섹션 이동**: jQuery의 `mousewheel` 이벤트를 활용하여 마우스 휠 방향에 따라 이전 또는 다음 섹션으로 이동하도록 구현했습니다. `offset().top`으로 각 섹션의 위치를 가져오고 `animate()`를 사용해 자연스럽게 스크롤되도록 구현하면서 이벤트와 스크롤 동작을 연결하는 방법을 익혔습니다.

* **앞으로의 보완점**: 현재는 마우스휠 이벤트를 이용해 섹션을 한 화면씩 이동하도록 구현했습니다. 앞으로는 모바일 환경에서는 마우스휠 이벤트가 사용되지 않는 점을 고려하여 터치나 스와이프 방식으로도 자연스럽게 이동할 수 있도록 보완하고, 화면 크기에 따라 이벤트 동작을 다르게 적용해 반응형 환경에서도 안정적으로 동작하도록 개선해 보고 싶습니다.


## 🖥️ 실행 결과

### Home
<img width="885" height="604" alt="image" src="https://github.com/user-attachments/assets/98cd00a6-6d86-4f1e-a911-89fd9ea4eed0" />

### Profile
<img width="1406" height="806" alt="image" src="https://github.com/user-attachments/assets/917f4e96-0007-4373-842f-f783ef874f31" />

### Skill
<img width="1379" height="816" alt="image" src="https://github.com/user-attachments/assets/c6933888-8abd-46ed-ae86-c875314fb696" />

### Project
<img width="1330" height="751" alt="image" src="https://github.com/user-attachments/assets/857d6d90-4545-43d8-bf38-a18b62d46c6b" />

### Contact
<img width="1260" height="915" alt="image" src="https://github.com/user-attachments/assets/060d0dee-f757-4fe7-bd19-941b3f2b3535" />

---

### GitHub

https://jeong-yujin-web.github.io/Portfolio/


### 회고

이번 포트폴리오를 제작하며 단순히 정보를 나열하는 것이 아닌
하나의 컨셉과 스토리를 가진 웹사이트를 구현하고자 하였습니다.

특히 퍼즐을 활용해 문제를 해결하여 개발자로 성장하는 과정을 시각적으로 표현하고,
GSAP와 jQuery를 활용해 사용자의 움직임에 반응하는 인터랙션을 구현하면서
웹에서 디자인과 기능을 함께 구현하는 경험을 할 수 있었습니다.

앞으로도 다양한 인터랙션을 직접 구현해보며
사용성과 완성도를 함께 고려하는 프론트엔드 개발자로 성장하고자 합니다.
