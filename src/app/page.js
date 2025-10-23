'use client';
import AboutWithImage from "./components/AboutWithImage";
import Timeline from "./components/Timeline";
import buildingImage from '../../public/stock_images/indian_fort_historic_b32d36ef.jpg';
import Gallery from "./components/Gallery";
import Track from "./components/Track";
import Sponsor from "./components/Sponsor";
import ConferenceGuidelines from "./components/ConferenceGuideline";
import LocationMap from "./components/LocationMap.jsx";

export default function Home() {

  const aboutContent = [
    'IIMT College of Engineering Greater Noida: On the morning of August 18, 2005, we began our journey. Since its inception in 2005, it has contributed to the field of technical fields by providing high-quality engineering and management education. IIMT is a prestigious higher education institution that produces meritorious students with exceptional professional recognition and career growth in higher learning, producing meritorious students with excellent career growth and professional recognition.',
    'At ICNGWCET-2K25, participants will delve into a rich tapestry of topics including advance microwave communication, 5G, 6G and beyond, AI-ML powered technologies, smart systems, edge computing, IoT ecosystems, block-chain, cyber security, and much more. With an emphasis on cross-disciplinary collaboration and real-world impact, this conference is not only a showcase of breakthrough ideas but also a breeding ground for partnerships that drive progress. Attendees can look forward to insightful keynote speeches from renowned experts, technical paper presentations upon new era of communication and interactive panel discussions, all designed to inspire innovation, foster dialogue, and foster global connections. Whether you are an experienced researcher, a curious student, a tech entrepreneur, or a policy-maker shaping the future of digital infrastructure, ICNGWCET-2K25 will offer a unique opportunity to connect, learn, and lead.',
    'There are multiple tracks in the conference covering almost all areas of Electrical, Computer & Electronics Engineering. Conference Proceedings will be abstracted and indexed by IEEE Xplore.'
  ];

  return (
    <>
      <AboutWithImage
        title="About ICNGWCET-2K26 "
        content={aboutContent}
        imageUrl={buildingImage}
      />
      <Timeline/>
      <Track/>
      <Sponsor/>
      <Gallery/>
      <LocationMap/>
    </>
  );
}
