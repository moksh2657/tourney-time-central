
import { Card } from "@/components/ui/card";
import { 
  BasketballIcon, 
  SoccerBallIcon, 
  VolleyballIcon, 
  TennisBallIcon 
} from "./SportIcons";

const categories = [
  {
    name: "Basketball",
    icon: BasketballIcon,
    tournaments: 24,
    color: "bg-orange-100 text-orange-600"
  },
  {
    name: "Soccer",
    icon: SoccerBallIcon,
    tournaments: 36,
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Volleyball",
    icon: VolleyballIcon,
    tournaments: 18,
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Tennis",
    icon: TennisBallIcon,
    tournaments: 15,
    color: "bg-yellow-100 text-yellow-600"
  },
];

const SportsCategories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-sport-blue mb-3">Browse by Sport</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find tournaments by your favorite sport and discover competitions near you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.name}
              className="transition-all hover:shadow-md cursor-pointer relative overflow-hidden group"
            >
              <div className="p-6 flex items-center">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{category.name}</h3>
                  <p className="text-gray-500">{category.tournaments} tournaments</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-sport-blue bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold">View Tournaments</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsCategories;
