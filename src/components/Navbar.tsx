
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CalendarCheck, Flag, LogIn, Menu, Trophy, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For demo purposes

  return (
    <nav className="bg-sport-blue text-white py-4 px-4 md:px-8 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <Trophy className="h-6 w-6 text-sport-orange mr-2" />
            <span className="text-xl font-bold">Tourney Time Central</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/tournaments" className="hover:text-sport-orange transition-colors">
            Tournaments
          </Link>
          <Link to="/players" className="hover:text-sport-orange transition-colors">
            Players
          </Link>
          <Link to="/schedule" className="hover:text-sport-orange transition-colors">
            Schedule
          </Link>
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full bg-sport-orange text-white">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link to="/profile" className="flex items-center w-full">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/my-tournaments" className="flex items-center w-full">
                    <Trophy className="mr-2 h-4 w-4" />
                    <span>My Tournaments</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="space-x-2">
              <Button 
                onClick={() => setIsLoggedIn(true)} 
                variant="ghost" 
                className="text-white hover:bg-sport-orange hover:text-white transition-colors"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => setIsLoggedIn(true)} 
                className="bg-sport-orange text-white hover:bg-sport-orange/90"
              >
                Sign Up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden pt-4 pb-2 px-4 bg-sport-blue">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/tournaments" 
              className="py-2 hover:text-sport-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                Tournaments
              </div>
            </Link>
            <Link 
              to="/players" 
              className="py-2 hover:text-sport-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Players
              </div>
            </Link>
            <Link 
              to="/schedule" 
              className="py-2 hover:text-sport-orange"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                <CalendarCheck className="h-5 w-5 mr-2" />
                Schedule
              </div>
            </Link>
            {isLoggedIn ? (
              <>
                <hr className="border-gray-600" />
                <Link 
                  to="/profile" 
                  className="py-2 hover:text-sport-orange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Profile
                  </div>
                </Link>
                <Link 
                  to="/my-tournaments" 
                  className="py-2 hover:text-sport-orange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    My Tournaments
                  </div>
                </Link>
                <button 
                  className="text-left py-2 hover:text-sport-orange"
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsMenuOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    <LogIn className="h-5 w-5 mr-2" />
                    Sign Out
                  </div>
                </button>
              </>
            ) : (
              <>
                <hr className="border-gray-600" />
                <Button 
                  onClick={() => {
                    setIsLoggedIn(true);
                    setIsMenuOpen(false);
                  }}
                  className="bg-sport-orange text-white hover:bg-sport-orange/90 w-full"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => {
                    setIsLoggedIn(true);
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-sport-blue w-full"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
