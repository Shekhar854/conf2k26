import { Button } from "../components/ui/button";


export default function ActionButtons({
  onFlyerClick = () => console.log('Flyer clicked'),
  onRegisterClick = () => console.log('Register clicked')
}) {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-12 text-lg no-default-hover-elevate no-default-active-elevate"
          onClick={onFlyerClick}
          data-testid="button-flyer"
        >
          Flyer for UPCON 2025
        </Button>
        
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-12 text-lg no-default-hover-elevate no-default-active-elevate"
          onClick={onRegisterClick}
          data-testid="button-register"
        >
          Register Now
        </Button>
      </div>
    </div>
  );
}