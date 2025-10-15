export default function AboutWithImage({
  title = "About ICNGWCET 2026",
  content = [] 
}) {
  return (
    <section 
      className="relative py-16 md:py-24"
      style={{
        background: 'linear-gradient(to bottom, rgba(230, 220, 240, 0.6), rgba(240, 230, 250, 0.8))',
      }}
    >
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/logo/iimt25.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 bg-white/30 backdrop-blur-md p-8 rounded-lg border border-white/40 shadow-lg">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900" data-testid="text-about-title">
              {title}
            </h2>
            
            <div className="space-y-4 text-gray-800 leading-relaxed">
              {content.map((paragraph, index) => (
                <p key={index} className="text-justify italic" data-testid={`text-about-content-${index}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative transition-transform duration-300 hover:scale-105">
              <img
                src="/stock_images/Conf26.png"
                alt="Conference Venue"
                className="w-full h-auto max-w-md object-cover rounded-lg shadow-2xl"
                data-testid="img-venue"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}