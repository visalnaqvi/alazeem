import logo from '../public/logo.png'
import hamburger from '../public/icons/hamburger.svg'
import search from '../public/icons/search.svg'
import Link from 'next/link';
import Facebook from "../public/icons/facebook.svg"
import { useEffect } from 'react'; 
import Image from "next/image"
import style from "../styles/Nav.module.css"
const Nav = () => {

  useEffect(()=>{
    const lis = document.querySelectorAll("li a");
    const btn = document.querySelector(".btn")
    lis.forEach((li)=>{
      li.addEventListener("click",()=>{
          lis.forEach((li)=>{
            li.classList.remove(`${style.active}`);
          })
          li.classList.add(`${style.active}`);
      })
    })
    btn.addEventListener("click",()=>{
      lis.forEach((li)=>{
        li.classList.remove(`${style.active}`);
      })
    })
  },[])

    return (<>
        <nav className={`${style.nav} flex-class`}>

              <div className="flex-class">
                <div className={style.ham}>
                  <Image src={ hamburger } alt="" />
                </div>
                <Image width={160} height={60} className={style.logo} src={ logo } alt=""/>
              </div>
              <ul className={`${style.upul} flex-class`}>
                <li className={style.navli}><Link href="/"><a className={`${style.navlia} ${style.active}`}>Home</a></Link></li>
                <li className={style.navli}><Link href="/aboutus"><a className={style.navlia}>About Us</a></Link></li>
                <li className={style.navli}><Link href="/packages"><a className={style.navlia}>Packages</a></Link></li>
              </ul>
              <div className={`${style.searchwrapper} flex-class`}>
                <label htmlFor="search"><div className={style.searchicon}><Image height={30} width={30} className={style.searchicon} src={ search } alt="" /></div></label>
                <input className={style.input} type="text" placeholder="Seach Destination" id="search" />
              </div>
              <a target="blank" href="https://www.facebook.com/AlAzeemTravels/">

              <div className={style.facebook}><Image width={43} height={43} className="facebook" src={Facebook} alt="facebook icon" /></div></a>
              <Link href="/contactus"><a><button className={`${style.btn} btn`}>Contact Us</button></a></Link>
</nav>

<nav className={`${style.nav} ${style.down} flex-class`}>
              <ul className="down-ul flex-class">
                <li className={style.navli}><Link className="active" href="/"><a className={`${style.navlia} ${style.active}`}>Home</a></Link></li>
                <li className={style.navli}><Link className="flex-class" href="/aboutus">
                    <a className={style.navlia}>About Us</a>
                  </Link>
                </li>
                <li className={style.navli}><Link className="flex-class" href="/packages">
                    <a className={style.navlia}>Packages</a>
                  </Link>
                </li>
              </ul>
</nav>

</>
   );
}
 
export default Nav;