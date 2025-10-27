import React from 'react';
import SpeakerCard from '../../components/SpeakerCard';

const TutorialSpeakersPage = () => {
  const speakers = [
    // Add tutorial speaker data here
  ];

  return (
    <div className="bg-gray-100 dark:bg-white-900 min-h-screen py-12">
      <div className="container mx-auto px-2">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-black mb-8">
          Tutorial Speakers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} member={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialSpeakersPage;