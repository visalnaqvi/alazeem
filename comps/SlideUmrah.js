import React, { useEffect } from 'react';
import style from "../styles/SliderUmrah.module.css"
const Slider = () => {
  function myFun(){
  const dots = document.querySelectorAll('.dot-wrap');
  const slider = document.querySelector('.inner-wrapper');
   if (slider.style.left == '0%') {
    slider.style.left = '-100%';
    dots.forEach((dot) => {
      dot.classList.remove('active');
    })
    dots[1].classList.add('active');
  }
  else if (slider.style.left == '-100%') {
    slider.style.left = '-200%';
    dots.forEach((dot) => {
      dot.classList.remove('active');
    })
    dots[2].classList.add('active');
  }
  else if (slider.style.left == '-200%') {
    slider.style.left = '0%';
    dots.forEach((dot) => {
      dot.classList.remove('active');
    })
    dots[0].classList.add('active');
  }
  }
    useEffect(() => {
        
    var timer = setInterval(myFun, 5000);
    const slider = document.querySelector('.inner-wrapper');
    slider.style.left = '0%';
    const dots = document.querySelectorAll('.dot-wrap');
    dots.forEach((li) => {
      li.addEventListener('click', (e) => {
        dots.forEach((li) => {
          li.classList.remove('active');
        })
        li.classList.add('active')
        var id = e.target.id;
        switch (id) {
          case 'dot-1': slider.style.left = '0%';
          clearInterval(timer);
          timer = setInterval(myFun, 5000);
            break;
          case 'dot-2': slider.style.left = '-100%';
          clearInterval(timer);
          timer = setInterval(myFun, 5000);
            break;
          case 'dot-3': slider.style.left = '-200%';
          clearInterval(timer);
          timer = setInterval(myFun, 5000);
            break;
          default:break;
        }
      })
    })
 

    
      },[])
    return (
        
       <>
        <div className={`${style.slider} slider`}>
      <div className={`${style.innerwrapper} inner-wrapper flex-class`}>
        <div className={`${style.img1} img1 bg-class`}></div>
        <div className={`${style.img2} img2 bg-class`}></div>
        <div className={`${style.img3} img3 bg-class`}>
          <div className={style.img3content}>
            <p className={style.content}><span className={style.span}>25 Days Economy<br></br>Umrah Package</span></p>
            <p className={style.contenttag}>Departure: 15 Nov 2022</p>
          </div>
        </div>
      </div>
        </div>
        <div className={`${style.dots} flex-class`} id="boom">
        <div id="dot-1" className={`${style.dotwrap} dot-wrap flex-class active`}>
            <div className={`${style.dotin} dotin`}></div>
        </div>
        <div id="dot-2" className={`${style.dotwrap} dot-wrap flex-class`}>
            <div className={`${style.dotin} dotin`}></div>
        </div>
        <div id="dot-3" className={`${style.dotwrap} dot-wrap flex-class`}>
            <div className={`${style.dotin} dotin`}></div>
        </div>
        </div>
        </>
   );
}






    



export default Slider;