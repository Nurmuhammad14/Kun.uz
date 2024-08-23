import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar';
import "../static/Uzbekistan.css"
import { MdNextPlan } from "react-icons/md";
import Footer from '../Components/Footer/Footer';

function Jamiyat() {
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
          <h1 className='uzbnew'>Jamiyat yangiliklari</h1>
      <div className="main-content">
        <div className="left-content">
          <div className="leftContent">
            <div className="city-data">Жамият | 15:45</div>
            <h1 className="news-title">
            Qimmat nasiya savdo. Do‘konlar qarz narxi qanchaligini ochiqlashi kerak            </h1>
            <p className="news-text">
            Oxirgi yillarda O‘zbekistonda nasiya savdo yoki bo‘lib to‘lash takliflari anchagina ko‘paydi. Bir qarashda kam daromadli insonlar uchun jozibali yechimdek ko‘rinadigan nasiya savdodagi tovarlarning boshlang‘ich va yakuniy narxlari chuqurroq o‘rganilsa, bu moliyaviy savodxonligi yuqori... </p>            <div className="left-news">
              <div className="right-news-box">
                <div className="uzb-cards tp">
                <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/ZkLdUhWbJJTlH9GalLM-yqHXnnKAfE1z_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      14:40
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Tramp Isroilning tezroq g‘alaba qozonishi va hududi kengayishini istamoqda                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/dcM7cme1POqqQgkZ_No9OhSjMF1gI3xN_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      13:25
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Hongkongda keksa gigant panda ilk bor ona bo‘ldi, u egizaklarni dunyoga keltirdi                       </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/igeMwspWfgA49mBsTR2ke--CXu0PoUMR_medium.jpg"alt="" className='size'/>
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
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/I9g-v8X4VWItwZEOTekwPR3AUyaCs8Yk_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      12:01
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Tailand sobiq bosh vazirining qizi hukumat rahbari etib saylandi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/ppEMSuG3IttsVE2ykTalTcTh7ZDo-6-u_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      13:25
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Tailand sobiq bosh vazirining qizi hukumat rahbari etib saylandi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/VWq1IcH3SYUL_Jzq9vBw8CjXRk-SAyn5_medium.jpg"alt="" className='size'/>
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
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/y_f_ev-khYrdC6tJf3Mc4B7j4oYubpDd_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    10:30
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Mpox virusi tez tarqalyapti. U haqda nimalarni bilish kerak?                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/qCMrF-N1m4rxyS-AuZgxhzYP3H7TUF5w_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    10:10
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Eron G‘azoda genotsidning oldini olish uchun qo‘shma sa’y-harakatlar muhimligini bildirdi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/nQtvuIlgIsPYQ6o-530irq59Siwt7WMu_medium.jpg"alt="" className='size'/>
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
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/8nqeaztxhyk4RbbjuysDJ4Yb42mlaDg9_medium.jpeg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    01:05
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      BMT G‘azoda 40 mingdan ortiq falastinlikning o‘limini «tasavvur qilib bo‘lmaydigan holat» deb atadi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/PVjXK7tVKrk93spTXgQhcAYrG_odztiA_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    22:00 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Nigeriyada yil boshidan buyon mpox virusi bilan kasallanishning 39 ta holati aniqlandi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/wnuDNvP7c-L-ZwNuCcudQIAXZA65wPkz_medium.jpg"alt="" className='size'/>
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
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/XSIpsyl_h5f3QojlqKrLHGFDErwsSzDa_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    21:02 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Ukraina Rossiyadagi 4 ta aerodrom nishonga olinganini ma’lum qildi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/RZ7rlsUf5nrMXMPCx5AuW92P0XUqpSIP_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    19:47 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      London meri o‘ng guruhlar zo‘ravonligi fonida ogohlikka chaqirdi                       </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/L7rf5GGvaSLx9l4WLkuI-z3lfbCDjIew_medium.jpg"alt="" className='size'/>
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
            <img src="https://storage.kun.uz/source/thumbnails/_medium/10/I9g-v8X4VWItwZEOTekwPR3AUyaCs8Yk_medium.jpg" alt="" className='rightNewsImg'/>
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

export default Jamiyat;
