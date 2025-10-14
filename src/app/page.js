'use client';
import ConferenceHeader from "./components/ConferenceHeader";
import YellowBanner from "./components/YellowBanner";
import PurpleNavigation from "./components/PurpleNavigation";
import AboutWithImage from "./components/AboutWithImage";
import ActionButtons from "./components/ActionButtons";
import ThemeToggle from "./components/ThemeToggle";
import buildingImage from '../../public/stock_images/indian_fort_historic_b32d36ef.jpg';

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
    { label: "PROGRAM", href: "/program", hasDropdown: true },
    { label: "REGISTRATION", href: "/registration" },
    { label: "AUTHORS CENTRAL", href: "/authors", hasDropdown: true },
    { label: "PhD COLLOQUIUM", href: "/phd" },
    { label: "SPONSORS", href: "/sponsors" },
    { label: "ACCOMMODATION", href: "/accommodation", hasDropdown: true },
    { label: "PREVIOUS UPCONS", href: "/previous", hasDropdown: true },
    { label: "CONTACT", href: "/contact" },
  ];

  const aboutContent = [
    'The 12th "IEEE Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON-2025)" will be held at IIT BHU, Varanasi, India from 13-15 December 2025. UPCON is the top notch International conference covering broad topics in the areas of Electrical, Computer, and Electronics Engineering.',
    'UPCON conference is organized annually at various locations in Uttar Pradesh (UP). Prior to this, first eleven series of UPCON conferences were organized at GCET, Greater Noida (2014), Indian Institute of Information Technology Allahabad (2015), IIT BHU Varanasi (2016), GLA University Mathura (2017), MMMUT Gorakhpur (2018), AMU Aligarh (2019), MNNIT Allahabad (2020), BTKIT Dwarahat(2021), IIIT Allahabad (2022), Amity University (2023), and SRMCEM (2024).',
    'The conference is technically and financially sponsored by IEEE UP Section. There are multiple tracks in the conference covering almost all areas of Electrical, Computer & Electronics Engineering. Conference Proceedings will be abstracted and indexed by IEEE Xplore.'
  ];

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <ConferenceHeader title="UPCON 2025" dates="13-15 December'25" />
      <YellowBanner announcements={announcements} />
      <PurpleNavigation items={navItems} />
      <AboutWithImage 
        title="About UPCON 2025" 
        content={aboutContent}
        imageUrl={buildingImage}
      />
      <ActionButtons
        onFlyerClick={() => console.log('Download flyer')}
        onRegisterClick={() => console.log('Register now')}
      />
    </div>
  );
}