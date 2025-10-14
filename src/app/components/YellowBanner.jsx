

export default function YellowBanner({ announcements = [] }) {
  if (announcements.length === 0) return null;

  return (
    <div className="bg-yellow-400 text-black overflow-hidden relative">
      <div className="animate-marquee whitespace-nowrap py-2 flex items-center">
        {[...announcements, ...announcements, ...announcements].map((announcement, index) => (
          <span key={index} className="inline-block px-8 font-medium" data-testid={`text-banner-${index}`}>
            {announcement}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}