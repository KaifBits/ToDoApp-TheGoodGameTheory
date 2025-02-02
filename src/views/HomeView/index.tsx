import React from 'react';
import searchicon from '../../assets/searchicon.png';
import image from '../../assets/image.png';
import image1 from '../../assets/image1.png';
import lobby from '../../assets/lobby.png';
import casinogame from '../../assets/casinogame.png';
import livecasino from '../../assets/livecasino.png';
import zilli from '../../assets/zilli.png';
import topsolid from '../../assets/topsolid.png';
import baseball from '../../assets/baseball.png';
import vegas from "../../assets/vegas.png";
import buffalo from "../../assets/buffalo.png";
import fat from "../../assets/fat.png";
import hammer from "../../assets/hammer.png";
import slot from "../../assets/slot.png";
import home from '../../assets/home.png';
import one from '../../assets/one.png';
import two from '../../assets/two.png';
import three from '../../assets/three.png';
import forr from '../../assets/for.png';
import five from '../../assets/five.png';
import six from '../../assets/six.png';
import logo from '../../assets/logo.png';
import background from '../../assets/background.png';
import { Link } from 'react-router-dom';


// Define the structure of the props using type
type Game = {
  name: string;
  image: string;
};

const games: Game[] = [
  { name: "Battle Of Hammer", image: vegas  },
  { name: "Fat Drac", image: buffalo },
  { name: "Buffalo 50", image: fat },
  { name: "Slot Therapy", image: hammer },
  { name: "Old Vegas Slots", image: slot },
  { name: "Battle Of Hammer", image: vegas  },
  { name: "Fat Drac", image: buffalo },
  { name: "Buffalo 50", image: fat },
  { name: "Slot Therapy", image: hammer },
  { name: "Old Vegas Slots", image: slot },
  { name: "Battle Of Hammer", image: vegas  },
  { name: "Fat Drac", image: buffalo },
  { name: "Buffalo 50", image: fat },
  { name: "Slot Therapy", image: hammer },
  { name: "Old Vegas Slots", image: slot },
];

const HomeView: React.FC = () => {
  return (
    <div className='flex bg-black'>
      <div className="h-screen w-64 backdrop-blur-sm text-white flex flex-col justify-center items-center  shadow-lg ">
      {/* Top Section */}
      <img
      src={logo}
      alt="Home Icon"
      className="w-48 h-44 object-contain"
    />
     

      {/* Navigation Links */}
      <nav className="flex flex-col mt-5 space-y-1 ">
      
      <Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md ">
    <img
      src={home}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={one}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={two}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={three}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={forr}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={five}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

<Link
  to="/home"
  className="flex items-center space-x-4 hover:bg-purple-700 rounded-lg p-3"
>
  <div className=" bg-transparent rounded-lg p-2 shadow-md">
    <img
      src={six}
      alt="Home Icon"
      className="w-10 h-10 object-contain"
    />
  </div>
  <span>Home</span>
</Link>

      </nav>

      {/* Bottom Section */}
      <div className="flex flex-col items-center mb-6">
        <p className="text-sm">© 2025 The Fortune App</p>
      </div>
    </div>
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
      <div className="grid grid-cols-2 gap-4 mt-4 p-10 ">
        
        <div className=" rounded-lg relative flex justify-center items-center text-lg font-bold  w-full">
        <div className="p-6 rounded-lg absolute flex justify-start items-start lg:text-4xl md:text-2xl font-bold text-purple-600 w-full h-full ">
          Refer Friends<br></br> & Earn Money
        </div>
         <img src={image} className='h-full w-full object-fill'/>
        </div>
        <div className=" rounded-lg relative flex justify-center items-center text-lg font-bold  w-full">
        <div className="p-6 rounded-lg absolute flex justify-start items-start lg:text-4xl md:text-2xl font-bold w-full h-full ">
        Join Us!<br></br> & On Telegram
        </div>
         <img src={image1} className='h-full w-full object-fill'/>
        </div>
        
      </div>

      {/* Categories */}
      <div className="flex space-x-4 mt-6 text-sm font-semibold">
        <div className='flex justify-between space-x-2 bg-gray-800 px-4 py-2 rounded-lg'>
          <img src={lobby}/>
        <span>Lobby</span>
        </div>
        <div className='flex justify-between space-x-2 bg-gray-800 px-4 py-2 rounded-lg'>
          <img src={casinogame}/>
        <span>Lobby</span>
        </div>
        <div className='flex justify-between space-x-2 bg-gray-800 px-4 py-2 rounded-lg'>
          <img src={livecasino}/>
        <span>Lobby</span>
        </div>
        <div className='flex justify-between space-x-2 bg-gray-800 px-4 py-2 rounded-lg'>
          <img src={zilli}/>
        <span>Lobby</span>
        </div>
        <div className='flex justify-between space-x-2 bg-gray-800 px-4 py-2 rounded-lg'>
          <img src={topsolid}/>
        <span>Lobby</span>
        </div>
        <div className='flex justify-between space-x-2 bg-gray-800 px-4 py-2 rounded-lg'>
          <img src={baseball}/>
        <span>Lobby</span>
        </div>
      </div>


      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        {games.map((game, index) => (
          <div key={index} className="bg-black p-4 rounded-lg text-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
            <img
              src={game.image}
              alt={game.name}
              className="rounded-lg w-full h-full object-fill"
            />
            <p className="mt-2 text-sm font-bold">{game.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default HomeView;

