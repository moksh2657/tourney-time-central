
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Clock, Filter, MapPin } from "lucide-react";

// Sample schedule data
const allMatches = [
  {
    id: "m1",
    team1: "Phoenix Heat",
    team2: "Scottsdale Scorchers",
    date: "2025-06-15",
    time: "10:00 AM",
    court: "Court 1",
    location: "Phoenix Sports Arena, Phoenix, AZ",
    tournament: {
      id: "1",
      name: "Summer Basketball Championship",
      sport: "Basketball",
    }
  },
  {
    id: "m2",
    team1: "Tucson Titans",
    team2: "Flagstaff Flyers",
    date: "2025-06-15",
    time: "12:00 PM",
    court: "Court 2",
    location: "Phoenix Sports Arena, Phoenix, AZ",
    tournament: {
      id: "1",
      name: "Summer Basketball Championship",
      sport: "Basketball",
    }
  },
  {
    id: "m3",
    team1: "Glendale Guards",
    team2: "Mesa Mavericks",
    date: "2025-06-15",
    time: "2:00 PM",
    court: "Court 1",
    location: "Phoenix Sports Arena, Phoenix, AZ",
    tournament: {
      id: "1",
      name: "Summer Basketball Championship",
      sport: "Basketball",
    }
  },
  {
    id: "m4",
    team1: "Miami Marlins",
    team2: "Tampa Tigers",
    date: "2025-05-10",
    time: "11:00 AM",
    court: "Field 1",
    location: "Miami Sports Complex, Miami, FL",
    tournament: {
      id: "2",
      name: "Regional Soccer League",
      sport: "Soccer",
    }
  },
  {
    id: "m5",
    team1: "Orlando Ospreys",
    team2: "Jacksonville Jaguars",
    date: "2025-05-10",
    time: "1:00 PM",
    court: "Field 2",
    location: "Miami Sports Complex, Miami, FL",
    tournament: {
      id: "2",
      name: "Regional Soccer League",
      sport: "Soccer",
    }
  },
  {
    id: "m6",
    team1: "San Diego Surfers",
    team2: "Los Angeles Lions",
    date: "2025-07-10",
    time: "9:00 AM",
    court: "Court 1",
    location: "San Diego Tennis Club, San Diego, CA",
    tournament: {
      id: "3",
      name: "Tennis Open",
      sport: "Tennis",
    }
  },
  {
    id: "m7",
    team1: "Chicago Wolves",
    team2: "Detroit Dragons",
    date: "2025-05-20",
    time: "4:00 PM",
    court: "Court A",
    location: "Chicago Sports Center, Chicago, IL",
    tournament: {
      id: "4",
      name: "State Volleyball Challenge",
      sport: "Volleyball",
    }
  },
];

const Schedule = () => {
  const [sportFilter, setSportFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [filteredMatches, setFilteredMatches] = useState(allMatches);
  
  // Get unique dates for filtering
  const uniqueDates = [...new Set(allMatches.map(match => match.date))].sort();
  
  const handleFilter = () => {
    let filtered = [...allMatches];
    
    if (sportFilter) {
      filtered = filtered.filter(match => match.tournament.sport === sportFilter);
    }
    
    if (dateFilter !== "all") {
      filtered = filtered.filter(match => match.date === dateFilter);
    }
    
    setFilteredMatches(filtered);
  };
  
  const handleReset = () => {
    setSportFilter("");
    setDateFilter("all");
    setFilteredMatches(allMatches);
  };

  // Group matches by date for display
  const groupedMatches = filteredMatches.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = [];
    }
    acc[match.date].push(match);
    return acc;
  }, {} as Record<string, typeof allMatches>);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-sport-blue text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Tournament Schedule</h1>
            <p className="max-w-2xl mx-auto">
              View upcoming matches across all tournaments. 
              Filter by sport or date to find the games you're interested in.
            </p>
          </div>
        </div>
        
        {/* Filter Section */}
        <div className="bg-gray-50 border-b py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="w-full md:w-1/4">
                <label className="text-sm font-medium mb-1 block">Filter by Sport</label>
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
                <label className="text-sm font-medium mb-1 block">Filter by Date</label>
                <Select value={dateFilter} onValueChange={setDateFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Dates" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Dates</SelectItem>
                    {uniqueDates.map(date => (
                      <SelectItem key={date} value={date}>
                        {new Date(date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </SelectItem>
                    ))}
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
        
        {/* Schedule Content */}
        <div className="container mx-auto px-4 py-12">
          {Object.keys(groupedMatches).length > 0 ? (
            Object.keys(groupedMatches)
              .sort()
              .map(date => (
                <div key={date} className="mb-10">
                  <div className="flex items-center mb-4">
                    <CalendarCheck className="h-6 w-6 mr-2 text-sport-blue" />
                    <h2 className="text-xl font-bold">
                      {new Date(date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {groupedMatches[date].map(match => (
                      <Card key={match.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <div className="md:col-span-1">
                              <Badge className="bg-sport-blue mb-2">
                                {match.tournament.sport}
                              </Badge>
                              <p className="text-sm text-gray-500">
                                {match.tournament.name}
                              </p>
                            </div>
                            
                            <div className="md:col-span-1">
                              <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                                <p className="font-medium">{match.team1}</p>
                                <p className="text-xs text-gray-500 my-1">VS</p>
                                <p className="font-medium">{match.team2}</p>
                              </div>
                            </div>
                            
                            <div className="text-gray-600 space-y-1 md:col-span-1">
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-sport-orange" />
                                <span>{match.time}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-sport-orange" />
                                <span className="text-sm">{match.court}</span>
                              </div>
                            </div>
                            
                            <div className="md:col-span-1 md:text-right">
                              <p className="text-sm text-gray-600 truncate" title={match.location}>
                                {match.location}
                              </p>
                              <Button
                                variant="outline" 
                                size="sm"
                                className="mt-2"
                                onClick={() => window.open(`/tournaments/${match.tournament.id}`, '_blank')}
                              >
                                Tournament Details
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No matches found matching your criteria.</p>
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

export default Schedule;
