import React, { useEffect } from 'react';
import style from "../styles/Slider.module.css"
const Slider = () => {
    useEffect(() => {
        const dots = document.querySelectorAll('.dot-wrap');
        const slider = document.querySelector('.inner-wrapper');
       slider.style.left = '0%';
    setInterval(() => {
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
    }, 5000)


    dots.forEach((li) => {
      li.addEventListener('click', (e) => {
        dots.forEach((li) => {
          li.classList.remove('active');
        })
        li.classList.add('active')
        var id = e.target.id;
        switch (id) {
          case 'dot-1': slider.style.left = '0%';
            break;
          case 'dot-2': slider.style.left = '-100%';
            break;
          case 'dot-3': slider.style.left = '-200%';
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
            <p className={style.content}><span className={style.span}>Hajj & Umrah</span> <br /> Package</p>
            <p className={style.contenttag}>Ya Allah Give us all the chance to perform Hajj</p>
            <div className="btn-holder flex-class">
              <button className={style.btnbg}>View Packages</button>
              <button className={style.btnw}>Contact Us</button>
            </div>
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