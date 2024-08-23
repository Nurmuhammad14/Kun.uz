import React, { useEffect } from 'react';

const Modal2 = ({ videoSrc, onClose, title, description, time }) => {
  useEffect(() => {
    // Body scrollni bloklash
    document.body.classList.add('modal-open');
    return () => document.body.classList.remove('modal-open');
  }, []);

  useEffect(() => {
    // Video avtomatik boshlanishi
    const iframe = document.querySelector('.modal-video iframe');
    if (iframe) {
      // Avval video URL'sini olish
      const src = iframe.src;
      // Agar autoplay parametri mavjud bo'lsa, uni olib tashlaymiz
      const newSrc = src.includes('?') ? src.split('?')[0] : src;
      iframe.src = `${newSrc}?autoplay=1`;
    }
  }, [videoSrc]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-video">
          <iframe
            src={videoSrc}
            title="Video Modal"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="modal-info">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-description">{description}</p>
          <p className="modal-time">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
