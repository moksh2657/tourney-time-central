
import { useState } from "react";
import TournamentCard, { TournamentProps } from "./TournamentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample tournament data
const sampleTournaments: TournamentProps[] = [
  {
    id: "1",
    name: "Summer Basketball Championship",
    sport: "Basketball",
    location: "Phoenix, AZ",
    startDate: "2025-06-15",
    endDate: "2025-06-30",
    participantCount: 24,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: "2",
    name: "Regional Soccer League",
    sport: "Soccer",
    location: "Miami, FL",
    startDate: "2025-05-01",
    endDate: "2025-08-15",
    participantCount: 16,
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1293&q=80"
  },
  {
    id: "3",
    name: "Tennis Open",
    sport: "Tennis",
    location: "San Diego, CA",
    startDate: "2025-07-10",
    endDate: "2025-07-17",
    participantCount: 32,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: "4",
    name: "State Volleyball Challenge",
    sport: "Volleyball",
    location: "Chicago, IL",
    startDate: "2025-05-20",
    endDate: "2025-05-22",
    participantCount: 12,
    status: "completed",
    image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1307&q=80"
  }
];

const FeaturedTournaments = () => {
  const [displayCount, setDisplayCount] = useState(3);
  const visibleTournaments = sampleTournaments.slice(0, displayCount);
  
  const handleLoadMore = () => {
    setDisplayCount(Math.min(displayCount + 3, sampleTournaments.length));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sport-blue mb-3">Featured Tournaments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover upcoming and ongoing tournaments from various sports around the country.
            Join, compete, and win!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          {displayCount < sampleTournaments.length ? (
            <Button 
              variant="outline" 
              onClick={handleLoadMore}
              className="border-sport-blue text-sport-blue hover:bg-sport-blue hover:text-white"
            >
              Load More
            </Button>
          ) : (
            <Link to="/tournaments">
              <Button className="bg-sport-blue hover:bg-sport-blue/90">View All Tournaments</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTournaments;
