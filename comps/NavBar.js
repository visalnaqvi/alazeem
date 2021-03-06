import logo from '../public/logo.png'
import hamburger from '../public/icons/hamburger.svg'
import search from '../public/icons/search.svg'
import Link from 'next/link';
import Facebook from "../public/icons/facebook.svg"
import { useEffect } from 'react'; 
import Image from "next/image"
import style from "../styles/Nav.module.css"
import phone from "../public/icons/phone.svg"
import image from 'next/image';
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
                <li className={`${style.navli} ${style.pack}`}><Link href="/Tour-Packages"><a className={style.navlia}>Packages</a></Link>
                  <div className={`flex-class`}>
                  <div className={`${style.packwrap} flex-class`}>
                    <ul className={`${style.ul} ${style.left}`}>
                      <li className={style.li}><Link href="/Tour-Packages/Nainital-Tour-Package"><a className={style.a}>Nainital Tour Package</a></Link></li>
                      <li className={style.li}><Link href="/Tour-Packages/Agra-Tour-Package"><a className={style.a}>Agra Tour Package</a></Link></li>
                      <li className={style.li}><Link href="/Tour-Packages/Shimla-Tour-Package"><a className={style.a}>Shimla Tour Package</a></Link></li>
                      
                    </ul>
                    <ul className={style.ul}>
                      <li className={style.li}><Link href="/Tour-Packages/Andaman-Tour-Package"><a className={style.a}>Andaman Tour Package</a></Link></li>
                      <li className={style.li}><Link href="/Tour-Packages/Ladakh-Tour-Package"><a className={style.a}>Ladakh Tour Package</a></Link></li>
                      <li className={style.li}><Link href="/Tour-Packages/Goa-Tour-Package"><a className={style.a}>Goa Tour Package</a></Link></li>
                      </ul>
                      <ul className={style.ul}>
                      <li className={style.li}><Link href="/Tour-Packages/Srinagar-Tour-Package"><a className={style.a}>Srinagar Tour Package</a></Link></li>
                      <li className={style.li}><Link href=""><a className={style.a}>Jammu & Kashmir Tour Package</a></Link></li>
                      <li className={style.li}><Link href=""><a className={style.a}>Rishikesh Tour Package</a></Link></li>
                    </ul>
                    <ul className={`${style.ul} ${style.right}`}>
                      <li className={style.li}><Link href="/Tour-Packages/Mcleodganj-Tour-Package"><a className={style.a}>Mcleodganj Tour Package</a></Link></li>
                      <li className={style.li}><Link href=""><a className={style.a}>Saudi Arabia Tour Package</a></Link></li>
                      <li className={style.li}><Link href=""><a className={style.a}>Umrah Tour Package</a></Link></li>
                    </ul>
                    </div>
                    </div>
                </li>
                <li className={style.navli}><Link href="/Blogs/Best-places-to-visit-in-India-and-how-much-they-cost"><a className={style.navlia}>Blogs</a></Link></li> 
                <li className={style.navli}><Link href="/flights"><a className={style.navlia}>Flight Fare</a></Link></li> 
              </ul>
              {/* <div className={`${style.searchwrapper} flex-class`}>
                <label htmlFor="search"><div className={style.searchicon}><Image height={30} width={30} className={style.searchicon} src={ search } alt="" /></div></label>
                <input className={style.input} type="text" placeholder="Seach Destination" id="search" />
              </div> */}
              <div className={style.contact}>
                <div className={`${style.icondiv} flex-class`}>
                <Image src={phone} width={15} height={15}></Image>

                <p className={style.head}>CALL US NOW</p>
                </div>
                <div className={`${style.numbox} flex-class`}>
                <p className={style.num}>9205184001,</p>  
                <p className={`${style.num} ${style.middle}`}>9811042458,</p>  
                <p className={style.num}>9811136987</p>  
                </div>
              </div>
              <a target="blank" href="https://www.facebook.com/AlAzeemTravels/">

              <div className={style.facebook}><Image width={43} height={43} className="facebook" src={Facebook} alt="facebook icon" /></div></a>
              <Link href="/contactus"><a><button className={`${style.btn} btn`}>Contact Us</button></a></Link>
</nav>
{/* 
<nav className={`${style.nav} ${style.down} ${style.contactdown} flex-class`}>
<div className={style.contact}>
                <div className={`${style.icondiv} flex-class`}>
                <Image src={phone} width={15} height={15}></Image>

                <p className={style.head}>CALL US NOW</p>
                </div>
                <div className={`${style.numbox} flex-class`}>
                <p className={style.num}>9205184001,</p>  
                <p className={style.num}>9811042458,</p>  
                <p className={style.num}>9811136987</p>  
                </div>
              </div>
</nav> */}


<nav className={`${style.nav} ${style.down} flex-class`}>
              <ul className="down-ul flex-class">
                <li className={style.navli}><Link className="active" href="/"><a className={`${style.navlia} ${style.active}`}>Home</a></Link></li>
                <li className={style.navli}><Link className="flex-class" href="/aboutus">
                    <a className={style.navlia}>About</a>
                  </Link>
                </li>
                <li className={style.navli}><Link className="flex-class" href="/Tour-Packages">
                    <a className={style.navlia}>Packages</a>
                  </Link>
                </li>
                <li className={style.navli}><Link href="/flights"><a className={style.navlia}>Flight Fare</a></Link></li> 

              </ul>
</nav>

</>
   );
}
 
export default Nav;