import './App.css';
import Home from './pages/home/Home';
import UserProfile from './pages/userProfile/UserProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from './pages/video/Video';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/user-profile" element={<UserProfile/>}/>
          <Route exact path="/video/:videoId" element={<Video/>}/>
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
