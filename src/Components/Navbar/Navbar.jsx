import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiSearch2Line } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import Menu from '../../pages/Menu';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("O'zbekcha");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSearchClick = () => setIsSearchOpen(!isSearchOpen);
  const handleCloseClick = () => setIsSearchOpen(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 15px', backgroundColor: '#fff', borderRadius: '5px', width: '100%', maxWidth: '1350px', height: '64px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://kun.uz/assets/28f95538/img/icons/logo-light.svg" alt="Kun.uz Logo" style={{ height: '37px', marginRight: '120px', width: '92px' }} />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/Uzbekistan" className='category'>O'zbekiston</Link>
            <Link to="/jahon" className='category'>Jahon</Link>
            <Link to="/iqtisodiyot" className='category'>Iqtisodiyot</Link>
            <Link to="/jamiyat" className='category'>Jamiyat</Link>
            <Link to="/sport" className='category'>Sport</Link>
            <Link to="/fan-texnika" className='category xl'>Fan-texnika</Link>
            <Link to="/nuqtayi-nazar" className='category xxl'>Nuqtayi nazar</Link>
            <Link to="/audio" className='category mx'>Audio</Link>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div onClick={toggleDropdown} style={{ cursor: 'pointer', padding: '10px', backgroundColor: '#f8f8f8', border: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', width: '120px', height: '42px', overflow: 'hidden' }}>
            <GrLanguage style={{ marginRight: '8px' }} />
            {selectedLanguage}
          </div>
          {isDropdownOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: '#f8f8f8', border: 'none', borderRadius: '5px', marginTop: '5px', zIndex: 1000, width: '120px', height: '126px', overflowY: 'auto' }}>
              <div onClick={() => handleLanguageSelect("O'zbekcha")} style={{ padding: '10px', cursor: 'pointer', height: '42px', lineHeight: '42px' }}>O'zbekcha</div>
              <div onClick={() => handleLanguageSelect("Русский")} style={{ padding: '10px', cursor: 'pointer', height: '42px', lineHeight: '42px' }}>Русский</div>
              <div onClick={() => handleLanguageSelect("English")} style={{ padding: '10px', cursor: 'pointer', height: '42px', lineHeight: '42px' }}>English</div>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ position: 'relative' }}>
            <button onClick={handleSearchClick} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <span className="material-icons" style={{ fontSize: '24px' }}><div className='bag'><RiSearch2Line /></div></span>
            </button>
            <div
              style={{
                display: isSearchOpen ? 'flex' : 'none',
                alignItems: 'center',
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                gap: '5px',
                backgroundColor: '#fff',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                animation: 'expandInput 0.5s forwards',
              }}
            >
              <input
                type="text"
                placeholder="Qidiruv"
                style={{
                  padding: '5px 10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '14px',
                  width: '0',
                  opacity: '0',
                  animation: 'expandInputWidth 0.5s forwards' 
                }}
              />
              <button onClick={handleCloseClick} className="close-button" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <AiOutlineClose style={{ fontSize: '24px', color: '#333' }} />
              </button>
            </div>
          </div>
          <button className='butmenu' onClick={toggleMenu}>
            <span className="material-icons"><IoMdMenu style={{ width: '24px', height: '20px', }} /></span>
          </button>
        </div>
        <style>
          {`
            @keyframes expandInputWidth {
              from {
                width: 0;
                opacity: 0;
              }
              to {
                width: 315px;
                opacity: 1;
              }
            }
            @keyframes collapseInputWidth {
              from {
                width: 315px;
                opacity: 1;
              }
              to {
                width: 0;
                opacity: 0;
              }
            }
          `}
        </style>
      </nav>
      {isMenuOpen && <Menu />} {/* Menyu ochiq bo'lsa, Menu-ni ko'rsating */}
    </>
  );
}

export default Navbar;
