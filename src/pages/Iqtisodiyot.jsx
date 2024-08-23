import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar';
import "../static/Uzbekistan.css"
import { MdNextPlan } from "react-icons/md";
import Footer from '../Components/Footer/Footer';

function Iqtisodiyot() {
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
          <h1 className='uzbnew'>Iqtisodiyot yangiliklari</h1>
      <div className="main-content">
        <div className="left-content">
          <div className="leftContent">
            <div className="city-data">Иқтисодиёт | 18:32 / 06.08.2024</div>
            <h1 className="news-title">
            Qalbaki markirovkali tovarlar savdosi uchun jinoiy javobgarlik joriy etilishi mumkin            </h1>
            <p className="news-text">
            O‘zbekistonda qalbaki raqamli markirovkalangan yoki kontrafakt mahsulotlarni import qiluvchi, ishlab chiqaruvchi, ulgurji va chakana sotuvchilarga nisbatan jinoiy javobgarlik joriy etish, bunday holatlarda mahsulotlarni musodara qilish rejalashtirilmoqda. Raqamli markirovkalanadigan...                     </p>
            <div className="left-news">
              <div className="right-news-box">
                <div className="uzb-cards tp">
                <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/apaNQcLdpR09bmFQ0i4Y9t3JT5XOht-W_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      19:09
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Taksi haydovchisi sifatida ro‘yxatdan o‘tganlar soni yarim milliondan oshdi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/5iWzQCK0gqT9nlct1sMCpELyr_6kAnHB_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                      18:43
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Toshkentda AQSh elchixonasi eski xizmat avtomobillari auksioni qoldirildi                       </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/BAIq0WVHoV9h8h43EyDGxFhaOluIq9VN_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    14:49 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Bojxona qo‘mitasi eng ko‘p import qilinadigan mahsulotlarni onlayn ko‘rish imkoniyatini ishlab chiqdi                       </h2>
                    </div>
                 </div>
                </div>
                <div className="uzb-cards">
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/4RU94el57_VJq-JmcvFGgNLLdatThHwV_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    08:30 / 15.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Tarvuz narxlari nega quladi?                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/chP9eajDcOKPDERkFf_eVYAIwZ8GjtKA_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    22:52 / 12.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Koreyaning yirik banki sentabrdan Qirg‘iziston bilan dollarda SWIFT-o‘tkazmalarni to‘xtatadi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/IseOVncBZzqBjqjBbdhZnbBx_EvbcLHm_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    11:25 / 11.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Asosiy qimmatbaho metallar arzonlashdi, neft qimmatlashdi – Xalqaro moliya bozori sharhi                       </h2>
                    </div>
                 </div>
                </div>
                <div className="uzb-cards">
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/kHmCorJlBxzsdi546JI8aOIWxAz4reAo_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    13:39 / 10.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Iyulda inflyatsion kutilmalar tarixiy minimumgacha pasaydi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/3Vgl2eZzI4zhYs2FBub3W2u50iYtslkJ_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    14:31 / 08.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      O‘zbekistonning rasmiy zaxiralari rekord miqdor – 37,4 mlrd dollarga yetdi                       </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/YMYcme-4to8M1g-QPEhEoX_X005py9Ab_medium.jpeg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    19:02 / 07.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      «Markaziy Osiyo» xalqaro sanoat kooperatsiyasi markazi» tashkil etiladi                      </h2>
                    </div>
                 </div>
                </div>
                <div className="uzb-cards">
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/Y3fg576WT8v7HUVP056ZVju-znnpL05c_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    18:32 / 06.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                     Qalbaki markirovkali tovarlar savdosi uchun jinoiy javobgarlik joriy etilishi mumkin                             </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/IaPQNl2gBd6L7A644b5dVTQM9Jtf-90n_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    19:43 / 05.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      “Qora dushanba”. Global bozorlar nega qulayapti?                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/xGNGdsjy34QYR-Uo-VkGzSkjBMqzrlsA_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    19:33 / 05.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Iyun oyida Rossiyadan O‘zbekistonga tovarlar importi 5 foizga kamaydi                       </h2>
                    </div>
                 </div>
                </div>
                <div className="uzb-cards">
                 <div className="card wh bn">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/jWJkliNmkbkqP74DrgiS9Pg-40l1sDuK_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    18:50 / 05.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Osiyodagi fond indekslari qulamoqda - Yaponiyaning Nikkei indeksi 13 foizga tushib ketdi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/_g-Kl7MjndfdrmgaSVvb1W2KcLEcmZyc_medium.jpg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    18:47 / 05.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Xitoydan O‘zbekistonga yuklar poyezd orqali rekord darajada tez yetkazildi                      </h2>
                    </div>
                 </div>
                 <div className="card wh bn bs">
                    <div className="card-video">
                      <img src="https://storage.kun.uz/source/thumbnails/_medium/10/450aNBDbdf_uCUJmYpraIM0MHd1eQ0B5_medium.jpeg"alt="" className='size'/>
                     </div>
                    <h2 className="city-data al">
                    11:36 / 04.08.2024
                    </h2>
                    <div className="card-content pd">
                      <h2 className="card-in style">
                      Bitcoin va dollar arzonlashdi, oltin qimmatlashdi – xalqaro moliya bozori sharhi                       </h2>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left-rightContent">
            <img src="https://storage.kun.uz/source/thumbnails/_medium/10/Y3fg576WT8v7HUVP056ZVju-znnpL05c_medium.jpg" alt="" className='rightNewsImg'/>
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

export default Iqtisodiyot;
