
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample player data
const samplePlayers = [
  {
    id: "1",
    name: "Michael Johnson",
    sports: ["Basketball", "Tennis"],
    location: "New York, NY",
    tournamentCount: 12,
    avatar: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Sarah Williams",
    sports: ["Soccer", "Volleyball"],
    location: "Los Angeles, CA",
    tournamentCount: 8,
    avatar: "/placeholder.svg"
  },
  {
    id: "3",
    name: "David Chen",
    sports: ["Tennis", "Basketball"],
    location: "Chicago, IL",
    tournamentCount: 15,
    avatar: "/placeholder.svg"
  },
];

const PlayerSearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("all");
  const [searchResults, setSearchResults] = useState<typeof samplePlayers>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  const handleSearch = () => {
    setHasSearched(true);
    const results = samplePlayers.filter(player => {
      const nameMatch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
      const sportMatch = selectedSport === "all" || player.sports.includes(selectedSport);
      return nameMatch && sportMatch;
    });
    setSearchResults(results);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sport-blue mb-3">Find Players</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search for players by name or sport to connect and compete with them in tournaments.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow">
                  <Input
                    placeholder="Search for players..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div className="w-full md:w-48">
                  <Select value={selectedSport} onValueChange={setSelectedSport}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Sport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sports</SelectItem>
                      <SelectItem value="Basketball">Basketball</SelectItem>
                      <SelectItem value="Soccer">Soccer</SelectItem>
                      <SelectItem value="Volleyball">Volleyball</SelectItem>
                      <SelectItem value="Tennis">Tennis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button 
                  onClick={handleSearch} 
                  className="h-12 bg-sport-blue hover:bg-sport-blue/90 px-6"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
              
              {hasSearched && (
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">
                    {searchResults.length} {searchResults.length === 1 ? 'Player' : 'Players'} Found
                  </h3>
                  
                  <div className="space-y-4">
                    {searchResults.map((player) => (
                      <div 
                        key={player.id}
                        className="p-4 border rounded-lg flex items-center hover:bg-gray-50 transition-colors"
                      >
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={player.avatar} alt={player.name} />
                          <AvatarFallback className="bg-sport-blue text-white">
                            {player.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <h4 className="font-medium">{player.name}</h4>
                          <p className="text-sm text-gray-500">{player.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex gap-2 mb-1 justify-end">
                            {player.sports.map(sport => (
                              <span 
                                key={sport} 
                                className="text-xs bg-gray-100 px-2 py-1 rounded"
                              >
                                {sport}
                              </span>
                            ))}
                          </div>
                          <p className="text-xs text-gray-500">{player.tournamentCount} tournaments</p>
                        </div>
                      </div>
                    ))}
                    
                    {searchResults.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <User className="mx-auto h-12 w-12 text-gray-300 mb-2" />
                        <p>No players found. Try a different search term or filter.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlayerSearchSection;
