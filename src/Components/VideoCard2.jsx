import React, { useState } from 'react';
import Modal2 from './Modal2';

const VideoCard2 = ({ videoSrc, title, description, time }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="card" onClick={handleOpenModal}>
        <div className="card-video">
          <img src={`https://img.youtube.com/vi/${videoSrc.split('/').pop()}/hqdefault.jpg`} alt={title} />
        </div>
        <div className="card-content">
          <h2 className="card-in">{title}</h2>
        </div>
        <h2 className="city-data pad">{time}</h2>
      </div>

      {isModalOpen && (
        <Modal2
          videoSrc={videoSrc}
          onClose={handleCloseModal}
          title={title}
          description={description}
          time={time}
        />
      )}
    </>
  );
};

export default VideoCard2;
