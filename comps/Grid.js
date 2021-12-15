import style from "../styles/Grid.module.css"
import Link from "next/dist/client/link";
const Grid = () => {
    return ( 
        <div className={`${style.wrap} flex-class`}>
            <Link href="/Tour-Packages/Agra-Tour-Package"><a>
            <div className={style.imgWrap}>
            <div className={`${style.text} flex-class`}>Agra</div>
            <img className={style.img} src="https://firebasestorage.googleapis.com/v0/b/buttons-2dc4a.appspot.com/o/agra.jpg?alt=media&token=e63655a5-c787-41f7-92fe-a9a06b721794"></img>
            <div className={style.shade}></div>
            </div>
            </a></Link>
            <Link href="/Tour-Packages/Andaman-Tour-Package"><a>
            <div className={style.imgWrap}>
            <div className={style.shade}></div>
            <div className={`${style.text} flex-class`}>Andaman</div>
            <img className={style.img} src="https://firebasestorage.googleapis.com/v0/b/buttons-2dc4a.appspot.com/o/Andaman.jpg?alt=media&token=a0affd95-645f-46ee-b076-ac824d1fdc4a"></img>
            </div>
            </a></Link>
            <Link href="/Tour-Packages/Ladakh-Tour-Package"><a>
            <div className={style.imgWrap}>
            <div className={style.shade}></div>
            <div className={`${style.text} flex-class`}>Ladakh</div>
            <img className={style.img} src="https://firebasestorage.googleapis.com/v0/b/buttons-2dc4a.appspot.com/o/Ladakh.jpg?alt=media&token=6f826fd5-67a4-4eaa-83f9-354b2d234e27"></img>
            </div>
            </a></Link>
            <Link href="/Tour-Packages/Goa-Tour-Package"><a>
            <div className={style.imgWrap}>
            <div className={style.shade}></div>
            <div className={`${style.text} flex-class`}>Goa</div>
            <img className={style.img} src="https://firebasestorage.googleapis.com/v0/b/buttons-2dc4a.appspot.com/o/goa.jpg?alt=media&token=ffa0ef0a-018d-453c-87a4-29fd4b625e85"></img>
            </div>
            </a></Link>
            <Link href="/Tour-Packages/Mcleodganj-Tour-Package"><a>
            <div className={style.imgWrap}>
            <div className={style.shade}></div>
            <div className={`${style.text} flex-class`}>Mcleodganj</div>
            <img className={style.img} src="https://firebasestorage.googleapis.com/v0/b/buttons-2dc4a.appspot.com/o/Mcleodganj.jpg?alt=media&token=38f9796d-0c92-48a1-b53f-9ff5012695d6"></img>
            </div>
            </a></Link>
            <Link href="/Tour-Packages/Nainital-Tour-Package"><a>
            <div className={style.imgWrap}>
            <div className={style.shade}></div>
            <div className={`${style.text} flex-class`}>Nainital</div>
            <img className={style.img} src="https://firebasestorage.googleapis.com/v0/b/buttons-2dc4a.appspot.com/o/nanital.jpg?alt=media&token=f1f6e7d3-8893-4611-9fee-31056664500b"></img>
            </div>
            </a></Link>
            <Link href="/Tour-Packages/Shimla-Tour-Package"><a>
            <div className={style.imgWrap}>
            <div className={style.shade}></div>
            <div className={`${style.text} flex-class`}>Shimla</div>
            <img className={style.img} src="https://firebasestorage.googleapis.com/v0/b/buttons-2dc4a.appspot.com/o/shimla.jpg?alt=media&token=19f48934-a9fb-4f28-8498-4e1b5e674326"></img>
            </div>
            </a></Link>
            <Link href="/Tour-Packages/Srinagar-Tour-Package"><a>
            <div className={style.imgWrap}>
            <div className={style.shade}></div>
            <div className={`${style.text} flex-class`}>Srinagar</div>
            <img className={style.img} src="https://firebasestorage.googleapis.com/v0/b/buttons-2dc4a.appspot.com/o/Srinagar.jpg?alt=media&token=1378f1a0-9d3e-4f90-8ac2-99499efab39e"></img>
            </div>
            </a></Link>

        </div>
     );
}
 
export default Grid;