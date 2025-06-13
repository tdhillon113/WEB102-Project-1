import { useState } from 'react'
import './App.css'


/* 

- The app has a cohesive, unique theme for events or resources relevant
   to a specific community
- Header/title describing the theme is displayed
- At least 10 unique events or resources are displayed in a responsive card format
- There are at least 10 cards displayed
- The cards should be displayed in an organized format (ex. a grid, or in one line)
- Each card should include some information about the event or resource 

*/

/*
NOTES:
- 1rem equals the font size of the html element,
   which for most browsers has a default value of 16px
- root element in css 
- consistency

*/


function App() {
  const [count, setCount] = useState(0);

  const topSongs = [
    { id: 1, artist: "Lady Gaga", song: "Alejandro", image: "https://www.billboard.com/wp-content/uploads/media/Lady-Gaga-The-Fame-Monster-cover-billboard-1240.jpg?w=1024" },
    { id: 2, artist: "Sade", song: "Is it a Crime", image: "https://rustandwax.com/cdn/shop/products/bestofsade.jpg?v=1635530580" },
    { id: 3, artist: "Aalyiah", song: "At Your Best, you are Love", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_glk8CrpLQUYsSrZ8OfZEgmnVygG0wC-yPQ&s" },
    { id: 4, artist: "Ellie Goulding", song: "Lights", image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Ellie_Goulding_-_Lights_%28album%29.png" },
    { id: 5, artist: "Doja Cat", song: "Alone", image: "https://i.scdn.co/image/ab67616d0000b273be841ba4bc24340152e3a79a" },
    { id: 6, artist: "Gorillaz", song: "Andromeda", image: "https://upload.wikimedia.org/wikipedia/en/d/df/Gorillaz_Demon_Days.PNG" },
    { id: 7, artist: "Loathe", song: "Is it Really You?", image: "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/I_Let_It_in_and_It_Took_Everything.jpg/250px-I_Let_It_in_and_It_Took_Everything.jpg" },
    { id: 8, artist: "The Cure", song: "Lovesong", image: "https://upload.wikimedia.org/wikipedia/en/b/b8/CureDisintegration.jpg" },
    { id: 9, artist: "Tatsuro Yamashita", song: "Someday", image: "https://upload.wikimedia.org/wikipedia/en/0/02/Rideontime_tatsyamashita.jpg" },
    { id: 10, artist: "Deftones", song: "Tempest", image: "https://images.squarespace-cdn.com/content/v1/5147d98fe4b0e61bb0ab60ec/1363848121006-65U5TZTPJ8Y8U7KGEVIH/Deftones+KNY+Cover+Art+300.jpg?format=1500w" }
  ];

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Top 10 Songs</h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        A list of my favorite songs throughout my years of living
      </p>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <button onClick={() => setCount(count + 1)}> For Fun: {count}</button>
      </div>

      <div className="container-again">
        {topSongs.map((song, index) => (
          <a
            key={song.id}
            className="card"
            href={`https://www.youtube.com/results?search_query=${encodeURIComponent(song.artist + ' ' + song.song)}`}
           
          >
            <div style={{ textAlign: 'center' }}>
              <span className="card-rank">#{index + 1}</span>
            </div>

            <div className="card-image-container">
              <img src={song.image} alt={`${song.song} by ${song.artist}`} />
            </div>

            <div style={{ textAlign: 'center' }}>
              <div className="card-title">{song.song}</div>
              <div className="card-artist">{song.artist}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;

