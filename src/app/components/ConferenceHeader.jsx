

export default function ConferenceHeader({
  title = "UPCON 2025",
  dates = "13-15 December'25"
}) {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-8">
          <div className="w-32 h-32 flex-shrink-0">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                <span className="text-purple-600 font-bold text-sm">UPCON</span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-4 mb-2">
              <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-white rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">IEEE</span>
                </div>
              </div>
              <h1 className="font-bold text-4xl md:text-6xl text-blue-900" data-testid="text-header-title">
                IEEE
              </h1>
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-blue-900 mb-2" data-testid="text-header-conference">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-blue-600 font-semibold" data-testid="text-header-dates">
              {dates}
            </p>
          </div>

          <div className="w-32 h-32 flex-shrink-0">
            <div className="w-full h-full rounded-full border-4 border-purple-900 bg-white flex items-center justify-center p-2">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto border-2 border-purple-900 rounded-full flex items-center justify-center">
                  <span className="text-purple-900 font-bold text-xs">IIT BHU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}