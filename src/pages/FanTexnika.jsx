import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar';
import "../static/Uzbekistan.css"
import { MdNextPlan } from "react-icons/md";
import Footer from '../Components/Footer/Footer';

function FanTexnika() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div className='container'>
      <Banner />
      <div className={isSticky ? "sticky-navbar" : ""}>
        <Navbar />
      </div>
          <h1 className='uzbnew'>Fan-texnika yangiliklari</h1>
      <div className="main-content">
        <div className="left-content">
          <div className="leftContent">
            <div className="city-data">Жаҳон | 18:25</div>
            <h1 className="news-title">
            Ukraina Kursk oblastida «yuzlab harbiylar» asir olinganini e’lon qildi - fotosuratlar             
            </h1>
            <p className="news-text">
            Ukraina qurolli kuchlari Kursk oblastidagi yurishni davom ettirmoqda.            </p>
            <div className="left-news">
              <div className="right-news-box">
                <div className="uzb-cards tp">
                <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/koJYKxr2h8X1yfQKy3Swc_3v30_HMXrF_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      14:40
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Tramp Isroilning tezroq g‘alaba qozonishi va hududi kengayishini istamoqda                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/004enrY5Ll0RWtpFjoGCmJBs_3DSCsDr_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      13:25
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Hongkongda keksa gigant panda ilk bor ona bo‘ldi, u egizaklarni dunyoga keltirdi                       </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/lp16WJpr1EGlSwTiI92UWzD9dnGEph1J_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      12:10
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Rossiya vizasini olmoqchi bo‘lgan chet el fuqarolari endi suhbatdan o‘tadi                      </h2>
                    </div>
                 </div>
                </div>
                <div className="uzb-cards">
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/hC8R2I2aRPTu8kRMCdI5tt38n26kxnek_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      12:01
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Tailand sobiq bosh vazirining qizi hukumat rahbari etib saylandi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/of17djP0ajdQ0wTMH1hgU7squfTjJnps_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      13:25
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Tailand sobiq bosh vazirining qizi hukumat rahbari etib saylandi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/yYm8cUvBst-Tf7vBMJKYIJ5nuow3SEBN_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      10:50
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Pnevmokokka qarshi mo‘g‘ulcha kurash - Mo‘g‘uliston bu kasallik bilan qanday kurashyapti?                      </h2>
                    </div>
                 </div>
                </div>
                <div className="uzb-cards">
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/GblH078VJ2hFUcGsYy4xZkr9e4mCU1eH_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    10:30
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Mpox virusi tez tarqalyapti. U haqda nimalarni bilish kerak?                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/hqzAphO7oLjrNaIeOTRjddCrDYXETkuN_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    10:10
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Eron G‘azoda genotsidning oldini olish uchun qo‘shma sa’y-harakatlar muhimligini bildirdi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/Va9ENFUdAEqz_b-he1dELUbffWDWVrSX_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    09:30
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Qozog‘iston Rossiya tufayli «sanksiyalarga ko‘r-ko‘rona amal qilmaydi» - Jumangarin                      </h2>
                    </div>
                 </div>
                </div>
                <div className="uzb-cards">
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/3psBGfXqvrlda22S8KJmJtBH1BHufwOk_medium.jpeg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    01:05
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      BMT G‘azoda 40 mingdan ortiq falastinlikning o‘limini «tasavvur qilib bo‘lmaydigan holat» deb atadi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/ykexAyRJBARAs4dlq49Diy31MwWLczoM_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    22:00 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Nigeriyada yil boshidan buyon mpox virusi bilan kasallanishning 39 ta holati aniqlandi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/JCbPr8XR5KHJ4NeTbmZpMKNr1gWMVcFt_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    21:14 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Oq uy: G‘azoda o‘t ochishni to‘xtatish bo‘yicha muzokaralar Dohada davom etmoqda                     </h2>
                    </div>
                 </div>
                </div>
                <div className="uzb-cards">
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/CsmNkmtieiwGs7VEup5UeEkTiSSXA7dV_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    21:02 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Ukraina Rossiyadagi 4 ta aerodrom nishonga olinganini ma’lum qildi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/Fx2ys1B_R-6qy0uZKnRXfq01NOGp1JG0_medium.jpeg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    19:47 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      London meri o‘ng guruhlar zo‘ravonligi fonida ogohlikka chaqirdi                       </h2>
                    </div>
                 </div>
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/w5BzdfTLPyCStLET-fIBH7KrC2674jRm_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                     19:21 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Falastin raisining Turkiyadagi nutqi, Britaniyada aksilisroil bosimlar va Rossiyada qulagan harbiy samolyot - kun dayjesti                      </h2>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-rightContent">
            <img src="https://storage.kun.uz/source/thumbnails/_medium/10/Fi6sDbxitGHirbHA6JSCzcR_dqxREVrs_medium.jpg" alt="" className='rightNewsImg'/>
          </div>
        </div>
        <div className="right-content">
           <h3 className='right-news-title'>So‘nggi yangiliklar</h3>
           <p className="right-news-p">
             Germaniyada qurol qonunchiligini <br /> kuchaytirish taklif qilinmoqda
           <h5 className='city-data'>Jahon |    22:34</h5>
           </p>
           <p className="right-news-p">
             Ukraina harbiylari Rossiyaning 74 ta aholi punktini nazorat qilmoqda – Zelenskiy <br />

            <h5 className='city-data'>Jahon |    22:25</h5>
           </p>
           <p className="right-news-p">
           Boris Nemsovning o‘ldirilishida ayblangan Temirlan Eskerxonov koloniyadan chiqib, urushga jo‘nab ketdi
            <h5 className='city-data'>Jahon |    22:11</h5>
           </p>
           <p className="right-news-p">
           Parij Olimpiadasi sovrindorlariga eng ko‘p <br /> pul to‘laydigan davlatlar ma’lum qilindi
            <h5 className='city-data'>Sport |    22:55</h5>
           </p>
           <p className="right-news-p">
           13 avgustning asosiy yangiliklari: O‘zbekistonda ro‘y bergan muhim voqea va hodisalar            <h5 className='city-data'>O'zbekiston |    21:51</h5>
           </p>
           <p className="right-news-p">
           Ukraina qo‘shinlari bir haftada Rossiya armiyasi 3 oyda egallaganidan ikki barobar ko‘proq hududni qo‘lga kiritdi
            <h5 className='city-data'>Jahon |    21:28</h5>
           </p>
           <p className="right-news-p">
           Sun’iy intellekt texnologiyalari markazi tashkil etiladi
            <h5 className='city-data'>O'zbekiston |    21:25</h5>
           </p>
           <p className="right-news-p">
           Bloomberg: Rossiya 2024 yil oxiriga qadar yangi safarbarlik e’lon qilishi mumkin
            <h5 className='city-data'>Jamiyat |    21:00</h5>
           </p>
           <p className="right-news-p">
           Ukraina Kursk viloyatini bosib olmoqchi emas – Ukraina TIV
            <h5 className='city-data'>Jahon |    20:48</h5>
           </p>
           <p className="right-news-p">
           G‘azodagi urush va garovdagilar taqdiri. Netanyahu va mudofaa vaziri o‘rtasida bahs yuzaga keldi
            <h5 className='city-data'>Jahon |    20:45</h5>
           </p>
           <p className="right-news-p">
           Iroqda qizlar uchun nikoh yoshini 9 ga tushirish taklif etildi
            <h5 className='city-data'>Jahon |    20:26</h5>
           </p>
           <p className="right-news-p">
             Germaniyada qurol qonunchiligini <br /> kuchaytirish taklif qilinmoqda
           <h5 className='city-data'>Jahon |    22:34</h5>
           </p>
           <p className="right-news-p">
             Ukraina harbiylari Rossiyaning 74 ta aholi punktini nazorat qilmoqda – Zelenskiy <br />

            <h5 className='city-data'>Jahon |    22:25</h5>
           </p>
           <p className="right-news-p">
           Boris Nemsovning o‘ldirilishida ayblangan Temirlan Eskerxonov koloniyadan chiqib, urushga jo‘nab ketdi
            <h5 className='city-data'>Jahon |    22:11</h5>
           </p>
           <p className="right-news-p">
           <div className="lightblur">Parij Olimpiadasi sovrindorlariga eng ko‘p </div> <span className='blur'>pul to‘laydigan davlatlar ma’lum qilindi</span>
            <h5 className='city-data bl'>Sport | 22:55</h5>
           </p>
           <div className="allnews">
           <MdNextPlan style={{color:"darkblue",width:"40px",height:"40px"}}/><span className='all-new'>Barcha yangiliklar</span>
           </div>     
        </div>       
      </div>
    </div>
    <div className="uzfut">
    <Footer/>
    </div>
    </>
  );
}

export default FanTexnika;
