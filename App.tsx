
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

// --- Types ---

interface Game {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
  description: string;
}

// --- Data ---

const GAMES: Game[] = [
  {
    id: 'geometry-dash',
    title: 'Geometry Dash Original',
    thumbnail: 'https://picsum.photos/seed/gd1/600/400',
    url: 'https://unblocked-games.s3.amazonaws.com/geometry-dash.html',
    category: 'Rhythm',
    description: 'Jump and fly your way through danger in this rhythm-based action platformer!'
  },
  {
    id: 'geometry-dash-subzero',
    title: 'GD SubZero',
    thumbnail: 'https://picsum.photos/seed/gd2/600/400',
    url: 'https://unblocked-games.s3.amazonaws.com/geometry-dash.html',
    category: 'Rhythm',
    description: 'A chilly expansion for the legendary platformer.'
  },
  {
    id: 'geometry-dash-meltdown',
    title: 'GD Meltdown',
    thumbnail: 'https://picsum.photos/seed/gd3/600/400',
    url: 'https://unblocked-games.s3.amazonaws.com/geometry-dash.html',
    category: 'Rhythm',
    description: 'Prepare for a new Geometry Dash adventure filled with spikes and monsters!'
  },
  {
    id: 'geometry-dash-world',
    title: 'GD World',
    thumbnail: 'https://picsum.photos/seed/gd4/600/400',
    url: 'https://unblocked-games.s3.amazonaws.com/geometry-dash.html',
    category: 'Rhythm',
    description: 'New levels, new music, new monsters, new everything!'
  }
];

// --- Components ---

const AdBanner: React.FC = () => (
  <div className="w-full bg-gray-800 border border-gray-700 rounded-lg p-6 my-8 flex items-center justify-center min-h-[120px]">
    <span className="text-gray-500 font-bold tracking-widest uppercase">[ AD SPACE - SAFE MODE ]</span>
  </div>
);

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  
  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-black text-blue-500 tracking-tighter flex items-center gap-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded">GD</span>
          GEOMETRY DASH 2025
        </Link>
        
        <div className="flex items-center w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-64">
            <input 
              type="text" 
              placeholder="Search games..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="bg-gray-800 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-700 transition-colors">
            SEARCH
          </button>
          <button className="bg-blue-600 px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-500 transition-colors">
            LOGIN
          </button>
        </div>
      </div>
    </header>
  );
};

const GameCard: React.FC<{ game: Game }> = ({ game }) => (
  <Link 
    to={`/game/${game.id}`}
    className="group relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20"
  >
    <div className="aspect-video w-full overflow-hidden">
      <img 
        src={game.thumbnail} 
        alt={game.title}
        className="w-full h-full object-cover transition-transform group-hover:scale-110"
      />
    </div>
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{game.category}</span>
        <span className="text-[10px] text-gray-500">v2025.1</span>
      </div>
      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{game.title}</h3>
      <p className="text-gray-400 text-xs mt-2 line-clamp-2">{game.description}</p>
    </div>
    <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
  </Link>
);

const HomeView: React.FC = () => (
  <main className="max-w-7xl mx-auto px-6 py-8">
    <div className="mb-12">
      <h1 className="text-4xl md:text-5xl font-black mb-4">Geometry Dash Unblocked</h1>
      <p className="text-gray-400 max-w-2xl">
        Experience the ultimate rhythm platformer directly in your browser. Fully optimized for Chromebooks in 2025. No downloads, no lag, just pure gameplay.
      </p>
    </div>

    <AdBanner />

    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4">POPULAR NOW</h2>
        <div className="flex gap-2 text-xs font-bold uppercase tracking-widest">
          <button className="text-blue-500">Featured</button>
          <span className="text-gray-700">|</span>
          <button className="text-gray-500 hover:text-white">Newest</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>

    <div className="mt-16 bg-blue-900/20 border border-blue-500/30 p-8 rounded-2xl">
      <h2 className="text-2xl font-black mb-4">Why Play Here?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-blue-400 mb-2">UNBLOCKED 2025</h4>
          <p className="text-sm text-gray-400 text-pretty">Specifically hosted on static AWS S3 buckets to bypass legacy web filters in 2025.</p>
        </div>
        <div>
          <h4 className="font-bold text-blue-400 mb-2">CHROMEBOOK READY</h4>
          <p className="text-sm text-gray-400 text-pretty">Lightweight architecture ensures 60FPS even on low-spec school devices.</p>
        </div>
        <div>
          <h4 className="font-bold text-blue-400 mb-2">ZERO INSTALL</h4>
          <p className="text-sm text-gray-400 text-pretty">No local storage or extension required. Play directly in the sandbox.</p>
        </div>
      </div>
    </div>
  </main>
);

const GamePlayerView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const game = GAMES.find(g => g.id === id);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh]">
        <h2 className="text-4xl font-bold mb-4">GAME NOT FOUND</h2>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 px-6 py-2 rounded-full font-bold"
        >
          GO BACK
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-black min-h-screen flex flex-col">
      <div className="bg-gray-900 p-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/')}
            className="text-sm font-bold bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded transition-colors"
          >
            &larr; BACK
          </button>
          <h1 className="text-lg font-bold truncate">{game.title}</h1>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider">FULLSCREEN</button>
          <button className="bg-gray-800 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider">REPORT</button>
        </div>
      </div>
      
      <div className="flex-1 relative bg-black">
        <iframe 
          src={game.url}
          className="w-full h-full border-none"
          title={game.title}
          allowFullScreen
          allow="autoplay; encrypted-media"
        />
      </div>

      <div className="bg-gray-900 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black">{game.title}</h2>
            <div className="bg-blue-600 px-3 py-1 rounded-md font-bold text-sm">RATING: 4.9/5</div>
          </div>
          <p className="text-gray-400 leading-relaxed mb-6">{game.description}</p>
          <div className="flex flex-wrap gap-2">
            {['UNBLOCKED', 'RHYTHM', 'CHROMEBOOK', 'ARCADE', '2025'].map(tag => (
              <span key={tag} className="bg-gray-800 px-3 py-1 rounded text-[10px] font-bold text-gray-500">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-gray-950">
         <AdBanner />
      </div>
    </div>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6 mt-20">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-black text-blue-500 mb-4">GEOMETRY DASH UNBLOCKED</h3>
          <p className="text-gray-500 text-sm max-w-md">
            The #1 source for unblocked rhythm games on the web. We use decentralized hosting to ensure you can always play your favorite platformers without interruption.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">QUICK LINKS</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><button className="hover:text-blue-500">Top Rated</button></li>
            <li><button className="hover:text-blue-500">Categories</button></li>
            <li><button className="hover:text-blue-500">Feedback</button></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">LEGAL</h4>
          <ul className="text-gray-500 text-sm space-y-2">
            <li><button className="hover:text-blue-500">Privacy Policy</button></li>
            <li><button className="hover:text-blue-500">Terms of Use</button></li>
            <li><button className="hover:text-blue-500">DMCA</button></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-bold uppercase tracking-widest">
        <span>&copy; 2025 GD PORTAL PRO. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-4">
          <button>TWITTER</button>
          <button>DISCORD</button>
          <button>YOUTUBE</button>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main Application ---

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/game/:id" element={<GamePlayerView />} />
          <Route path="*" element={<HomeView />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
