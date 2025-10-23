import React from 'react';

const CommitteeCard = ({ member }) => {
  return (
    <div className="relative group bg-white dark:bg-gray-00 rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105">
      <div className="relative inline-block mb-4">
        <img
          src={member.imageUrl}
          alt={member.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-orange-600 group-hover:border-yellow-500 transition-colors duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-00 dark:text-black">{member.name}</h3>
      <p className=" dark:text-black dark:text-black-400 whitespace-pre-line">{member.designation}</p>
    </div>
  );
};

export default CommitteeCard;