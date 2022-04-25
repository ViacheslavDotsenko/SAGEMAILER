
let header_burger = document.querySelector(".header_burger");
let back = document.querySelector('body');


header_burger.onclick = function(){
    
    header_burger.classList.toggle("active");
    back.classList.toggle('lock');
};

    
let arrowSolutions = document.querySelector(".arrowSolutions");
let arrowResources = document.querySelector(".arrowResources");
let header_sub_list = document.querySelector(".header_sub_list");
let solutions = document.querySelector(".solutions");

arrowSolutions.onclick = function(){
    solutions.classList.toggle("sub_list_active");
};

arrowResources.onclick = function(){
    header_sub_list.classList.toggle("sub_list_active");
};  

document.querySelectorAll(".tabs_triggers_item").forEach((item) =>
item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');
    document.querySelectorAll('.tabs_triggers_item').forEach(
        (child)=> child.classList.remove('.tabs_active')
    );
    document.querySelectorAll('.tabs_content_item').forEach(
        (child) => child.classList.remove('tabs_active')        
    );
    item.classList.add('tabs_active');
    document.getElementById(id).classList.add('tabs_active');    
}));

 document.querySelector('.tabs_triggers_item').click();
 
/*  slider */
 let dots = 4;
      let sliderElem = document.querySelector(".slider");
      let dotElems = sliderElem.querySelectorAll(".slider__dot");
      let indicatorElem = sliderElem.querySelector(".slider__indicator");

      Array.prototype.forEach.call(dotElems, (dotElem) => {
        dotElem.addEventListener("click", (e) => {
            e.preventDefault();
          let currentPos = parseInt(sliderElem.getAttribute("data-pos"));
          let newPos = parseInt(dotElem.getAttribute("data-pos"));

          let newDirection = newPos > currentPos ? "right" : "left";
          let currentDirection = newPos < currentPos ? "right" : "left";

          indicatorElem.classList.remove(
            `slider__indicator--${currentDirection}`
          );
          indicatorElem.classList.add(`slider__indicator--${newDirection}`);
          sliderElem.setAttribute("data-pos", newPos);
        });
      });