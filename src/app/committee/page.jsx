import React from 'react';
import CommitteeCard from '../components/CommitteeCard';

const CommitteePage = () => {
  const committeeMembers = [
    { name: 'Shri Yogesh Mohan Gupta', designation: 'HON\'BLE CHAIRMAN\nIIMT Group of Colleges, Greater Noida, U.P, India', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Dr. Mayank Agarwal', designation: 'HON\'BLE MANAGING DIRECTOR\nIIMT Group of Colleges, Greater Noida, U.P, India', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Prof. (Dr.) Ankur Jauhari', designation: 'DIRECTOR GENERAL\nIIMT Group of Colleges, Greater Noida, U.P, India', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Prof. (Dr.) Chetan Khemraj', designation: 'DIRECTOR\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Prof. (Dr.) A. P. Singh', designation: 'DEAN ACADEMICS\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Prof. (Dr.) Seema Nayak', designation: 'DEAN (IQAC)\nIIMT College of Engineering, Greater Noida, U.P, India', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Prof. (Dr.) Mahendra Sharma', designation: 'DEAN (CSE & ALLIED BRANCHES)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Dr. Pankaj Jha', designation: 'HOD ECE\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Dr. Ajay Kumar Gupta', designation: 'HOD-CSE (AI)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Dr. Shailendra Prakash', designation: 'ASSOCIATE PROFESSOR (CSE)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Dr. Rajeev Kumar Chauhan', designation: 'ASSOCIATE PROFESSOR (ECE)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Mr. Rajeev Kumar Singh', designation: 'DIGITAL MARKETING MANAGER\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Dr. Girish Dutt Gautam', designation: 'ASSOCIATE PROFESSOR (ME)\nIIMT College of Engineering, Greater Noida, U.P, India', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Prof. (Dr.) Prabhat Vishwakarma', designation: 'HOD-AI & DS)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Prof. (Dr.) Naveen Prakash', designation: '(HOD-CSE)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Prof. (Dr.) Naveen Sharma', designation: '(HOD-MCA)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Dr. Tabassum Abbasi', designation: '(HOD-CE)\nIIMT College of Engineering, Greater Noida, U.P, India', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Prof. (Dr.) Deepak Sharma', designation: '(HOD-ASH)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Dr. Niles Waghmare', designation: '(HOD-ME)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
    { name: 'Dr. Shweta Dhand Suit', designation: '(COORDINATOR-MBA)\nIIMT College of Engineering, Greater Noida, U.P', imageUrl: 'https://www.iimtindia.net/CCPdfMoreImages/14DR.%20PANKAJ%20JHA.jpeg' },
  ];

  return (
    <div className="bg-gray-100 dark:bg-white-900 min-h-screen py-12">
      <div className="container mx-auto px-2">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-black mb-8">
          Committee Members
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <CommitteeCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;