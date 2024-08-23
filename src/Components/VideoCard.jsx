import React, { useState } from 'react';
import Modal from './Modal';
import '../static/Modal.css'; // Ensure this path is correct

const VideoCard = ({ videoSrc, thumbnailSrc, title, time ,description}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card">
      <div className="card-video" onClick={openModal}>
        <img src={thumbnailSrc} alt={title} />
      </div>
      <div className="card-content">
        <h2 className="card-in">{title}</h2>
      </div>
      <h2 className="city-data pad">{time}</h2>
      {isModalOpen && (
        <Modal
          videoSrc={videoSrc}
          onClose={closeModal}
          title={title}
          description={description}
          time={time}
        />
      )}
    </div>
  );
};

export default VideoCard;
