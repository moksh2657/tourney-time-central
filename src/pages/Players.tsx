
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Medal, Trophy } from "lucide-react";

// Sample player data
const allPlayers = [
  {
    id: "1",
    name: "Michael Johnson",
    sports: ["Basketball", "Tennis"],
    location: "New York, NY",
    tournamentCount: 12,
    winCount: 5,
    bio: "Professional basketball player with 5 years of experience in regional tournaments.",
    avatar: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Sarah Williams",
    sports: ["Soccer", "Volleyball"],
    location: "Los Angeles, CA",
    tournamentCount: 8,
    winCount: 3,
    bio: "College athlete specializing in soccer and volleyball. Team captain for 2 years.",
    avatar: "/placeholder.svg"
  },
  {
    id: "3",
    name: "David Chen",
    sports: ["Tennis", "Basketball"],
    location: "Chicago, IL",
    tournamentCount: 15,
    winCount: 7,
    bio: "Tennis instructor and competitive player. Ranked #3 in regional standings.",
    avatar: "/placeholder.svg"
  },
  {
    id: "4",
    name: "Jessica Rodriguez",
    sports: ["Volleyball", "Soccer"],
    location: "Miami, FL",
    tournamentCount: 10,
    winCount: 4,
    bio: "Former college volleyball player now coaching youth teams and competing semi-professionally.",
    avatar: "/placeholder.svg"
  },
  {
    id: "5",
    name: "Marcus Lee",
    sports: ["Basketball"],
    location: "Houston, TX",
    tournamentCount: 18,
    winCount: 9,
    bio: "Basketball enthusiast with a passion for street ball and tournament play.",
    avatar: "/placeholder.svg"
  },
  {
    id: "6",
    name: "Emily Taylor",
    sports: ["Tennis"],
    location: "Seattle, WA",
    tournamentCount: 14,
    winCount: 6,
    bio: "Tennis player specializing in singles matches. Regional semifinalist for 3 consecutive years.",
    avatar: "/placeholder.svg"
  },
  {
    id: "7",
    name: "James Wilson",
    sports: ["Soccer"],
    location: "Portland, OR",
    tournamentCount: 9,
    winCount: 2,
    bio: "Midfielder with excellent passing skills. Plays in multiple local leagues.",
    avatar: "/placeholder.svg"
  },
  {
    id: "8",
    name: "Sophia Garcia",
    sports: ["Volleyball"],
    location: "San Diego, CA",
    tournamentCount: 11,
    winCount: 4,
    bio: "Beach volleyball specialist with experience in national tournaments.",
    avatar: "/placeholder.svg"
  }
];

const Players = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sportFilter, setSportFilter] = useState("all");
  const [filteredPlayers, setFilteredPlayers] = useState(allPlayers);

  const handleFilter = () => {
    const filtered = allPlayers.filter(player => {
      const nameMatch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
      const sportMatch = sportFilter === "all" || player.sports.includes(sportFilter);
      return nameMatch && sportMatch;
    });
    
    setFilteredPlayers(filtered);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSportFilter("all");
    setFilteredPlayers(allPlayers);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-sport-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Find Players</h1>
            <p className="max-w-2xl mx-auto">
              Connect with players across various sports. 
              Find competitors, teammates, or friends with similar interests.
            </p>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="bg-gray-50 border-b py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="w-full md:w-1/2">
                <label className="text-sm font-medium mb-1 block">Search by Name</label>
                <Input
                  placeholder="Search players..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/4">
                <label className="text-sm font-medium mb-1 block">Filter by Sport</label>
                <Select value={sportFilter} onValueChange={setSportFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Sports" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sports</SelectItem>
                    <SelectItem value="Basketball">Basketball</SelectItem>
                    <SelectItem value="Soccer">Soccer</SelectItem>
                    <SelectItem value="Tennis">Tennis</SelectItem>
                    <SelectItem value="Volleyball">Volleyball</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={handleFilter} 
                  className="bg-sport-blue hover:bg-sport-blue/90"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
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
        
        {/* Players Grid */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">
            {filteredPlayers.length} {filteredPlayers.length === 1 ? 'Player' : 'Players'} Found
          </h2>
          
          {filteredPlayers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlayers.map((player) => (
                <Card key={player.id} className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-16 w-16 mr-4">
                        <AvatarImage src={player.avatar} alt={player.name} />
                        <AvatarFallback className="bg-sport-blue text-white">
                          {player.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-bold">{player.name}</h3>
                        <p className="text-sm text-gray-500">{player.location}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{player.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {player.sports.map(sport => (
                        <span 
                          key={sport} 
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {sport}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600 border-t pt-4">
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 mr-1 text-sport-orange" />
                        <span>{player.tournamentCount} tournaments</span>
                      </div>
                      <div className="flex items-center">
                        <Medal className="h-4 w-4 mr-1 text-sport-orange" />
                        <span>{player.winCount} wins</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No players found matching your criteria.</p>
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

export default Players;
