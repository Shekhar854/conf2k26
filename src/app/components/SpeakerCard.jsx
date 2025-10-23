import React from 'react';
import Image from 'next/image';

const SpeakerCard = ({ name, title, affiliation, imgSrc, bgColor = 'bg-red-500' }) => {
  return (
    <div className={`rounded-lg shadow-lg text-white p-4 text-center ${bgColor}`}>
      <div className="mb-2">
        <Image
          src={imgSrc}
          alt={name}
          width={80}
          height={80}
          className="rounded-full mx-auto border-4 border-white"
        />
      </div>
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm">{title}</p>
      <p className="text-xs">{affiliation}</p>
    </div>
  );
};

export default SpeakerCard;