
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TournamentCard, { TournamentProps } from "@/components/TournamentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

// Sample tournament data
const allTournaments: TournamentProps[] = [
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
  },
  {
    id: "5",
    name: "High School Basketball Tournament",
    sport: "Basketball",
    location: "Dallas, TX",
    startDate: "2025-06-01",
    endDate: "2025-06-10",
    participantCount: 20,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
  },
  {
    id: "6",
    name: "Youth Soccer Championship",
    sport: "Soccer",
    location: "Seattle, WA",
    startDate: "2025-07-25",
    endDate: "2025-07-30",
    participantCount: 24,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
  },
  {
    id: "7",
    name: "Beach Volleyball Series",
    sport: "Volleyball",
    location: "San Francisco, CA",
    startDate: "2025-05-15",
    endDate: "2025-05-18",
    participantCount: 16,
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1562552052-c72ceddf95ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  },
  {
    id: "8",
    name: "Amateur Tennis League",
    sport: "Tennis",
    location: "Boston, MA",
    startDate: "2025-08-05",
    endDate: "2025-08-12",
    participantCount: 28,
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=729&q=80"
  }
];

const Tournaments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sportFilter, setSportFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [filteredTournaments, setFilteredTournaments] = useState(allTournaments);

  const handleFilter = () => {
    const filtered = allTournaments.filter(tournament => {
      const nameMatch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase());
      const sportMatch = !sportFilter || tournament.sport === sportFilter;
      const statusMatch = !statusFilter || tournament.status === statusFilter;
      return nameMatch && sportMatch && statusMatch;
    });
    
    setFilteredTournaments(filtered);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSportFilter("");
    setStatusFilter("");
    setFilteredTournaments(allTournaments);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-sport-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Browse Tournaments</h1>
            <p className="max-w-2xl mx-auto">
              Discover upcoming, ongoing, and completed tournaments. 
              Filter by sport or status to find the perfect competition for you.
            </p>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="bg-gray-50 border-b py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="w-full md:w-1/3">
                <label className="text-sm font-medium mb-1 block">Search</label>
                <Input
                  placeholder="Search tournaments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/4">
                <label className="text-sm font-medium mb-1 block">Sport</label>
                <Select value={sportFilter} onValueChange={setSportFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Sports" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Sports</SelectItem>
                    <SelectItem value="Basketball">Basketball</SelectItem>
                    <SelectItem value="Soccer">Soccer</SelectItem>
                    <SelectItem value="Tennis">Tennis</SelectItem>
                    <SelectItem value="Volleyball">Volleyball</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-1/4">
                <label className="text-sm font-medium mb-1 block">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Statuses</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="ongoing">Ongoing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={handleFilter} 
                  className="bg-sport-blue hover:bg-sport-blue/90"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tournaments Grid */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">
            {filteredTournaments.length} {filteredTournaments.length === 1 ? 'Tournament' : 'Tournaments'} Found
          </h2>
          
          {filteredTournaments.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tournaments found matching your criteria.</p>
              <Button 
                onClick={handleReset} 
                variant="outline" 
                className="mt-4"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tournaments;
