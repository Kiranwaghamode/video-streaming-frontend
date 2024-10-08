import './App.css';
import Home from './pages/home/Home';
import UserProfile from './pages/userProfile/UserProfile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from './pages/video/Video';
import Channel from './pages/channel/Channel';
import Twitter from './components/twitter/Twitter';

function App() {


// https://nodebackend-tiv6.onrender.com/api/v1

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/user-profile" element={<UserProfile/>}/>
          <Route exact path="/video/:videoId" element={<Video/>}/>
          <Route exact path="/user-channel/:username" element={ <Channel/> }/>
          <Route exact path="/tweets" element={ <Twitter/> }/>
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
