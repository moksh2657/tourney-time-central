
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarCheck, MapPin, Calendar, Users, Trophy, Flag, Medal } from "lucide-react";
import { toast } from "sonner";

// Sample tournament data
const tournamentsData = {
  "1": {
    id: "1",
    name: "Summer Basketball Championship",
    sport: "Basketball",
    location: "Phoenix Sports Arena, Phoenix, AZ",
    startDate: "2025-06-15",
    endDate: "2025-06-30",
    participantCount: 24,
    status: "upcoming",
    registrationDeadline: "2025-06-01",
    organizer: "Phoenix Sports Association",
    fee: "$250 per team",
    prize: "$5000",
    description: "The Summer Basketball Championship is a premier basketball tournament for amateur teams across the state. The tournament will feature competitive matches, professional refereeing, and excellent facilities.",
    rules: [
      "Teams must have 5-10 players",
      "Players must be at least 18 years old",
      "Each team plays a minimum of 3 games",
      "Single elimination playoffs",
      "NBA rules apply with minor modifications",
      "Each game consists of four 10-minute quarters",
      "Two timeouts per half"
    ],
    matches: [
      {
        id: "m1",
        team1: "Phoenix Heat",
        team2: "Scottsdale Scorchers",
        date: "2025-06-15",
        time: "10:00 AM",
        court: "Court 1"
      },
      {
        id: "m2",
        team1: "Tucson Titans",
        team2: "Flagstaff Flyers",
        date: "2025-06-15",
        time: "12:00 PM",
        court: "Court 2"
      },
      {
        id: "m3",
        team1: "Glendale Guards",
        team2: "Mesa Mavericks",
        date: "2025-06-15",
        time: "2:00 PM",
        court: "Court 1"
      }
    ],
    participants: [
      {
        id: "p1",
        name: "Phoenix Heat",
        players: 8,
        captain: "Michael Johnson"
      },
      {
        id: "p2",
        name: "Scottsdale Scorchers",
        players: 7,
        captain: "David Chen"
      },
      {
        id: "p3",
        name: "Tucson Titans",
        players: 9,
        captain: "Marcus Lee"
      },
      {
        id: "p4",
        name: "Flagstaff Flyers",
        players: 8,
        captain: "James Wilson"
      },
      {
        id: "p5",
        name: "Glendale Guards",
        players: 6,
        captain: "Robert Taylor"
      },
      {
        id: "p6",
        name: "Mesa Mavericks",
        players: 7,
        captain: "Thomas Brown"
      }
    ],
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  }
};

const StatusColorMap = {
  upcoming: "bg-blue-100 text-blue-800",
  ongoing: "bg-green-100 text-green-800",
  completed: "bg-gray-100 text-gray-800"
};

const TournamentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const tournament = id ? tournamentsData[id as keyof typeof tournamentsData] : null;
  
  if (!tournament) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Tournament Not Found</h2>
            <p className="text-gray-600">The tournament you're looking for doesn't exist or has been removed.</p>
            <Button className="mt-4 bg-sport-blue" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleRegister = () => {
    toast.success("Registration started! Please sign in to complete.");
  };

  const formattedStartDate = new Date(tournament.startDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  
  const formattedEndDate = new Date(tournament.endDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const formattedDeadline = new Date(tournament.registrationDeadline).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Banner */}
        <div className="relative h-64 md:h-80 bg-sport-blue overflow-hidden">
          <img 
            src={tournament.image} 
            alt={tournament.name} 
            className="absolute w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sport-blue opacity-70"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center text-white p-4">
            <Badge 
              variant="secondary" 
              className={`mb-3 ${StatusColorMap[tournament.status as keyof typeof StatusColorMap]}`}
            >
              {tournament.status.charAt(0).toUpperCase() + tournament.status.slice(1)}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{tournament.name}</h1>
            <div className="flex items-center text-lg">
              <span>{tournament.sport}</span>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{tournament.location.split(',')[0]}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="schedule">Schedule</TabsTrigger>
                  <TabsTrigger value="participants">Participants</TabsTrigger>
                  <TabsTrigger value="rules">Rules</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">About the Tournament</h2>
                      <p className="text-gray-700 mb-6">{tournament.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Details</h3>
                          <div className="flex items-start">
                            <Calendar className="h-5 w-5 text-sport-orange mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Tournament Dates</p>
                              <p className="text-gray-600">{formattedStartDate} - {formattedEndDate}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <MapPin className="h-5 w-5 text-sport-orange mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Location</p>
                              <p className="text-gray-600">{tournament.location}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Users className="h-5 w-5 text-sport-orange mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Participants</p>
                              <p className="text-gray-600">{tournament.participantCount} teams</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Registration</h3>
                          <div className="flex items-start">
                            <CalendarCheck className="h-5 w-5 text-sport-orange mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Registration Deadline</p>
                              <p className="text-gray-600">{formattedDeadline}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Trophy className="h-5 w-5 text-sport-orange mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Organizer</p>
                              <p className="text-gray-600">{tournament.organizer}</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <Medal className="h-5 w-5 text-sport-orange mr-3 mt-0.5" />
                            <div>
                              <p className="font-medium">Prize</p>
                              <p className="text-gray-600">{tournament.prize}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="schedule">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Tournament Schedule</h2>
                      <div className="space-y-4">
                        {tournament.matches.map(match => (
                          <div key={match.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex justify-between items-center">
                              <div className="flex-grow">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 text-sport-orange mr-2" />
                                    <span className="text-sm text-gray-600">
                                      {new Date(match.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric"
                                      })} - {match.time}
                                    </span>
                                  </div>
                                  <div className="text-sm text-gray-600">{match.court}</div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <h4 className="font-medium">{match.team1}</h4>
                                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">VS</span>
                                  <h4 className="font-medium">{match.team2}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="participants">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Participating Teams</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tournament.participants.map(team => (
                          <div key={team.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center">
                              <Avatar className="h-12 w-12 mr-4">
                                <AvatarImage src="/placeholder.svg" alt={team.name} />
                                <AvatarFallback className="bg-sport-blue text-white">
                                  {team.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">{team.name}</h4>
                                <div className="flex items-center text-sm text-gray-600">
                                  <Users className="h-3 w-3 mr-1" />
                                  <span>{team.players} players</span>
                                  <span className="mx-2">•</span>
                                  <span>Captain: {team.captain}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="rules">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">Tournament Rules</h2>
                      <ul className="space-y-2 list-disc pl-5">
                        {tournament.rules.map((rule, index) => (
                          <li key={index} className="text-gray-700">{rule}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar */}
            <div>
              <Card className="sticky top-4">
                <CardContent className="p-6 space-y-6">
                  {tournament.status === "upcoming" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Registration</h3>
                      <div className="flex items-start">
                        <Flag className="h-5 w-5 text-sport-orange mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Entry Fee</p>
                          <p className="text-gray-600">{tournament.fee}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CalendarCheck className="h-5 w-5 text-sport-orange mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Registration Deadline</p>
                          <p className="text-gray-600">{formattedDeadline}</p>
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-sport-orange hover:bg-sport-orange/90"
                        onClick={handleRegister}
                      >
                        Register Now
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Registration requires an account. Teams must meet all eligibility requirements.
                      </p>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact</h3>
                    <p className="text-gray-600">
                      For questions about this tournament, please contact the organizer:
                    </p>
                    <div className="text-gray-600">
                      <p className="font-medium">{tournament.organizer}</p>
                      <p>tournamentinfo@example.com</p>
                      <p>(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button variant="outline" className="w-full" onClick={() => window.history.back()}>
                      Back to Tournaments
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TournamentDetails;
