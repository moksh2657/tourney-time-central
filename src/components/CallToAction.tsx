
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-sport-blue to-blue-700 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Create Your Tournament?</h2>
          <p className="text-lg text-blue-100">
            Join thousands of tournament organizers and players on our platform.
            Create, manage, and compete in tournaments with ease.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/signup">
              <Button className="w-full sm:w-auto bg-sport-orange hover:bg-sport-orange/90 text-white px-8 py-6 text-lg">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/tournaments">
              <Button variant="outline" className="w-full sm:w-auto bg-transparent hover:bg-white hover:text-sport-blue text-white border-white px-8 py-6 text-lg">
                Browse Tournaments
              </Button>
            </Link>
          </div>
          
          <p className="text-sm text-blue-200 pt-4">
            No credit card required. Free accounts available with premium options.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
