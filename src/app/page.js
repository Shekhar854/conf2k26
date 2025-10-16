'use client';
import ConferenceHeader from "./components/ConferenceHeader";
import YellowBanner from "./components/YellowBanner";
import PurpleNavigation from "./components/PurpleNavigation";
import AboutWithImage from "./components/AboutWithImage";
import ThemeToggle from "./components/ThemeToggle";
import Timeline from "./components/Timeline";
import buildingImage from '../../public/stock_images/indian_fort_historic_b32d36ef.jpg';
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Track from "./components/Track";
import Sponsor from "./components/Sponsor";
import ConferenceGuidelines from "./components/ConferenceGuideline";
import LocationMap from "./components/LocationMap";

export default function Home() {
  const announcements = [
    "Conference will be held only in PHYSICAL MODE.",
    "Acceptance notification has been sent.",
    "Last date of submission for PhD Colloquium is 31st October.",
    "Registration is till 31st October for Early Bird and 15th November for Standard.",
    "Early Bird registration is open now.",
    "Camera Ready submission is open now (Deadline: 31st October 2025)."
  ];

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "COMMITTEE", href: "/committee" },
    { label: "SPEAKERS", href: "/speakers", hasDropdown: true },
    { label: "PROGRAM", href: "/program" },
    { label: "REGISTRATION", href: "/registration" },
    { label: "GUIDELINES", href: "/guideline" },
    // { label: "PhD COLLOQUIUM", href: "/phd" },
    { label: "SPONSORS", href: "/sponsors" },
    // { label: "ACCOMMODATION", href: "/accommodation", hasDropdown: true },
    { label: "PREVIOUS EVENTS", href: "/previous", hasDropdown: true },
    { label: "CONTACT", href: "/contact" },
  ];

  const aboutContent = [
    'IIMT College of Engineering Greater Noida: On the morning of August 18, 2005, we began our journey. Since its inception in 2005, it has contributed to the field of technical fields by providing high-quality engineering and management education. IIMT is a prestigious higher education institution that produces meritorious students with exceptional professional recognition and career growth in higher learning, producing meritorious students with excellent career growth and professional recognition.',
    'At ICNGWCET-2K25, participants will delve into a rich tapestry of topics including advance microwave communication, 5G, 6G and beyond, AI-ML powered technologies, smart systems, edge computing, IoT ecosystems, block-chain, cyber security, and much more. With an emphasis on cross-disciplinary collaboration and real-world impact, this conference is not only a showcase of breakthrough ideas but also a breeding ground for partnerships that drive progress. Attendees can look forward to insightful keynote speeches from renowned experts, technical paper presentations upon new era of communication and interactive panel discussions, all designed to inspire innovation, foster dialogue, and foster global connections. Whether you are an experienced researcher, a curious student, a tech entrepreneur, or a policy-maker shaping the future of digital infrastructure, ICNGWCET-2K25 will offer a unique opportunity to connect, learn, and lead.',
    'There are multiple tracks in the conference covering almost all areas of Electrical, Computer & Electronics Engineering. Conference Proceedings will be abstracted and indexed by IEEE Xplore.'
  ];

  return (
    <div className="min-h-screen mx-5">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <ConferenceHeader title="ICNGWCET-2K26" dates="12-13 SEP'26 " />
      <YellowBanner announcements={announcements} />
      <PurpleNavigation items={navItems} />
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
      <Footer/>
    </div>
  );
}
