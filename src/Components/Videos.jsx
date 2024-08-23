import React from 'react';
import VideoCard from './VideoCard';
import "../static/Modal.css"

const Videos = () => {
  return (
    <div className="videolar">
      <VideoCard
        videoSrc="https://www.youtube.com/embed/I7bWm0Adl08"
        thumbnailSrc="https://img.youtube.com/vi/I7bWm0Adl08/hqdefault.jpg"
        title="14 avgustning asosiy yangiliklari: O‘zbekistonda ro‘y bergan muhim voqea va hodisalar"
        time="Jamiyat | 20:02"
        description="O‘zbekistonda 1 sentabrdan boshlab pensiyalar va nafaqalar 15 foizga oshiriladi. 1 oktyabrdan e’tiboran esa budjet tashkilotlari xodimlarining maoshi 10 foizga, o‘qituvchilar va tibbiyot xodimlarining maoshi esa 15 foizga ko‘tariladi."
      />
      <VideoCard
        videoSrc="https://www.youtube.com/embed/c7T-hrm5KtQ"
        thumbnailSrc="https://img.youtube.com/vi/c7T-hrm5KtQ/hqdefault.jpg"
        title="Shohimardonga borish yanada osonlashdi: “Farg‘ona” va “Oq qiya” postlari 24 soatlik rejimga o‘tdi"
        time="Jamiyat | 14:57"
        description="Farg‘ona viloyati bojxona boshqarmasining “Farg‘ona” chegara bojxona posti hamda Shohimardonga kirish qismida joylashgan “Oq qiya” bojxona punkti tun-u kun ishlash rejimiga o‘tkazildi."
      />
      <VideoCard
        videoSrc="https://www.youtube.com/embed/KabpN3FY_Os"
        thumbnailSrc="https://img.youtube.com/vi/KabpN3FY_Os/hqdefault.jpg"
        title="G‘alabadan yiroq Isroil, Kurskda 74 ta aholi punktini nazoratiga olgan Ukraina va samokatlarni taqiqlayotgan Avstraliya - kun dayjesti"
        time="Jahon | 14:30"
        description="HAMASdagilar G‘azodagi sulh bo‘yicha muzokaralar bo‘yicha o‘z talablarini takrorlab, boshqatdan yangi muzokaralar emas, Isroil va vositachilar bilan muhokama qilib bo‘lingan."
      />
      <VideoCard
        videoSrc="https://www.youtube.com/embed/-rYn4yG4SQo"
        thumbnailSrc="https://img.youtube.com/vi/-rYn4yG4SQo/hqdefault.jpg"
        title="“Aholi bilan kelishilmagan” - Sebzordagi bolalar maydonchasi sotilishidan odamlar norozi"
        time="Jamiyat | 11:47"
        description="Toshkent shahar hokimligi Olmazor tumanidagi bolalar maydonchasi yangi joyga ko‘chirilishi, bu masala aholi bilan kelishilganini ma’lum qilgandi. Lekin Kun.uz'ga murojaat qilgan fuqarolar buning aksini aytmoqda. "
      />
    </div>
  );
};

export default Videos;
