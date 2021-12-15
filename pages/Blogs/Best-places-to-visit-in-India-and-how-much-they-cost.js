import style from "../../styles/Blog.module.css";
import Headings from "../../comps/blogs/Headings";
import Image from "next/image";
import Head from "next/head"
import Table from "../../comps/blogs/Table";
import "firebase/firestore"
import { useEffect, useState } from "react";
import firebase from 'firebase/app';
import SliderSingle from "../../comps/Packages/SliderSingle";
import heroImage from "../../public/blog-images/must-visit-place-in-india-and-how-much-they-cost/hero.jpg"
import goaImage from "../../public/blog-images/must-visit-place-in-india-and-how-much-they-cost/goa.jpg"
import Mcleodganj from "../../public/blog-images/must-visit-place-in-india-and-how-much-they-cost/Mcleodganj.jpg"
import Srinagar from "../../public/blog-images/must-visit-place-in-india-and-how-much-they-cost/Srinagar.jpg"
import Andaman from "../../public/blog-images/must-visit-place-in-india-and-how-much-they-cost/Andaman.jpg"
import Ladakh from "../../public/blog-images/must-visit-place-in-india-and-how-much-they-cost/Ladakh.jpg"
const Blog = () => {
  let goaPackages=[{title:"Goa - Lakshadweep Cruise Vacation",price:"Rs.30,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"1" , link:"/Tour-Packages/Goa-Tour-Package"},
  {title:"Glimpse Of Goa With Flight!",price:"Rs.15,000/-",nights:"3 Nights",facilities:"Meals, Accommodation, Transfer" , key:"2" , link:"/Tour-Packages/Goa-Tour-Package"},
  {title:"Luxury Getaway To Goa For 5 Nights",price:"Rs.20,000/-",nights:"5 Nights",facilities:"Meals, Accommodation" , key:"3" , link:"/Tour-Packages/Goa-Tour-Package"},
  {title:"2 nights Cruise Holiday",price:"Rs.15,000/-",nights:"2 Nights",facilities:"Meals, Accommodation" , key:"4" , link:"/Tour-Packages/Goa-Tour-Package"},
  {title:"Honeymoon Trip To Goa",price:"Rs.9,000/-",nights:"5 Nights",facilities:"Meals, Accommodation, Transfer" , key:"5" , link:"/Tour-Packages/Goa-Tour-Package"},

]

let andamamPackages=[{title:"Andaman - Xmas & New Year Special",price:"Rs.30,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"1", link:"/Tour-Packages/Andaman-Tour-Package"},
{title:"Fascinating Andaman With Photoshoot And Glass Bottom Ride",price:"Rs.15,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"2", link:"/Tour-Packages/Andaman-Tour-Package"},
{title:"Andaman Delight",price:"Rs.5,000/-",nights:"3 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"3", link:"/Tour-Packages/Andaman-Tour-Package"},
{title:"Dazzling Andaman With Photoshoot, Glass Bottom Boat Ride",price:"Rs.22,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"4", link:"/Tour-Packages/Andaman-Tour-Package"},
{title:"Mini Andaman",price:"Rs.11,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"5", link:"/Tour-Packages/Andaman-Tour-Package"},

]

let srinagarPackages=[{title:"Kashmir Leisure",price:"Rs.9,000/-",nights:"3 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"1" , link:"/Tour-Packages/Srinagar-Tour-Package"},
{title:"Delightful Kashmir",price:"Rs.12,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"2" , link:"/Tour-Packages/Srinagar-Tour-Package"},
{title:"Enthralling Kashmir",price:"Rs.15,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"3" , link:"/Tour-Packages/Srinagar-Tour-Package"},
{title:"Splendid Kashmir",price:"Rs.12,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"4" , link:"/Tour-Packages/Srinagar-Tour-Package"},
{title:"Heart Of Kashmir - Standard",price:"Rs.7,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"5" , link:"/Tour-Packages/Srinagar-Tour-Package"},

]

let ladakhPackages=[
{title:"Thrilling Ladakh - Deluxe - Winter Special",price:"Rs.19,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"1" , link:"/Tour-Packages/Ladakh-Tour-Package"},
{title:"Ladakh Special (leh)",price:"Rs.17,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"2" , link:"/Tour-Packages/Ladakh-Tour-Package"},
{title:"Thrilling Ladakh - Premium -Winter Special",price:"Rs.22,000/-",nights:"4 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"3" , link:"/Tour-Packages/Ladakh-Tour-Package"},
{title:"A Week in Frozen Ladakh - Deluxe",price:"Rs.25,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"4" , link:"/Tour-Packages/Ladakh-Tour-Package"},
{title:"A Week in Frozen Ladakh - Premium",price:"Rs.26,000/-",nights:"5 Nights",facilities:"Meals, Flights, Accommodation, Transfer, Sightseeing" , key:"5" , link:"/Tour-Packages/Ladakh-Tour-Package"},

]

const [pckages, setPack] = useState();

const config={
  apiKey: "AIzaSyBwGQoCe0wTlR61fueDKA0yA4n5xmMfPrg",
  authDomain: "buttons-2dc4a.firebaseapp.com",
  databaseURL: "https://buttons-2dc4a-default-rtdb.firebaseio.com",
  projectId: "buttons-2dc4a",
  storageBucket: "buttons-2dc4a.appspot.com",
  messagingSenderId: "241629842019",
  appId: "1:241629842019:web:6c248c713e6a27cd494656",
  measurementId: "G-QK6TC8JTHZ"
}

if(!firebase.apps.length){
  firebase.initializeApp(config)
  
}else{ firebase.app() };
const db = firebase.firestore()
useEffect(()=>{

db.collection("packages")
.onSnapshot((querySnapshot) => {
      const inpack = []
      querySnapshot.forEach((doc) => {
          inpack.push(doc.data());
          });
          setPack(inpack)
})

}, [])

let mcleodganjPackages=[{title:"Weekend Gateways - Dharamshala",price:"Rs 8,000",nights:"5 Nights",facilities:"Meals , Accommodation , Volvo , Transfer , Sightseeing" , key:"1" , link:"/Tour-Packages/Mcleodganj-Tour-Package"},]
  return (
    
    <>
    <Head>
      <title>Best places to visit in India and how much they cost.</title>
      <link rel="icon" href="%PUBLIC_URL%/logo192.png" />
        <meta
      name="description"
      content="We have made a list to help you out in choosing your
      perfect destination and how much it will cost you to make a perfect
      holiday plan to visit there. We also have provided different package
      options available so you can choose the best holiday destination for
      you."
    />
        <link rel="icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

      </Head>
      <div className={`${style.wrapper} flex-class`}>
        <div className={style.left}>
          <Headings h1="Must-visit places in India, how much they cost, and are they worth the expense?"></Headings>
          <p className={style.p}>
            India is a diverse country with hundreds of traditions, different
            cultures, and numerous historical events from Mughals in North
            India, Marathas in central India, and Rajputana of Rajasthan they
            all went to make some mesmerizingly beautiful monuments, cities, and
            places and some of them are <b className={style.b}>must-visit places in India</b> if you are on a tour
            to India. We have made a list to help you out in choosing your <b className={style.b}>perfect destination and how much it will cost you</b> to make a perfect
            holiday plan to visit there. We also have provided different package
            options available so you can choose the best holiday destination for
            you.
          </p>
          <ul>
            <li>
            <Headings h2="1- Goa – The official Party Hub"></Headings>
              <div className={style.image}>
                <Image src={goaImage} alt="Goa"></Image>
              </div>
              <p className={style.p}>
                Goa is one of the most <b>popular destinations among youth</b> in
                India. The natural beautiful beaches in the state with different
                beach sports, cruises, partying, and the whole vibe of the state
                is a must-experience thing. Visit Goa with your friends once and
                you will never forget the trip. Take the famous Mumbai to goa
                cruise, party with your friends, and live every moment to its
                fullest.
              </p>
              <Headings h3="Places to visit in Goa"></Headings>
              <ul className={style.visitul}>
                <li className={style.visitli}>
                  <Headings h4="Panjim"></Headings>
                  <p className={style.p}>
                    Panjim has places to see, ways to wander, and signature
                    experiences. Cant-miss spots to dine, drink, and feast.
                    Fontainhas, Reis Magos, Shantadurga Temple, Diver Island
                    all are can’t miss destinations in Panjim.
                  </p>
                </li>
                <li className={style.visitli}>
                  <Headings h4="Bardez"></Headings>
                  <p className={style.p}>
                    With clear skies, beautiful beaches and mesmerizing
                    monuments Bardez is a <b>popular destination in Goa</b>. Church of
                    lady hope, Candolim Beach, Kegdole beach are some <b className={style.b}>must-visit
                    places in Bardez, Goa.</b>
                  </p>
                </li>
                <li className={style.visitli}>
                  <Headings h4="Also Try"></Headings>
                  <p className={style.p}>
                    Water Sports At Baga and Calangute Beaches
                  </p>

                  <p className={style.p}>
                    Mackie’s Night Bazaar, Coco Beach, Temple of Bodgeshwar,
                    Anjuna Flea Market, Grand 7 Casino, St Xavier’s Church, and
                    the cities of Calangute, Canacona when you are in Goa
                  </p>
                </li>
              </ul>
              <Headings h3="How much a trip to Goa will cost you?"></Headings>
              <p className={style.p}>
                It’s obvious that you will not be visiting Goa alone. Let’s
                assume you are 4 people going together.
                <br></br>
                <br></br>
                Flight tickets from Delhi cost roughly around 15000.
                <br></br>
                <br></br>A comfortable & hygienic duplex house near Calangute
                beach costs somewhat about 18k for a week.
                <br></br>
                <br></br>
                These duplexes/cottages have
                <ul className={style.ul}>
                  <li>1 or 2 bathrooms,</li>
                  <li>2 spacious bedrooms,</li>
                  <li>A living room with TV and chairs,</li>
                  <li>A kitchen with refrigerator</li>
                </ul>
                <br></br>
               
                We suggest these cottages/houses over hotels as they provide
                more facilities and privacy.
                <br></br>
                Moreover, there is proximity to Calangute & Bagha beach. So you
                can enjoy the beautiful view of the beach and rome around till
                late at night without worrying about getting home. So that will
                be 4500 rupees per head for a week.
                <br></br>
                <br></br>
                For transportation, you can rent an Activa at 400 rupees per day
                for 2 persons which will be more flexible to roam in Goa as the
                roads are more congested there. So that will be 400*7/2= 1400
                per head. Let’s say Fuel consumption could be around 2000
                approximately in a week. So that’s 1000 per head.
                <br></br>
                <br></br>
                You can get food 3 times a day in Rs. 500. That will be
                500*7=3500.<br></br>
                <br></br>A trip to the casino will cost Rs 2000 per head.
                <br></br>
                <br></br>
                Add additional expenses of Rs 3000 for water sport activities
                like banana rides, Jet skiing, Parasailing, dolphin ride, etc.
                <br></br>
                <br></br>
                15000 + 4500 + 1400 + 750 + 3500 + 2000 + 3000 = 27000
                <br></br>
                <br></br>
                So that is Rs.27000 per head. [Excluding some expenses like
                drinks and cruise trips.]
              </p>
              <Headings h3="Some popular Goa Tour Pakcages"></Headings>
              
                    <Table content={goaPackages}></Table>
              
             

            </li>

            <li>
            <Headings h2="2- Mcleodganj – Heaven Amidst The Hills"></Headings>

              <div className={style.image}>
                <Image src={Mcleodganj} alt="Mcleodganj"></Image>
              </div>
              <p className={style.p}>
                Mcleodganj is a town in the middle of the majestic mountains of
                the Dhauladhar range, Himachal Pradesh the breathtaking view of
                the mountains is once in a lifetime experience. Triund is a
                perfect camping site under thousands of stars. Macleodganj Is
                also famous for its culture. Mcleodganj has various tourist
                points like waterfalls, sunset points, monasteries, temples.
              </p>
              <Headings h3="Places to visit in Mcleodganj"></Headings>
              <p className={style.p}>
                Mcleodganj has some unique and never seen before tourist sites
                some of them are
                <ul className={style.ul}>
                  <li>Triund Trek</li>
                  <li>Bhagsunath Temple & Waterfall</li>
                  <li>Namgyal Monastery</li>
                  <li>Kareri Lake</li>
                  <li>Dharamkot</li>
                  <li>Minkiani Pass</li>
                  <li>Naddi View Point</li>
                  <li>Dal Lake</li>
                  <li>Dhauladhar Ranges</li>
                  <li>Kangra Fort</li>
                </ul>
              </p>
              <Headings h3="How much a trip to Mcleodganj will cost you?"></Headings>
              <p className={style.p}>
                If you use public transportation to reach Mcleodganj and stay in
                an economic hotel so an average trip to mcleodganj costs you
                roughly around 1400 per head per day including all
                transportation, food, hotel, and visiting places and the rest
                depends on your luxury.
              </p>
              <Headings h3="Some popular Mcleodganj Tour Pakcages"></Headings>
              
                    <Table content={mcleodganjPackages}></Table>
            </li>

            <li>
            <Headings h2="3- Srinagar – The Gem Of Kashmir"></Headings>

            <div className={style.image}>
                <Image src={Srinagar} alt="Srinagar"></Image>
              </div>
              <p className={style.p}>
                If there is heaven on earth, this is it. Visiting Srinagar will
                make you fall in love with it. It’s a city that will leave you
                mesmerized with its beauty. You will remember the memories that
                you made there long after your visit. With its beautiful view of
                the Himalayas, snowfalls, and charismatic charm Srinagar made
                its place on this list. If you love the mountains and adventures
                then Srinagar is your one-stop place to visit.
              </p>
              <Headings h3="Places to visit in Srinagar"></Headings>
              <ul className={style.visitul}>
                <li className={style.visitli}>
                  <Headings h4="Dal Lake"></Headings>
                  <p className={style.p}>
                    Visit it on a winter day and experience the amazing scenery,
                    beautiful Himalayan snowy mountains, do a little boating or
                    stay in a boathouse, buy anything from numerous floating
                    market places.
                  </p>
                </li>
                <li className={style.visitli}>
                  <Headings h4="Indra Gandhi Tulip Garden"></Headings>
                  <p className={style.p}>
                    Experience the full blossom of tulips and a breathtaking
                    view of the garden. The best time to visit it is between 1 –
                    20 April because that’s when the blossom is in full swing.
                  </p>
                </li>
                <li className={style.visitli}>
                  <Headings h4="Sonamarg"></Headings>
                  <p className={style.p}>
                    It’s a valley with beautiful mountains and glaciers around
                    it. It’s famous for its clod weather take pony rides and
                    enjoy the weather and activities.{" "}
                  </p>
                </li>
                <li className={style.visitli}>
                  <Headings h4="Also Visit"></Headings>

                  <p className={style.p}>
                    Some other must-visit places are Shankaracharya Hill, Nishat
                    Garden, Nigeen Lake, Yousmarg, Badamwari Garden, Mughal
                    Garden, Shamilar Bagh, Doodhpathri, Pari Mahal, and many
                    more.
                  </p>
                </li>
              </ul>

              <Headings h3="How much does a visit to Srinagar cost?"></Headings>
              <p className={style.p}>
                If you travel by air then the tickets cost somewhat around 5500.
                <br></br>
                <br></br>
                Staying in a decent hotel with Wi-Fi, room service, restaurant
                costs 1700 – 2000 let’s say it 1800 per night.
                <br></br>
                <br></br>
                Cost of various activities like Shikara Ride, Houseboat, Garden
                tour cost around 3000 per head.
                <br></br>
                <br></br>
                The cost of food would be around 400 per head per day
                <br></br>
                <br></br>
                So let’s say your visit for 4 days so the total staying cost
                1800*4 is 7200, traveling cost 5500, the total cost for visiting
                tourist pints 3000 + 500 some extra expense so 3500, expense on
                food 400*4 is 1600. That is the total cost of trip
                7200+5500+3500+1600 = Rs 17800 per head.
              </p>
              <Headings h3="Some popular Srinagar Tour Pakcages"></Headings>
              
                    <Table content={srinagarPackages}></Table>
            </li>

            <li>
            <Headings h2="4- Andaman – The Beach Haven"></Headings>

            <div className={style.image}>
                <Image src={Andaman} alt="Andaman"></Image>
              </div>
              <p className={style.p}>
              Visit the land of beautiful beaches, underwater diving, the scenery under the ocean will leave you in amaze and you will want to come for more. If you say yourself an aqua lover this is the place for you. You will love the aqua life, underwater and enjoy exploring the ocean and doing numerous activities around the island.
              </p>
              <Headings h3="Places to visit in Andaman"></Headings>
              <p className={style.p}>
                <ul className={style.ul}>
                  <li>Mahatma Gandhi Marine National Park</li>
                  <li>Cellular Jail National Memorial</li>
                  <li>Rajiv Gandhi Water Sports Complex in Port Blair</li>
                  <li>Radhanagar Beach</li>
                  <li>Chidiya Tapu</li>
                  <li>Corbyn’s Cove</li>
                  <li>Merk Bay Beach</li>
                </ul>
              </p>
              <Headings h3="Activities to do:"></Headings>
              <p className={style.p}>
                <ul className={style.ul}>
                  <li>Watersports</li>
                  <li>Jet-Skiing</li>
                  <li>Scuba Diving</li>
                  <li>Snorkeling</li>
                  <li>Parasailing</li>
                  <li>Banana boat rides</li>
                </ul>
              </p>
              <Headings h3="Some popular Andaman Tour Pakcages"></Headings>
              
                    <Table content={andamamPackages}></Table>
            </li>


            <li>
            <Headings h2="5- Leh-Ladakh – The Biker’s Paradise"></Headings>

            <div className={style.image}>
                <Image src={Ladakh} alt="Ladakh"></Image>
              </div>
              <p className={style.p}>
              The majestic beauty, imposing mountains, serene lakes,  swift rivers, lots of adventure, and what not? There are thousands of reasons to visit Ladakh right now! Ladakh is home to many rare kinds of flora and fauna. Here, you will find rare Tibetan wild ass, nimble ibex, Tibetan antelope, etc. Enjoy the wildlife safaris, spot exotic flora and fauna, scenic monasteries, Feel the thrill of mountain biking and the list goes on. 
              </p>
              <Headings h3="Places to visit in Leh-Ladakh"></Headings>
              <ul className={style.visitul}>
                <li className={style.visitli}>
                  <Headings h4="Monasteries of Ladakh"></Headings>
                  <p className={style.p}>
                  Ladakh is not only popular for adventure activities but is also well known for its beautiful monasteries. Some of the must-visit monasteries in Ladakh are:
                  </p>
                  <p className={style.p}>
                <ul className={style.ul}>
                  <li>Hemis Monastery</li>
                  <li>Thiksey Monastery</li>
                  <li>Spituk Monastery</li>
                  <li>Namgyal Tsemo Monastery</li>
                  <li>Hundur Monastery</li>
                  <li>Likir Monastery</li>
                  <li>Phyang Monastery</li>
                </ul>
              </p>
                </li>
                <li className={style.visitli}>
                  <Headings h4="Mountain Biking"></Headings>
                  <p className={style.p}>
                  Feel the thrill of mountain biking in Ladakh the best spots for mountain biking are 
                  </p>
                  <p className={style.p}>
                <ul className={style.ul}>
                  <li>From Leh towards Hemis</li>
                  <li>From Leh towards Alchi</li>
                  <li>Roads leading to Khardung La, and back</li>
                </ul>
              </p>
                </li>
                <li className={style.visitli}>
                  <Headings h4="Pangong Tso Lake"></Headings>
                  <p className={style.p}>
                  If you dint visit Pangong lake you hadn’t visited Ladakh yet. at a height of almost 4,350m, is the world’s highest saltwater lake. Stretching about 160 Kms Pangong Lake, one of the most famous lakes in Leh Ladakh, derives its name from the Tibetan word, “Pangong Tso”, which means “high grassland lake”.                   </p>
                  
                </li>
                <li className={style.visitli}>
                  <Headings h4="Also Try"></Headings>
                  <p className={style.p}>
                  Savor the local cuisines like Momos, Thukpa, Langar at Gurudwara Pathar Sahib, Butter Tea, Khambir, Thenktuk, Mokthuk, Chutagi, Skyu
                  </p>

                  <p className={style.p}>
                  Enjoy the cultural extravaganza at Ladakh
                  </p>
                </li>

                <li className={style.visitli}>
                  <Headings h4="Popular Festivals of Ladakh"></Headings>
                  <p className={style.p}>
                <ul className={style.ul}>
                  <li>Sindhu Darshan</li>
                  <li>Losar</li>
                  <li>Yuru Kabgyat</li>
                  <li>Hemis Tsechu</li>
                  <li>Thiksey Gustor</li>
                  <li>Phyang Tsedup</li>
                  <li>Dosmoche</li>
                  <li>Stok Guru Tsechu</li>
                  <li>Matho Nagrang</li>
                </ul>
              </p>
                </li>
                
              </ul>
              <Headings h3="How much a trip to Leh-Ladakh will cost you?"></Headings>
             
              
                    <Table content={ladakhPackages}></Table>
            </li>

            <li>
              <Headings h2="Conclusion">
              </Headings>
              <p className={style.p}>
              In end after taking several tours to all these above places. Getting mesmerized by the beauty of these places again and again whether let it be the long blue beaches of Andaman or be it be snowy white mountains of Srinagar your heart will always ask to visit them again. No matter how hard you try you cannot resist the temptation f visiting these places again and again. So a travel specialist company and making people fell in love with these place. We can assure you that your trip to one of these places will be 100% worth your time and money. You should definitely make a plan some time to visit these places once and experience their breathtaking beauty.              </p>

            </li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className={style.right}>
          <div className={style.heroWrapper}>
          {pckages && <SliderSingle packages = {pckages}></SliderSingle>}  
          </div>
        </div>  
      </div>
    </>
  );
};

export default Blog;
