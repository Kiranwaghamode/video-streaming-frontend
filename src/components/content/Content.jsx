import React from 'react'
import './Content.css'
import Videocard from '../videoCard/Videocard'
const Content = () => {

    const title = "how to make attractive thumbnail"
    const channel = "mortal"
    const image = "https://static-cse.canva.com/blob/1564545/1600w-wK95f3XNRaM.jpg"
    const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC41flzoZC1EQy1ms3tEysWhuIJ_2EfXw3A&s"

  return (
    <>
    <div className="content-main">
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
        <Videocard title={title} channel={channel} imgUrl={image} avatar={avatar}/>
    </div>
    
    
    </>
  )
}


//imgurl: https://static-cse.canva.com/blob/1564545/1600w-wK95f3XNRaM.jpg
//avatar: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTC41flzoZC1EQy1ms3tEysWhuIJ_2EfXw3A&s

export default Content