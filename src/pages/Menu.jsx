import React from 'react';
import "../static/Menu.css"
import ThemeSwitch from '../Components/ThemeSwitch';
import AdImage from '../static/business-bg1.png';


function Menu() {
  return (
    <>
    <div className="menu-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px'}}>
      <ul style={{ listStyleType: 'none', padding: 0 ,textAlign:'center'}}>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Videolavhalar</li>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Fotolavhalar</li>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Dolzarb<span style={{color:'white'}}>.</span>xabarlar</li>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Hayotiy<span style={{color:'white'}}>.</span>hikoyalar</li>
      </ul>
      <ul style={{ listStyleType: 'none', padding: 0 ,textAlign:'center'}}>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Muharrir<span style={{color:'white'}}>.</span>tanlovi</li>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Maqolalar</li>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Kun<span style={{color:'white'}}>.</span>mavzulari</li>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Bizning<span style={{color:'white'}}>.</span>jamoa</li>
      </ul>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Reklama<span style={{color:'white'}}>.</span>tariflari</li>
        <li className="menu-item" style={{ marginBottom: '10px', width: '200px' }}>-<span style={{color:'white'}}>.</span>Media<span style={{color:'white'}}>.</span>kit</li>
      </ul>
     </div>
      <div className="menu-image">
       <img src={AdImage} alt="" />
      </div>
      <div className="menu-functionalities">
        <h4>Qo‘shimcha funksionallar</h4>
        <div className="dark-mode-toggle">
          <span style={{marginBottom:"300px",marginLeft:'10px'}}>Tungi ko‘rinish</span>
                <div className="theme">
                <ThemeSwitch/>
                </div>
        </div>
      </div>      
    </div>
    <div className="menu-footer">
    <ul className='fut-menu'>
        <a href=""><li className="nav-menu">Toshkent sh.</li></a>
        <a href=""><li className="nav-menu">Qoraqalpog‘iston</li></a>
        <a href=""><li className="nav-menu">Andijon</li></a>
        <a href=""><li className="nav-menu">Farg‘ona</li></a>
        <a href=""><li className="nav-menu">Namangan</li></a>
        <a href=""><li className="nav-menu">Samarqand</li></a>
        <a href=""><li className="nav-menu">Buxoro</li></a>
        <a href=""><li className="nav-menu">Xorazm</li></a>
        <a href=""><li className="nav-menu">Surxondaryo</li></a>
        <a href=""><li className="nav-menu">Qashqadaryo</li></a>
        <a href=""><li className="nav-menu">Jizzax</li></a>
        <a href=""><li className="nav-menu">Sirdaryo</li></a>
        <a href=""><li className="nav-menu">Toshkent vil.</li></a>
        <a href=""><li className="nav-menu">Navoiy</li></a>
    </ul>
  </div>
  </>
  );
}

export default Menu;
