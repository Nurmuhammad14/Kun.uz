import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import NewsList from '../Components/NewsList/NewsList';
import  { useState, useEffect } from 'react';
import "../static/Home.css"
import { FaPlayCircle } from "react-icons/fa";
import { ImNext } from "react-icons/im";
import { IoPlaySkipBackCircleOutline } from "react-icons/io5";
import Footer from '../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ElonCarousel from '../Components/ElonCarousel';
import { Modal } from '@coreui/coreui';
import Videos from '../Components/Videos';
import Videos2 from '../Components/Videos2';



function Home() {
  
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
    <div className="container">
      <Banner/>
      <div className={isSticky ? "sticky-navbar" : ""}>
          <Navbar />
      </div>
      <NewsList/>
    <div className="main-content">
        <div className="left-content">
           <div className="leftContent">
             <h1 className="news-title">
               Ish haqi, pensiya va nafaqalar miqdori oshiriladi - prezident farmoni
             </h1>
             <p className="news-text">
             1 sentabrdan boshlab pensiyalar va nafaqalar 15 foizga oshiriladi. 1 oktyabrdan e’tiboran esa budjet tashkilotlari xodimlarining maoshi 10 foizga, o‘qituvchilar va tibbiyot xodimlarining maoshi esa 15 foizga ko‘tariladi.
             </p>
        <div className="left-news">
          <div className="small-cards">
              <div className="small-card">
                <div className="left-sm">
                <span className="city-data">Jahon</span>
                <h2 className='sm-title'>
              <Link to={'/Kun.uz.news'} style={{color:"black",textDecoration:'none'}} className='link'><p>Putin ukrainlarning Kursk oblastidagi <br /> yurishi yuzasidan yig‘ilish o‘tkazdi</p></Link>
                </h2>
                </div>
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/MCxMfaucpOO4AdPZTjOpbcEtqSVEaThD_medium.jpg" alt="" className='sm-img'/>
                </div>
               </div>      
             <div className="small-card">
                <div className="left-sm">
                <span className="city-data">O'zbekiston</span>
                <h2 className='sm-title'>
                  «Barcha rahbarlarga chora qattiq bo‘ladi» - prezident
                </h2>
                </div>
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/6vo5lsaev45iHrdIo3piJNz6I1jCjn6Z_medium.jpg" alt="" className='sm-img'/>
                </div>
             </div>  
             <div className="small-card">
                <div className="left-sm">
                <span className="city-data">Jahon</span>
                <h2 className='sm-title'>
                  Yaponiya Markaziy Osiyoga nega qiziqmoqda? Tahlilchilar bilan suhbat                </h2>
                </div>
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/K464ofsIXNVl-57vA_PdOQq5zFiTlu38_medium.jpg" alt="" className='sm-img'/>
                </div>
              </div>  
              <div className="small-card">
                <div className="left-sm">
                <span className="city-data">Jahon</span>
                <h2 className='sm-title'>
                Rossiya va Ukraina Zaporijjya AESdagi yong‘inda bir-birini ayblamoqda. Bu haqda nimalar ma’lum?                </h2>
                </div>
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/XCqP9nt7QF6V7jg55LrigI1o9493_Ivq_medium.jpg" alt="" className='sm-img'/>
                </div>
              </div>  
              <div className="small-card">
                <div className="left-sm">
                <span className="city-data">Sport</span>
                <h2 className='sm-title'>
                Parij-2024: Yakuniy jadval, O‘zbekiston qahramonlari va avvalgi olimpiadalardagi natijalar                </h2>
                </div>
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/TFxKI4NQzflFq5xrGrJE-UlQzckG8bJg_medium.jpg" alt="" className='sm-img'/>
                </div>
              </div>  
              <div className="small-card">
                <div className="left-sm">
                <span className="city-data">O'zbekiston</span>
                <h2 className='sm-title'>
                  Markaziy Osiyo integratsiyasini urg‘ulagan maslahat uchrashuvi. Ekspertlar bilan suhbat                </h2>
                </div>
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/9D5CazhZwJkKgTirlokiQwJumJi78mOM_medium.jpg" alt="" className='sm-img'/>
                </div>
              </div>  
            </div>              
             <div className="right-news-box">
              <div className="sm-right-cards">
                <h3 className='top-title'>Muharrir tanlovi</h3>
                <div className="sm-right-card">
                  <h2 className="city-data">Sport</h2>
                  <p className="sm-text">
                    <h3 className="sm-box-title">Parij-2024: Yakuniy jadval, O‘zbekiston qahramonlari va avvalgi olimpiadalardagi natijalar</h3>
                   <p className="sm-news">
                   Parijda yozgi olimpiada o‘z yakuniga yetdi. O‘zbekiston sport delegatsiyasi o‘yinlarni tarixiy natija bilan, 206 mamlakat orasida 13-o‘rinda...
                    </p>
                  </p>
                </div>
                <div className="sm-right-card green">
                  <h2 className="city-data">O'zbekiston</h2>
                  <p className="sm-text">
                   <h3 className="sm-box-title">
                        O‘zboshimcha egallangan yer qanday qonuniylashtiriladi? Yangi qonun bo‘yicha mutaxassis bilan suhbat
                   </h3>
                   <p className="sm-news">
                      Kun.uz ko‘pchilikni qiziqtirayotgan savollar bilan Adliya vazirligi boshqarma boshlig‘i Uzoqbergen Jaksimurodov bilan suhbat...
                    </p>
                  </p>
                </div>
                <div className="sm-right-card orange">
                  <h2 className="city-data">O'zbekiston</h2>
                  <p className="sm-text">
                    <h3 className="sm-box-title">
                       340 ming abituriyentning “ikki” baho olishi va huquq testlaridagi mojaro - BMBA rasmiylari nima deydi?
                    </h3>
                   <p className="sm-news">
                     Bu yil 740 mingga yaqin abituriyent kirish imtihonlarida qatnashdi. Bu o‘tgan yilgidan 151 mingga kam...
                    </p>
                  </p>
                </div>
              </div>
            
        </div>
        </div>
           </div>
           <div className="left-rightContent">
              <img src="https://storage.kun.uz/source/thumbnails/_medium/10/3tzSinBr9MnkLgmwQnOheLaOhH-RSb70_medium.jpg" alt="" className='rightNewsImg'/>
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
        </div>       
    </div>
    <div className="global-news">
           <div className="left-new">  
            <h2  style={{fontSize:"32px",marginTop:"45px",display:"block",marginBottom:"5px"}}>Dolzarb xabarlar</h2>
               <img src="https://storage.kun.uz/source/thumbnails/_medium/10/qrmQ3WrLJIyj0pkQuqha1xjxqgZnFsw0_medium.jpg" alt="" className='gl-img'/>
            <h2 className="city-data">
            Jahon | 20:45 / 13.08.2024
            </h2>
            <h2 className="g-new">
            G‘azodagi urush va garovdagilar taqdiri. Netanyahu va mudofaa vaziri o‘rtasida bahs yuzaga keldi
            </h2>
            <p className="g-text">
            Isroil bosh vaziri Binyamin Netanyahu va mudofaa vaziri Yoav Gallant G‘azoda ushlab turilganlarni ozod etish uchun o‘t ochishni to‘xtatish bo‘yicha muzokaralar boshi berk ko‘chaga kirib qolgani borasida bir-birini tanqid qildi. 
            </p>
            </div>
            <div className="right-new" style={{marginTop:"35px"}}>
              <div className="rl-news">
                <img src="https://storage.kun.uz/source/thumbnails/_medium/10/qrmQ3WrLJIyj0pkQuqha1xjxqgZnFsw0_medium.jpg" alt="" className="gR-img" />
               <h2 className="city-data">18:36 / 13.08.2024</h2>
               <p className="rp">
                G‘azodagi urush va garovdagilar taqdiri. Netanyahu va mudofaa vaziri o‘rtasida bahs yuzaga keldi
               </p>
               <h2 className="city-data mr">O‘zbekiston | 18:36 / 13.08.2024</h2>
               <p className="rp-text">
                Bekobodda 5-qavatdan tushib ketib vafot etgan ayolning eri 9 yilga ozodlikdan mahrum qilindi
               </p>
               <h2 className="city-data">O‘zbekiston | 18:36 / 13.08.2024</h2>
               <p className="rp2-text">
                Bayden, Putin, Zelenskiy va Harris haqida. Maskning Tramp bilan suhbatidan asosiy gaplar
               </p>
              </div>
              <div className="rg-new">
              <img src="https://storage.kun.uz/source/thumbnails/_medium/10/8sqSYHrloZbqmuL0bamzf0jE3Dtrtkmt_medium.jpg" alt="" className="gR-img" />
              <h2 className="city-data">12:03 / 13.08.2024</h2>
              <p className="rp">
              «Kursk oblastidagi amaliyot». Zelenskiy va Putin bu haqda nimalar demoqda?
              </p>
              <img src="https://storage.kun.uz/source/thumbnails/_medium/10/9Hvgli9IVbE4_NbA6a4z2QRGN-0Kqa70_medium.jpg" alt="" className="gR-img gt" />
              <h2 className="city-data">00:41 / 13.08.2024</h2>
              <p className="rp">
              Tahoe, 200 ming dollar va ikki qavatli kottej - Olimpiada g‘oliblari taqdirlandi              </p>
              
              </div>        
            </div>
        </div>  
       <div className="videos">
        <h1 className="vidnew">
        Video yangiliklar
        </h1>
       <Videos/>
       <Videos2/>
       </div>  
       <div className="hayotiy-hikoyalar">
         <div className="hikoya-nav">
          <img src="https://storage.kun.uz/source/6/q8JJYLmO_dH-YtiEw53EVax_3_VhY7AQ.jpg" alt="" className='circle'/>
         </div>
         <div className="hikoya-title">
          <h2 className="hikoya-title-text">Hayotiy hikoyalar</h2>
          <p>Turfa taqdirlar va umr manzaralari</p>
         </div>
       </div>   
<div className="historys">
<div className="history">
         <div className="small-card w">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/WEzq8VGV2ETbbaLVz75aWGzJtzALZUnq_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data"><FaPlayCircle style={{color:'darkblue'}}/></span>
                <h2 className='sm-title'>
                Birni ko‘rib fikr qil, birni ko‘rib shukr... Xarobadagi Jannat                  </h2>
                </div>
              </div>  
              <div className="small-card w">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/cVpqFoZlCv-snZ3aDKeA_aKMI8xCiTqP_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data"><FaPlayCircle style={{color:'darkblue'}}/></span>
                <h2 className='sm-title'>
                “O‘zimni dunyodagi eng baxtli odam deb bilaman” - bir qo‘lda ro‘zg‘or tebratayotgan aravakash                     </h2>
                </div>
              </div>  
              <div className="small-card w">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/qo2mdMbzni4IoMKNzKgv-XZNX85Iu0yJ_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data"><FaPlayCircle style={{color:'darkblue'}}/></span>
                <h2 className='sm-title'>
                Sabrning mukofoti: 7 yetim qizning onasi eski “Kombi” o‘rniga yangi “Damas”li bo‘ldi                 </h2>
                </div>
              </div>  
       </div> 
       <div className="history">
         <div className="small-card w">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/c6Uzv-r7FdZtgzRTTRijBfmh6VM7bVWU_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data"></span>
                <h2 className='sm-title'>

                O‘ylamasdan qilingan ish tufayli sodir bo‘lgan fojia haqida hayotiy hikoya                </h2>
                </div>
              </div>  
              <div className="small-card w">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/DzBHVoo9o_fQh9GnF5sqPwUwtoMAGjVP_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data"></span>
                <h2 className='sm-title'>
                Chorsudagi tilla do‘konida ko‘z ko‘rib, quloq eshitmagan o‘g‘irlik sodir etildi                            </h2>
                </div>
              </div>  
              <div className="small-card w">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/Y5Cp6SLECeWlUdvlq-r4n7idkmWt9ksF_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data"></span>
                <h2 className='sm-title'>
                   Aldov yo‘li bilan boyimoqchi bo‘lgan Britaniya armiyasi mayori qanday fosh bo‘lgandi?
                </h2>
                </div>
              </div>  
       </div> 
</div>
<h2 className="hikoya-title-text ds">Maqolalar</h2>
<div className="maqolalar">
<div className="card rds">
  <div className="card-video">
    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/5DXc3GnG5MH_8qyIPIeACOxSteFpN8RK_medium.jpg" alt="" className='size'/>
  </div>
  <div className="card-content">
    <h2 className="card-in">
    Sudlar “amnistiya” vositasiga aylantirib olgan modda. Nega jazoning muqarrarligi ta’minlanmayapti?    </h2>
  </div>
  <h2 className="city-data pad">
    O'zbekiston
  </h2>
</div>
<div className="card rds">
  <div className="card-video">
    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/XQCMpDOhSYmOup8MSwBm0Shh206RZoxJ_medium.jpg" alt="" className='size'/>
  </div>
  <div className="card-content">
    <h2 className="card-in">
    Filmga ko‘chgan hayot – Berlin olimpiadasida g‘alaba qozonib Hitlerni asabiylashtirgan qora tanli sportchi kim edi?     </h2>
  </div>
  <h2 className="city-data pad">
    Jahon
  </h2>
</div>
<div className="card rds">
  <div className="card-video">
    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/SCmsYpoE2agYHpwHDpORv2j7XAM5rgLR_medium.jpg" alt="" className='size'/>
  </div>
  <div className="card-content">
    <h2 className="card-in">
    30 daqiqa farq bilan chempion bo‘lgan aka-singil - dzyudodagi Abelar haqida    </h2>
  </div>
  <h2 className="city-data pad">
Sport  
</h2>
</div>
<div className="card rds">
  <div className="card-video">
    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/zcLZz-LH7TfQAsOWmGfLzbpBr83viobb_medium.jpg" alt="" className='size'/>
  </div>
  <div className="card-content">
    <h2 className="card-in">
    Toshkentda uy bozoridagi vaziyat: narxlar qanday o‘zgarmoqda?    </h2>
  </div>
  <h2 className="city-data pad">
    O'zbekiston
  </h2>
</div>
</div>
<div className="maqolalar mtop">
<div className="card rds">
  <div className="card-video">
    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/Cnak_KmCYPDg2KsoJrgxjQcAJiyVlu7k_medium.jpg"alt="" className='size'/>
  </div>
  <div className="card-content">
    <h2 className="card-in">
    U yangi Messi bo‘la oladimi? Lamin Yamal oldidagi besh asosiy to‘siq    </h2>
  </div>
  <h2 className="city-data pad">
    Sport
  </h2>
</div>
<div className="card rds">
  <div className="card-video">
    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/UrXJQ4P-rjmfd8zM9SFpa_zx1cyOQFmM_medium.jpg" alt="" className='size'/>
  </div>
  <div className="card-content">
    <h2 className="card-in">
    Kim drama qilib beradi? Nega finalga Angliya chiqqani yaxshiroqligi haqida    </h2>
  </div>
  <h2 className="city-data pad">
    Sport
  </h2>
</div>
<div className="card rds">
  <div className="card-video">
    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/NFQnX6LUqAqtuKGg7wmMY1IoxDkLgvXD_medium.jpg" alt="" className='size'/>
  </div>
  <div className="card-content">
    <h2 className="card-in">
    Oramizdagi odamlar: “Moskvich” boshqarib ro‘zg‘or tebratayotgan sahobalik ayol    </h2>
  </div>
  <h2 className="city-data pad">
Jamiyat  
</h2>
</div>
<div className="card rds">
  <div className="card-video">
    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/S-lcuKHyzRKaeTb7n9gKJLJHY4iF_6m-_medium.jpg" alt="" className='size'/>
  </div>
  <div className="card-content">
    <h2 className="card-in" style={{fontSize:"20px"}}>
    Ucharlar uchun “saxiylik”. 170 km/soat tezlikda harakatlangan haydovchi faqat jarima bilan qutulib qolishi adolatdanmi?     </h2>
  </div>
  <h2 className="city-data pad">
    O'zbekiston
  </h2>
</div>
</div>
<div className="hayotiy-hikoyalar">
         <div className="hikoya-nav">
          <img src="https://storage.kun.uz/source/10/9CCwckDXRLaBaDLODAyLX_hpko6d-bJ-.jpg" alt="" className='circle'/>
         </div>
         <div className="hikoya-title">
          <h2 className="hikoya-title-text">Parij-2024</h2>
          <p>27 iyul kuni Fransiya poytaxtida XXXIII Yozgi olimpiya o‘yinlari ochildi. Musobaqalar 11 avgustga qadar davom etadi.</p>
         </div>
       </div>   
<div className="parij-news">
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
    </div>
    <div className="inter-title">
    <h1 className="hikoya-title-text mv">Intervyu</h1><div className="button-swapper"><IoPlaySkipBackCircleOutline style={{width:'40px',height:'60',color:'gray'}}/><ImNext  style={{width:'40px',height:'33',marginBottom:'12px',color:'gray'}}/></div>
    </div>
    <section className='section-intervyu'>     
      <div className="card wh">
          <div className="card-video">
            <img src="https://storage.kun.uz/source/thumbnails/_medium/10/ZHMR66-ZHJGwbac3b7fnJu2HLcpth9kI_medium.jpg"alt="" className='size'/>
          </div>
          <div className="card-content pd">
            <h2 className="card-in styl">
            Polosondan Germaniyaga yo‘l: 16 yoshli o‘zbek qizi olimpiada g‘olibi bo‘ldi             </h2>
          </div>
          <h2 className="city-data al">
            <FaPlayCircle/> Jamiyat
          </h2>
       </div>
       <div className="card wh">
          <div className="card-video">
            <img src="https://storage.kun.uz/source/thumbnails/_medium/10/-zv-TVBHtAcZaJ5qgWM7qusCAVRm9IYE_medium.jpg"alt="" className='size'/>
          </div>
          <div className="card-content pd">
            <h2 className="card-in styl">
            “Shakarning ko‘zga zarari bormi?” - oftalmolog bilan suhbat             </h2>
          </div>
          <h2 className="city-data al">
            <FaPlayCircle/> Sport
          </h2>
       </div>
       <div className="card wh">
          <div className="card-video">
            <img src="https://storage.kun.uz/source/thumbnails/_medium/10/XzzvW6lf7Hlo0t1cRIK-RAL0NIR9wbYi_medium.jpg"alt="" className='size'/>
          </div>
          <div className="card-content pd">
            <h2 className="card-in stylss">
            &nbsp;“Ritorikalar bemaqsad bo‘lmaydi” - Erdo‘g‘anning Isroilga tahdidi qanchalik jiddiy?            </h2>
          </div>
          <h2 className="city-data al">
            <FaPlayCircle/> Sport
          </h2>
       </div>
       <div className="card wh">
          <div className="card-video">
            <img src="https://storage.kun.uz/source/thumbnails/_medium/10/bURmvTdil9S0zf8Z8CKuI_wELC0zJcii_medium.jpg"alt="" className='size'/>
          </div>
          <div className="card-content pd">
            <h2 className="card-in styls">
            “Talabalarim oldida uyalib qolmaslik uchun til o‘rgandim” – 67 yoshida ingliz tilidan B2 darajasini olgan otaxon
               </h2>
          </div>
          <h2 className="city-data al">
            <FaPlayCircle/> <span style={{paddingBottom:'15px'}}>Jamiyat</span>
          </h2>
       </div>
    </section>
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
       <h2 className="mot">Motivatsiya</h2>
   <div className="mot-flex">
   <section className='mot-section'>
       <div className="car">
    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/ZHMR66-ZHJGwbac3b7fnJu2HLcpth9kI_medium.jpg" alt="" className='sizesd'/>
    <h2 className="city-data">
    <FaPlayCircle style={{width:'30px',height:'20px',color:'darkblue'}}/><span style={{fontSize:'15px'}}>Jamiyat</span>
  </h2>
  <div className="card-contentv">
    <h2 className="card-in ff">
     Polosondan Germaniyaga yo‘l: 16 yoshli o‘zbek qizi olimpiada g‘olibi bo‘ldi    </h2>
     <p className="motext">
     Andijon tumanining Poloson mahallasida yashovchi, o‘qituvchilar oilasida ulg‘aygan Rayyona Ibrohimova Germaniyaning Gyottingen shahrida o‘tkazilgan Butunjahon nemis tili olimpiadasida oltin medalni qo‘lga kiritdi.
     </p>
  </div>
 
</div>
<div className="start-mot">
<div className="small-card w">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/WEzq8VGV2ETbbaLVz75aWGzJtzALZUnq_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data"><FaPlayCircle style={{color:'darkblue'}}/> Jamiyat</span>
                <h2 className='sm-title'>
                Birni ko‘rib fikr qil, birni ko‘rib shukr... Xarobadagi Jannat                  </h2>
                </div>
              </div> 
              <div className="small-card w">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/WEzq8VGV2ETbbaLVz75aWGzJtzALZUnq_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data"><FaPlayCircle style={{color:'darkblue'}}/> Jamiyat</span>
                <h2 className='sm-title'>
                Birni ko‘rib fikr qil, birni ko‘rib shukr... Xarobadagi Jannat                  </h2>
                </div>
              </div> 
              <div className="small-card w">
                <div className="right-sm">
                    <img src="https://storage.kun.uz/source/thumbnails/_medium/10/WEzq8VGV2ETbbaLVz75aWGzJtzALZUnq_medium.jpg" alt="" className='sm-img'/>
                </div>
                <div className="left-sm">
                <span className="city-data"><FaPlayCircle style={{color:'darkblue'}}/> Jamiyat</span>
                <h2 className='sm-title'>
                Birni ko‘rib fikr qil, birni ko‘rib shukr... Xarobadagi Jannat                  </h2>
                </div>
              </div> 
</div>
       </section>
       <div className="fotocard">
            <img src="https://storage.kun.uz/source/thumbnails/_medium/10/WBstaQDRIB-zj1kl6QYzefEzvG0Y51Fl_medium.jpg" alt="" className='fotoImg'/>
            <div className="foto-content">
            <div className="city-data pdd">
            14:50 / 12.08.2024
            </div>
            <h1 className="fototext">
               Ukraina va Rossiya chegarasida janglar davom etmoqda. Urush suratlari
            </h1>
            </div>
        </div>
   </div>
   <Footer/>
    </>

  );
}

export default Home;
