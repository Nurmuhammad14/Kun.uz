import React, { useState, useEffect, useRef } from 'react';
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar';
import "../static/Audio.css";
import { MdNextPlan, MdSkipNext } from "react-icons/md";
import Footer from '../Components/Footer/Footer';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { IoMdSkipBackward } from "react-icons/io";
import { HiVolumeUp } from "react-icons/hi";
import { MdSmartDisplay } from "react-icons/md";
import { IoEye } from "react-icons/io5";

const tracks = [
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Toshkentda nosozlik sabab 3 mingdan ortiq xonadon elektrsiz qoldi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/85PT-0sBicztFfqg8W768ka9bxgWD__N_medium.jpg",
    date: "13:56 / 15.08.2024",
    views: 58,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Andijonda o‘qituvchilarni maktabdagi qurilish ishlariga jalb etgan direktor 34 mln so‘m jarimaga tortildi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/uHk11MJ55_HDd6kTV5T8g2uTLTktoMm__medium.jpg",
    date: "13:55 / 15.08.2024",
    views: 27,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "JSST yana bir bor mpox virusi tarqalishi sababli global favqulodda holat e’lon qildi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/cjBDltucGeXxlBnsKzEaRalEGynYZRvI_medium.jpg",
    date: "13:55 / 15.08.2024",
    views: 33,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Rossiyada benzin eksportiga taqiq yil oxirigacha uzaytirildi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/CdxC3OQMlbQorpCxw8SmdQtpfwWWxDqN_medium.jpg",
    date: "13:55 / 15.08.2024",
    views: 27,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "2023 yilda Yevropada 48 mingga yaqin kishi jazirama issiqdan vafot etdi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/TIeNNg2z0ilGW15m3D3VozE3t3fcMAXL_medium.jpg",
    date: "13:55 / 15.08.2024",
    views: 87,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Ukraina Rossiyaning Sudja shahri egallanganini ma’lum qildi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/5weDjuoamzh5Pk4MDn-TKZEmokWEZNuM_medium.jpg",
    date: "13:55 / 15.08.2024",
    views: 125,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Ukraina energetika vaziri o‘rinbosari pora bilan ushlandi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/mtFv_NhIAR6CPGDYRmE-TpgKSEJot7E2_medium.jpg",
    date: "13:55 / 15.08.2024",
    views: 106,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "OAV: Isroil Eronning keng ko‘lamli hujumini kutmoqda",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/3VP3V7-QRsamGrlZ7SESwYwfKADCsqNo_medium.jpg",
    date: "13:52 / 15.08.2024",
    views: 51,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Tramp uzoq tanaffusdan so‘ng X ijtimoiy tarmog‘iga qaytdi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/xj97GpV52w-R-WLFYMgxkyXdGy7aCLkC_medium.jpg",
    date: "13:52 / 15.08.2024",
    views: 45,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Afina yaqinida o‘rmon yong‘inlari: yuzlab fuqarolar evakuatsiya qilindi",
    image:"https://storage.kun.uz/source/thumbnails/_medium/10/6nhYY1gcgYm2UwBYx_yuxpzjz8Jt6QXf_medium.jpg",
    date: "13:51 / 15.08.2024",
    views: 47,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "TSAHAL Hamasning garovga olingan shaxs o‘ldirilgani haqidagi bayonotini tekshirmoqda",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/IokjUoyaLeO-pYu9YKA82p2gvZdNFQZD_medium.jpg",
    date: "13:51 / 15.08.2024",
    views: 62,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Lufthansa Yaqin Sharqqa parvozlar jadvalini o‘zgartirmoqda",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/RQFdWKeoc75ToSptSTQLJkFsRjW97Crg_medium.jpg",
    date: "13:50 / 15.08.2024",
    views: 37,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Putin Ukrainaning Kursk oblastidagi maqsadlarini sanadi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/7ERLIYY-TFvv8xVPZ_Rm91_VkYV9DKnm_medium.jpg",
    date: "13:42 / 15.08.2024",
    views: 125,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Zaporijjya AESda yong‘in sodir bo‘ldi",
    image:"https://storage.kun.uz/source/thumbnails/_medium/10/FAkssUA1XvpjoIxIOxsywbp0Q9aUXF1D_medium.jpg",
    date: "15:10 / 15.08.2024",
    views: 70,
  },
  {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "Rossiya qamoqxonasidan ozod etilgan Grayner Olimpiadada oltinni qo‘lga kiritdi",
    image: "https://storage.kun.uz/source/thumbnails/_medium/10/O7vVCs54_84N8APuE1BOJ2Qy5nCy3Blh_medium.jpg",
    date: "15:05 / 15.08.2024",
    views: 94,
  },
  // Add more track objects here
];

function Audio() {
  const [isSticky, setIsSticky] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const audioRef = useRef(null);

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

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = tracks[currentTrackIndex].src;
    audio.load();
  }, [currentTrackIndex]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    audio.volume = e.target.value;
    setVolume(e.target.value);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
  };

  const handleBack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <div className='container'>
        <Banner />
        <div className={isSticky ? "sticky-navbar" : ""}>
          <Navbar />
        </div>
        <div className="audio-player">
          <div className="audio-info">
            <img src={tracks[currentTrackIndex].image} alt="News" />
            <p className='audio-title'>{tracks[currentTrackIndex].title}</p>
          </div>
          <audio ref={audioRef}></audio>
          <div className="audio-controls">
            <button onClick={handleBack}><IoMdSkipBackward style={{ width: "20px", height: "20px", color: "silver" }} /></button>
            <button onClick={togglePlayPause}>
              {isPlaying ? (
                <FaPauseCircle style={{ width: "42px", height: "42px", color: "silver" }} />
              ) : (
                <FaPlayCircle style={{ width: "42px", height: "42px", color: "silver" }} />
              )}
            </button>
            <button onClick={handleNext}><MdSkipNext style={{ width: "30px", height: "30px", color: "silver" }} /></button>
            <div className="range">
              <input
                type="range"
                className='audiorange'
                value={currentTime}
                max={duration}
                onChange={handleSeek}
              />
            </div>
            <span className='audio-time'>{formatTime(currentTime)} / {formatTime(duration)}</span>
            <div className="vol-div">
              <HiVolumeUp style={{ width: "27px", height: "27px", color: "silver" }} />
              <input
                type="range"
                className="volume-slider"
                value={volume}
                min="0"
                max="1"
                step="0.01"
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="left-content">
            <div className="leftConten">
              {tracks.map((track, index) => (
                <div className="pleer" key={index}>
                  <div className="plimg">
                    <img src={track.image} alt="" className='audimg'/>
                  </div>
                  <MdSmartDisplay style={{ width: "52px", height: "52px", color: "silver", marginLeft: "20px", marginRight: '13px' }} />
                  <p className="pltext">
                    {track.title}
                  </p>
                  <div className="city-dat">{track.date}</div>
                  <div className="eye-div">
                    <IoEye style={{ width: "20px", height: "20px", color: "silver", marginLeft: "20px", marginRight: '5px ' }} /> 
                    <div className="city-data dn">{track.views}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right-content">
            <h3 className='right-news-title'>So‘nggi yangiliklar</h3>
            <p className="right-news-p">
              Germaniyada qurol qonunchiligini <br /> kuchaytirish taklif qilinmoqda
              <h5 className='city-data'>Jahon | 22:34</h5>
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
              <MdNextPlan style={{ color: "darkblue", width: "40px", height: "40px" }} /><span className='all-new'>Barcha yangiliklar</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Audio;
