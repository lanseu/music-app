import "./App.css";
import { useState } from "react";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const tempMusicData = [
  {
    id: 1,
    title: "Pantropiko",
    artist: "BINI",
    genre: "PPop",
    userRating: 5,
  },
  {
    id: 2,
    title: "Lagi",
    artist: "BINI",
    genre: "PPop",
    userRating: 5,
  },
  {
    id: 3,
    title: "Selos",
    artist: "Shaira",
    genre: "Pop",
    userRating: 3,
  },
  {
    id: 4,
    title: "Isa Pang Araw",
    artist: "BINI",
    genre: "PPop",
    userRating: 5,
  },
  {
    id: 5,
    title: "Bini Bini",
    artist: "BINI",
    genre: "PPop",
    userRating: 1,
  },
  {
    id: 6,
    title: "Para Sa Tabi",
    artist: "BINI",
    genre: "PPop",
    userRating: 3,
  },
  {
    id: 7,
    title: "Nasa Puso",
    artist: "Shaira",
    genre: "Pop",
    userRating: 4,
  },
  {
    id: 8,
    title: "Sukli",
    artist: "Shaira",
    genre: "Pop",
    userRating: 2,
  },
  {
    id: 9,
    title: "Kung 'Di Rin Lang Ikaw",
    artist: "Moira Dela Torre",
    genre: "Pop",
    userRating: 5,
  },
  {
    id: 10,
    title: "Tagpuan",
    artist: "Moira Dela Torre",
    genre: "Pop",
    userRating: 3,
  },
  {
    id: 11,
    title: "Torete",
    artist: "Moonstar88",
    genre: "OPM",
    userRating: 4,
  },
  {
    id: 12,
    title: "Kathang Isip",
    artist: "Ben&Ben",
    genre: "OPM",
    userRating: 1,
  },
  {
    id: 13,
    title: "Maybe the Night",
    artist: "Ben&Ben",
    genre: "OPM",
    userRating: 5,
  },
  {
    id: 14,
    title: "Sa Susunod na Lang",
    artist: "Hale",
    genre: "OPM",
    userRating: 3,
  },
  {
    id: 15,
    title: "Kung 'Di Mo Natatanong",
    artist: "Hale",
    genre: "OPM",
    userRating: 2,
  },
  {
    id: 16,
    title: "Your Universe",
    artist: "Rico Blanco",
    genre: "OPM",
    userRating: 5,
  },
  {
    id: 17,
    title: "Wag Mong Aminin",
    artist: "Rico Blanco",
    genre: "OPM",
    userRating: 1,
  },
  {
    id: 18,
    title: "Panalangin",
    artist: "Moonstar88",
    genre: "OPM",
    userRating: 4,
  },
  {
    id: 19,
    title: "Tadhana",
    artist: "Up Dharma Down",
    genre: "OPM",
    userRating: 3,
  },
  {
    id: 20,
    title: "Indak",
    artist: "Up Dharma Down",
    genre: "OPM",
    userRating: 2,
  },
  {
    id: 21,
    title: "Oo",
    artist: "Up Dharma Down",
    genre: "OPM",
    userRating: 5,
  },
  {
    id: 22,
    title: "Hey Barbara",
    artist: "I Belong to the Zoo",
    genre: "Indie",
    userRating: 3,
  },
  {
    id: 23,
    title: "Balang Araw",
    artist: "I Belong to the Zoo",
    genre: "Indie",
    userRating: 4,
  },
  {
    id: 24,
    title: "Sana",
    artist: "I Belong to the Zoo",
    genre: "Indie",
    userRating: 2,
  },
  {
    id: 25,
    title: "Mundo",
    artist: "IV of Spades",
    genre: "Indie",
    userRating: 5,
  },
  {
    id: 26,
    title: "Bata, Dahan-Dahan!",
    artist: "IV of Spades",
    genre: "Indie",
    userRating: 1,
  },
  {
    id: 27,
    title: "Hey Barbara",
    artist: "I Belong to the Zoo",
    genre: "Indie",
    userRating: 4,
  },
  {
    id: 28,
    title: "Mundo",
    artist: "IV of Spades",
    genre: "Indie",
    userRating: 2,
  },
  {
    id: 29,
    title: "Bata, Dahan-Dahan!",
    artist: "IV of Spades",
    genre: "Indie",
    userRating: 5,
  },
  {
    id: 30,
    title: "Ilaw sa Daan",
    artist: "IV of Spades",
    genre: "Indie",
    userRating: 3,
  },
];

