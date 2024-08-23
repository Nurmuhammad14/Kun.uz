import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar';
import "../static/Uzbekistan.css"
import { MdNextPlan } from "react-icons/md";
import Footer from '../Components/Footer/Footer';
import { FaEye, FaStopwatch } from 'react-icons/fa';
import "../static/KunUzNews.css"
import { IoArrowBack } from 'react-icons/io5';
import AdImage from '../static/y300.webp';
import Addimg from '../static/skidka.floorpan.png'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ElonCarousel from '../Components/ElonCarousel';
import { ImNext } from 'react-icons/im';
import { IoPlaySkipBackCircleOutline } from 'react-icons/io5';

function KunUzNews() {
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

  window.addEventListener('scroll', function() {
    const iconDiv = document.querySelector('.icon-div');
    if (window.scrollY > 100) {
        iconDiv.style.top = '100px';
    } else {
        iconDiv.style.top = 'initial';
    }
});

  return (
    <>
    <div className='container sss'>
      <Banner />
      <div className={isSticky ? "sticky-navbar" : ""}>
        <Navbar />
      </div>
      <div className="KunUzNews-flex">
      <div className="icon-div">
        <Link to="/">
        <div className="back">
        <IoArrowBack/>
        </div>
        </Link>
      <br />
      <a href="https://telegram.me/share/url?url=https%3A%2F%2Fkun.uz%2Fuz%2F19290828%20Mandat%20chiqdi%20%E2%80%93%20talabalikka%20tavsiya%20etilgan%20va%20etilmaganlar%20nimalarni%20bilishi%20kerak%3F" target='blank'>
      <div className="teleg">
      <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4457 17.3222L12.087 22.5112C12.6002 22.5112 12.8224 22.2845 13.089 22.0122L15.4949 19.6472L20.4803 23.4024C21.3946 23.9265 22.0388 23.6505 22.2854 22.5372L25.5578 6.7658L25.5587 6.76487C25.8487 5.3747 25.0699 4.83108 24.1791 5.17212L4.94413 12.7465C3.63138 13.2706 3.65126 14.0233 4.72097 14.3644L9.63859 15.9376L21.0612 8.58623C21.5988 8.2201 22.0876 8.42268 21.6855 8.78881L12.4457 17.3222Z" fill="#6F7D89"></path>
      </svg>
      </div>
      </a>
      <br />
      <a href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fkun.uz%2Fuz%2F19290828&app_id=966242223397117&source_surface=external_reshare&display&hashtag" target='blank'>
      <div className="facebook">
      <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0758 3.52441C8.08825 3.52441 3.23438 8.40796 3.23438 14.4321C3.23438 19.8765 7.19893 24.389 12.3819 25.2073V17.5851H9.62912V14.4321H12.3819V12.029C12.3819 9.29528 14.0004 7.78523 16.4768 7.78523C17.6629 7.78523 18.9036 7.99827 18.9036 7.99827V10.6826H17.5365C16.1898 10.6826 15.7698 11.5234 15.7698 12.386V14.4321H18.7766L18.296 17.5851H15.7698V25.2073C20.9527 24.389 24.9173 19.8765 24.9173 14.4321C24.9173 8.40796 20.0633 3.52441 14.0758 3.52441Z" fill="#6F7D89"></path>
      </svg>
      </div>
      </a>
      </div>
           <div className="main-conten">
             <h1 className='city-data'>O‘zbekiston | 12:33 / 17.08.2024    <FaEye style={{width:"20px", marginLeft:"10px"}}/>4474 <FaStopwatch style={{marginLeft:"10px"}}/>1 daqiqa o‘qiladi</h1>
             <div className="leftNew-div">
                <div className="news-title">
                Mandat chiqdi – talabalikka tavsiya etilgan va etilmaganlar nimalarni bilishi kerak?                </div>
             </div>
             <p className="info-p">
             Kim qayerga o‘qishga kirgani aniq bo‘lgach, talabalar yotoqxonaga joylashish, kontrakt narxlari ma’lumotlarini izlashni boshlaydi. Talabalikka tavsiya etilmaganlarda esa super-kontraktda o‘qish shartlari va narxlari qanday degan savollar paydo bo‘ladi. Kun.uz shu kabi muhim ma’lumotlarni bir joyga to‘pladi.
             </p>
             <img src="https://storage.kun.uz/source/10/ZQctk0fnx-jq2yQMqDzYkBKZvN98LeeJ.jpg" alt="" className='info-img' />
             <span className="sm-img">
                Foto:kun.uz
             </span>
             <h2 className="global-title">
             Kontrakt narxlari aniqmi?
             </h2>
             <p className="start-info">
             Ha, aniq. Iyul oyida 2024/2025 o‘quv yili uchun to‘lov-kontrakt miqdorlari tasdiqlangan. Unga ko‘ra, kontrakt miqdorlari o‘rtacha 15 foiz oshirilgan. Bakalavriatda pedagogika yo‘nalishida o‘qish shartnomasi qiymati 7,4 mln, tibbiyotda 10,5 mln, huquq va xalqaro iqtisodiy munosabatlarda 11 mln 250 ming so‘m deb belgilandi.
             </p>
             <img src="https://storage.kun.uz/source/10/6yDHfyHZANFIKcdEz7u0rrQp0ocBPbNs.jpg" alt="" className='uni-info'/>
             <img src="https://storage.kun.uz/source/10/2lKADxJFqNl5-t4SWtu0uEKV2DBxT4f2.jpg" alt="" className='univ-info'/>
             <div className="start-info">
             Shuni ham inobatga olish kerakki, moliyaviy mustaqillik berilgan davlat OTMlari to‘lov-kontrakt miqdorlarini mustaqil belgilash huquqiga ega. Misol uchun, oldinroq Jahon iqtisodiyoti va diplomatiya universitetida kontrakt miqdori oshirilgani haqida ma’lum qilingan edi. Unda 2024/2025 o‘quv yilida 1-bosqich talabalari uchun kontrakt stipendiyasiz – 29 mln 428 ming so‘m, stipendiyali – 35 mln 642 ming so‘m etib belgilangandi.
             </div>
             <h2 className="global-title">
             Super-kontraktchilar nima qiladi?
             </h2>
             <div className="start-info">
             Yo‘nalishlar kesimida o‘tish ballari e’lon qilindi. Bu super-kontraktchilar uchun muhim. Ya’ni super-kontrakt asosida o‘qish niyati bo‘lganlar ballari super-kontraktning 4 balli arzon turiga mos kelish yoki kelmasligini bilib olishlari mumkin. <br /><br />

             Agar abituriyentning balli qabul kvotasidagi ballga juda kam yetmay qolgan bo‘lsa, kamroq, aksincha, ko‘p yetmagan bo‘lsa, ko‘proq pul to‘laydi. <br /><br />

             Amaldagi qonunga ko‘ra, to‘plagan ballari tasdiqlangan to‘lov-kontrakt bo‘yicha qabul kvotalari chegarasiga:
             </div><br />
             <h2 className="global-titler">
             1 ballgacha yetmagan abituriyentlar uchun — 1,5 barobar; <br /><br />

             1,1 balldan 2 ballgacha yetmaganlar uchun — 2,0 barobar;<br /><br />

             2,1 balldan 3 ballgacha yetmaganlar uchun — 2,5 barobar;<br /><br />

             3,1 balldan 4 ballgacha yetmaganlar uchun — 3,0 barobar miqdorida to‘lov qilib o‘qishi mumkin.<br /><br />
             </h2>
             <div className="start-info">
             Minimal balldan (bu yil 56,7 ball) kam to‘plamagan, lekin qabul kvotasiga 4,05 balldan ortiq yetmagan abituriyentlar uchun yo‘nalishlariga qarab super-kontrakt miqdori bazaviy kontraktning bir necha barobari ko‘rinishida belgilanadi. Ya’ni agar abituriyent 56,7 balldan ko‘p to‘plagan, biroq o‘tish balliga 4,05 balldan ko‘proq yetmay qolgan bo‘lsa, unda shunaqa miqdordagi pulni to‘lab talaba bo‘lish imkoniga ega bo‘lgan.  Agar abituriyent minimal ballni ham to‘play olmagan bo‘lsa, unda unga o‘z yo‘nalishi bo‘yicha belgilangan eng yuqori kontrakt miqdorining 2 baravarini to‘lab talaba bo‘lish huquqi beriladi.
             </div>
             <div className="global-title">Bir abituriyent o‘rniga boshqasi kirsa bo‘ladimi?</div>
             <div className="start-info">
             Kvota doirasida talabalikka qabul qilingan, biroq o‘qishni xohlamagan abituriyentlarning o‘rni bo‘sh qoladi. Bilimlarni baholash agentligi matbuot xizmatidan aniqlashtirilgan ma’lumotga ko‘ra, o‘qimaydigan, lekin talabalikka qabul qilingan abituriyentdan keyingi test topshirganlar yuqoriga ko‘tarilmaydi. Agar qabul chizig‘idan pastdagi abituriyentlar talaba bo‘lishni xohlasa, unda super-kontrakt variantini tanlashiga to‘g‘ri keladi.
             </div>
             <div className="global-title">Birinchi yo‘nalishga “super” qilish imkoni beriladimi?</div>
             <div className="start-info">
             2022 yilda Davlat qabul komissiyasi qaroriga ko‘ra, abituriyent o‘zi tanlagan birinchi yo‘nalishga kira olmagan, lekin 2-, 3-, 4- yoki 5-yo‘nalishlardan biriga o‘qishga kirgan bo‘lsa, o‘z xohishi bilan birinchi tanlagan yo‘nalishida super-kontraktda o‘qishiga ruxsat berilgandi. <br /><br />

             Bu istisno 2-, 3- yoki 4-yo‘nalishga taalluqli emas. Ya’ni beshinchi yo‘nalishga o‘qishga kirgan abituriyent ikkinchi yoki to‘rtinchi yo‘nalishni tanlab, super-kontrakt qila olmaydi, faqat birinchi yo‘nalishga qilishi mumkin bo‘ladi.             
             </div>
             <div className="global-title">1-kurslar uchun yotoqxona qachon beriladi?</div>
             <div className="start-info">
             Talabalarning yotoqxonaga onlayn ariza berishi 1 avgustdan boshlangan edi. Dastlab imtiyoz va ustuvorliklarga ega talabgorlar talabalar turar joylariga qabul qilinadi. Shundan so‘ng umumiy ro‘yxatdagi talabalar uchun yotoqxonada ortib qolgan o‘rinlar soniga nisbatan navbat asosida quyidagicha taqsimlanadi:
             </div>
             <div className="global-title">.   1-kurs talabalari uchun 55 – 65 foiz;</div>
             <div className="global-title">.     2-kurs talabalari uchun 15 – 20 foiz;</div>
             <div className="global-title">.    3-kurs va undan yuqori kurs talabalari uchun 20–25 foizgacha ajratiladi</div>
             <div className="start-info">
             Talabalar davlat oliy ta’lim muassasalarining talabalar turar joyiga joylashish uchun Davlat xizmatlari markazi yoki Yagona interaktiv davlat xizmatlari portali — my.gov.uz orqali elektron ariza yuborishlari mumkin. Agar talabaning arizasi qanoatlantirilmay, yotoqxonaga joylasha olmasa ham, unga ijara pullari qoplab beriladi. 1-kurslar uchun shartnoma bo‘lmasa ham, sentabr-oktyabr oylarining ijara pullari to‘lab beriladi.<br/><br />

             Bundan tashqari, har bir OTMda talabalarga ijara topish va yotoqxonaga joylashishga yordam beradigan maxsus markazlar ish boshlagan.
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
      <div className="article-page">
      <div className="content">
        <p>
          Talabalikka qabul qilinganlar eng avval o‘zlari topshirgan OTM rasmiy sahifalarini topib kuzatib borishlari – eng to‘g‘ri variant. 
          Har bir OTMga oid eng so‘nggi yangiliklar ularning rasmiy sahifalarida berib boriladi. Bundan tashqari, super-kontrakt asosida 
          talaba bo‘lishni rejalashtirayotgan abituriyentlar uchun ham OTMga oid yangiliklarni kuzatib borish foydali.
        </p>
      </div>

      <div className="tags">
        <button>#mandat</button>
        <button>#OTM</button>
        <button>#talaba</button>
      </div>

      <div className="advertisement-card">
      <div className="ad-image">
        <img src={AdImage} alt="Floorpan" />
      </div>
      <div className="ad-content">
        <div className="left-rek">
        <img src={Addimg} alt="" className='rekimg'/>
        <a href="https://skidka.floorpan.uz" className="ad-link ">skidka.floorpan.uz</a>
        </div>
        <h2 className="ad-title">Напольное покрытие Floorpan</h2>
        <p className="ad-description">
          быстрая и легкая сборка • лучшее качество • устойчивость к УФ • Экологичность • большой ассортимент • гарантия качества
        </p>
        <button className="ad-button">Подать заявку</button>
      </div>
    </div>
    </div>
      </div>  
      <div className="bgw">
      <h1 className='tl'>Mavzuga oid</h1>
      <div className="parij-news lll">
<div className="parij-new">
       <div className="small-card s">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/tWb8181OP7oNHzvDFdLHbgHiNQ7vTh7T_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data">18:00</span>
                <h2 className='sm-title'>
                Bulung‘ur tumani hokimi bokschi Sitora Turdibekovaga uy sovg‘a qildi
                </h2>
                </div>
              </div>  
              <div className="small-card s">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/fVQh1Kr6U-2SL1wHuiy_pbU-qjHctJzB_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data">21:55 / 13.08.2024</span>
                <h2 className='sm-title'>
                Parij Olimpiadasi sovrindorlariga eng ko‘p pul to‘laydigan davlatlar ma’lum qilindi
                </h2>
                </div>
              </div>  
       </div>
       <div className="parij-new">
       <div className="small-card s">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/6MnVTJlUDjaaND53T_0yd8kJMxqFfUN-_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data">16:30</span>
                <h2 className='sm-title'>
                Tokiodan Parijgacha 3 yillik yo‘l: O‘zbekiston boksda qanday qilib 1-raqamli mamlakatga aylandi?                </h2>
                </div>
              </div>  
              <div className="small-card s">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/mhoj0YEnnTV1DIgQ__PkNUjDnZYfrcGu_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data">18:44 / 13.08.2024</span>
                <h2 className='sm-title'>
                Parij-2024 olimpiadasi medallari narxi aslida qancha?                </h2>
                </div>
              </div>  
       </div>
</div>  
          <div className="elons">
    <div className="hayotiy-hikoyalar mle">
         <div className="hikoya-nav">
          <img src="https://kun.uz/assets/28f95538/img/icons/business-icon.svg" alt="" className='circle'/>
         </div>
         <div className="hikoya-title wit">
          <div className="tit-flex">
          <h1 className="elon-title-text">E'lonlar</h1><div className="button-swappers"><IoPlaySkipBackCircleOutline style={{width:'40px',height:'60',color:'gray'}}/><ImNext  style={{width:'40px',height:'33',marginBottom:'12px',color:'gray'}}/></div>
          </div>
          <p>Reklama bilan bog‘liq istalgan savollar bo‘yicha +998 78 113 10 10 telefoni orqali bog‘lanishingiz mumkin.</p>
         </div>
       </div>   
       <ElonCarousel/>
    </div> 
    <div className="uzfute el">
    <Footer/>
    </div>
      </div>
    </>
  );
}

export default KunUzNews;
