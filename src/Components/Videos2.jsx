import React from 'react';
import VideoCard2 from './VideoCard2'; // VideoCard2 importi

const Videos2 = () => {
  return (
    <div className="videolar">
      <VideoCard2
        videoSrc="https://www.youtube.com/embed/9i8X3rcmMUU"
        title="Eron vitse-prezidenti 10 kun ishlab, iste’foga chiqdi"
        description="Eron vitse-prezidenti 10 kun ishlab, iste’foga chiqdi. Nega?"
        time="Jahon | 22:45 / 13.08.2024"
      />
      <VideoCard2
        videoSrc="https://www.youtube.com/embed/J5xO9WfUbEo"
        title="Maktablardagi majburiy mehnat va Termizda ochilgan Islom instituti — 13-avgust dayjesti"
        description="13 avgustning asosiy yangiliklari: O‘zbekistonda ro‘y bergan muhim voqea va hodisalar"
        time="O‘zbekiston | 21:51 / 13.08.2024"
      />
      <VideoCard2
        videoSrc="https://www.youtube.com/embed/j3BbHPn-sbM"
        title="67 yoshida ingliz tilidan B2 daraja"
        description="“Talabalarim oldida uyalib qolmaslik uchun til o‘rgandim” – 67 yoshida ingliz tilidan B2 darajasini olgan otaxon"
        time="Jamiyat | 18:52 / 13.08.2024"
      />
      <VideoCard2
        videoSrc="https://www.youtube.com/embed/-rYn4yG4SQo"
        title="Shohimardonga borish yanada osonlashdi: “Farg‘ona” va “Oq qiya” postlari 24 soatlik rejimga o‘tdi"
        description="Shohimardonga borish yanada osonlashdi: “Farg‘ona” va “Oq qiya” postlari 24 soatlik rejimga o‘tdi"
        time="Jamiyat | 14:57"
      />
    </div>
  );
};

export default Videos2;
