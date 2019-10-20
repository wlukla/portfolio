window.onload = function() {
  // dropdown status: 0 - not visible, 1 - visible
  let dropDownStatus = 0;

  let dropList = document.getElementById('dropList'),
      dropDownTop = document.getElementById('dropDownTop'),
      dropDownList = document.getElementById('dropDownList');

  dropDownTop.addEventListener('click', function() {
    if (dropDownStatus === 0) {
      dropDownList.style.top = '60px';
      dropList.style.height = '400px';
      dropDownStatus++;
    } else {
      dropDownList.style.top = '-350px';
      dropList.style.height = '69px';
      dropDownStatus--;
    }
  });

  // mobile swiper
  let showDescriptionButton = document.querySelector(".description__mobile");
  let description = document.querySelectorAll(".text");

  description.forEach(item => item.addEventListener('animationend', function() {
    if (description[0].classList[1] == 'show') {
      description.forEach(item => item.classList.remove('show'));
    } else if (description[0].classList[2] == 'hide'){
      description.forEach(item => item.classList.remove('shown'));
      description.forEach(item => item.classList.remove('hide'));
    }
  }));


  showDescriptionButton.addEventListener('click', function() {
    if (description[0].classList.length === 1) {
      showDescriptionButton.innerHTML = 'Hide description';
      description.forEach(item => item.classList.add('show'))
      description.forEach(item => item.classList.add('shown'));

    } else {
      showDescriptionButton.innerHTML = 'Show description';
      description.forEach(item => item.classList.add('hide'))
    }
  });
}
