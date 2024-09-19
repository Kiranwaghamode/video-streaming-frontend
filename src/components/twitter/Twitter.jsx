import React, { useEffect, useState } from 'react'
import './Twitter.css'
import Tweet from '../tweet/Tweet'
import Navbar from '../navbar/Navbar'
import Cookies from 'js-cookie'
import axios from 'axios'

const Twitter = () => {

    const [newTweet, setnewTweet] = useState('')
    const [tweetDelete, settweetDelete] = useState(false)
    const [Content, setContent] = useState('')
    const [Tweets, setTweets] = useState([])


    useEffect(() => {
        
    }, [])

    const createTweet = async()=>{
         try {
            const accessToken = Cookies.get('accessToken')
            const response = await axios.post(`${process.env.REACT_APP_API_URI}/tweets/create-tweet`,{content: Content}, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            },  {withCredentials: true });
            setnewTweet(response.data.data)
            } catch (error) {
                console.log("Error while creating tweet")
            }
    }
    


    useEffect(() => {
      
    }, [newTweet, tweetDelete])
    

  return (
    <>
    <Navbar/>
    <button>Add Tweet</button>
    <Tweet/>
    
    </>
  )
}

export default Twitter