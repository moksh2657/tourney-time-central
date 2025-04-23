
import { Trophy, Users, Calendar, Flag } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface TournamentProps {
  id: string;
  name: string;
  sport: string;
  location: string;
  startDate: string;
  endDate: string;
  participantCount: number;
  status: "upcoming" | "ongoing" | "completed";
  image: string;
}

const StatusColorMap = {
  upcoming: "bg-blue-100 text-blue-800",
  ongoing: "bg-green-100 text-green-800",
  completed: "bg-gray-100 text-gray-800"
};

const TournamentCard = ({ tournament }: { tournament: TournamentProps }) => {
  const { id, name, sport, location, startDate, endDate, participantCount, status, image } = tournament;

  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });

  const formattedEndDate = new Date(endDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <Badge 
          variant="secondary" 
          className={`absolute top-3 right-3 ${StatusColorMap[status]}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-sport-orange mb-1">{sport}</p>
            <h3 className="text-xl font-bold tracking-tight">{name}</h3>
            <p className="text-gray-500 text-sm mt-1">{location}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 flex-grow">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2 text-sport-orange" />
          <span className="text-sm">
            {formattedStartDate} - {formattedEndDate}
          </span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-2 text-sport-orange" />
          <span className="text-sm">{participantCount} Participants</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/tournaments/${id}`} className="w-full">
          <Button className="w-full bg-sport-blue hover:bg-sport-blue/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TournamentCard;
