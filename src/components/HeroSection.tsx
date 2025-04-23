
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-sport-blue text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Manage Sports Tournaments Like a Champion
            </h1>
            <p className="text-xl mb-8 text-gray-300 max-w-lg">
              Create, manage, and participate in tournaments across multiple sports. 
              Connect with players and teams to build your sports community.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/tournaments">
                <Button className="bg-sport-orange hover:bg-sport-orange/90 text-white px-6 py-6">
                  <Trophy className="mr-2 h-5 w-5" />
                  View Tournaments
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" className="bg-transparent hover:bg-white hover:text-sport-blue text-white border-white px-6 py-6">
                  Create Tournament
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-sport-orange/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-lg shadow-xl overflow-hidden relative transform rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Sports tournament" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-lg shadow-xl overflow-hidden absolute -bottom-6 -right-6 transform -rotate-6">
                <img 
                  src="https://images.unsplash.com/photo-1543633550-f3bf676f0ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                  alt="Sports tournament trophy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
