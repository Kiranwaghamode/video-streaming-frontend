import React from 'react'
import './Playlist.css'
import PlayListCard from '../playListCard/PlayListCard'
const Playlist = () => {

  const playListImage = "https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg"

  return (


   <>
   <div className="main-playlist">
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   <PlayListCard title={"How to make thumbnail"} image={playListImage}/>
   </div>
   </>
  )
}

export default Playlist