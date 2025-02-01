import React from 'react';
import searchicon from '../../assets/searchicon.png';
import image from '../../assets/image.png';
import image1 from '../../assets/image1.png';
import FormList from '../../components/custom/FormList';
import Form from '../../components/custom/Form';

// Define the structure of the props using type
type Game = {
  name: string;
  image: string;
};

const games: Game[] = [
  { name: "Battle Of Hammer", image: "/mnt/data/hmpg.png" },
  { name: "Fat Drac", image: "/mnt/data/hmpg.png" },
  { name: "Buffalo 50", image: "/mnt/data/hmpg.png" },
  { name: "Slot Therapy", image: "/mnt/data/hmpg.png" },
  { name: "Old Vegas Slots", image: "/mnt/data/hmpg.png" },
];

const HomeView: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-900 rounded-lg">
        <div className='flex justify-between'>
        <h1 className="text-2xl font-bold">Fortune Zone</h1>
        <img src={searchicon}/>
        </div>
        <div className="flex space-x-4 items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-lg bg-gray-800 text-white"
          />
          <div className="bg-green-500 px-4 py-2 rounded-lg text-black font-bold">Wallet</div>
        </div>
      </div>

      {/* Banners */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className=" rounded-lg flex justify-center items-center text-lg font-bold">
         <img src={image}/>
        </div>
        <div className=" rounded-lg flex justify-center items-center text-lg font-bold">
        <img src={image1}/> 
        </div>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 mt-6 text-sm font-semibold">
        <button className="bg-gray-800 px-4 py-2 rounded-lg">Lobby</button>
        <button className="bg-gray-800 px-4 py-2 rounded-lg">Casino Game</button>
        <button className="bg-gray-800 px-4 py-2 rounded-lg">Live Casino</button>
        <button className="bg-gray-800 px-4 py-2 rounded-lg">Zilli</button>
        <button className="bg-gray-800 px-4 py-2 rounded-lg">Top Played</button>
        <button className="bg-gray-800 px-4 py-2 rounded-lg">Sports Betting</button>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        {games.map((game, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
            <img
              src={game.image}
              alt={game.name}
              className="rounded-lg w-full h-32 object-cover"
            />
            <p className="mt-2 text-sm font-bold">{game.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeView;