const tempPlaylist = [
  {
    id: 31,
    title: "Magnetic",
    artist: "Illit",
    genre: "Kpop",
    userRating: 5,
  },
  {
    id: 32,
    title: "Sheesh",
    artist: "Babymonster",
    genre: "Kpop",
    userRating: 3,
  },
];

function Navbar({ children }) {
  return (
    <nav className="container">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return <h1 style={{ textAlign: "center" }}>Music App</h1>;
}
function Search({ setSearchQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search music..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

function NumResult({ music }) {
  return (
    <p>
      Found <strong>{music.length}</strong> results
    </p>
  );
}

function Box({ children, title }) {
  return (
    <div className="container">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function Music({ music, addToPlaylist, playlist }) {
  return (
    <ul>
      {music.map((track) => (
        <li className="music" key={track.id}>
          {track.title} by {track.artist} ({track.genre})
          <button
            className="addToPlayList"
            onClick={() => addToPlaylist(track.id)}
            disabled={playlist.some(
              (playlistTrack) => playlistTrack.id === track.id
            )}
          >
            ♥️
          </button>
        </li>
      ))}
    </ul>
  );
}

function Playlist({ playlist }) {
  const [ratings, setRatings] = useState(
    playlist.map((track) => track.userRating)
  );

  const handleRatingChange = (trackId, newRating) => {
    setRatings(
      ratings.map((rating, index) => {
        if (playlist[index].id === trackId) {
          return newRating;
        }
        return rating;
      })
    );
  };

  return (
    <div>
      <ul>
        {playlist.map((track, index) => (
          <li className="playlist" key={track.id}>
            {track.title} by {track.artist}
            <p>
              <PlaylistRating
                userRating={track.userRating}
                onRatingChange={(newRating) =>
                  handleRatingChange(track.id, newRating)
                }
              />
            </p>
          </li>
        ))}
      </ul>
      <p>
        Found <strong>{playlist.length}</strong> songs
      </p>
    </div>
  );
}

function PlaylistRating({ userRating, onRatingChange }) {
  const [rating, setRating] = useState(userRating);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
    onRatingChange(newValue);
  };

  return (
    <Stack spacing={1}>
      <Rating
        name="size-large"
        value={rating}
        onChange={handleRatingChange}
        size="large"
      />
    </Stack>
  );
}

function SortDropdown({ sortOrder, setSortOrder }) {
  return (
    <select
      className="dropdown"
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="default">Default</option>
      <option value="title">Title</option>
      <option value="artist">Artist</option>
      <option value="genre">Genre</option>
      <option value="rating">Rating</option>
    </select>
  );
}

function Main({ children }) {
  return <div className="container">{children}</div>;
}

function App() {
  const [music, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const [alertMessage, setAlertMessage] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  const addToPlaylist = (trackId) => {
    // Check if the track is already in the playlist
    const trackExistsInPlaylist = playlist.some(
      (track) => track.id === trackId
    );

    if (!trackExistsInPlaylist) {
      setAlertMessage(`Adding ${music[trackId - 1].title} to playlist`);
      setPlaylist([...playlist, music[trackId - 1]]);
      setOpenAlert(true); // Open the alert
      return true;
    } else {
      setAlertMessage("Track is already in the playlist");
      setOpenAlert(true); // Open the alert
      return false;
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false); // Close the alert
  };

  const filteredMusic = music.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedMusic = [...filteredMusic].sort((a, b) => {
    switch (sortOrder) {
      case "title":
        return a.title.localeCompare(b.title);
      case "artist":
        return a.artist.localeCompare(b.artist);
      case "genre":
        return a.genre.localeCompare(b.genre);
      case "rating":
        return b.userRating - a.userRating; // Sort by rating in descending order
      default:
        return 0; // Default order
    }
  });

  return (
    <>
      <Navbar>
        <Search setSearchQuery={setSearchQuery} />{" "}
        <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <NumResult music={filteredMusic} />
      </Navbar>
      <Main music={filteredMusic} playlist={playlist}>
        {" "}
        <Box title="Music List">
          <Music
            music={(filteredMusic, sortedMusic)}
            addToPlaylist={addToPlaylist}
            playlist={playlist}
          />
        </Box>
        <Box title="Playlist">
          <Playlist playlist={playlist} />
        </Box>
      </Main>
      <Snackbar
        className="snackbar"
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
export default App;
