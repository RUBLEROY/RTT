import React,{useEffect, useState} from 'react'
import './Banner.css'
import {API_KEY,imageUrl} from'../../Constants/Constants'
import axios from '../../Constants/axios'
import YouTube from 'react-youtube'
 

function Banner() {
    const [movie, setmovie] = useState()
    const [urlId, setUrlId] = useState('')
    


    
  

    useEffect(() => {
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
           
           setmovie(response.data.results[9])
          

       })
    }, [])

    

    const handleMovie=(id)=>{
        console.log(id)
        
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                console.log(response.data.results)
        

               setUrlId(response.data.results[0]) 
            }else{
                console.log('array empty')
            }
        })
        }
  


    

    

    const opts = {
        height: '400',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    return (
        <div className='backgroundimage'
        style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
        <div className="banner">
            <div className="content">
                <h2 className='toppicks'>TOP PICKS FOR YOU</h2>
                <h1 className="title">{movie?movie.title:""}</h1>
                <div className="banner_buttons">
                    
                    <button onClick={()=>handleMovie(movie.id)} className="button">PLAY TRAILOR</button> 
                    
                    <button  className ="button on" >SHUFFLE SUGESSIONS</button>
                </div>
                <h1 className="description">{movie?movie.overview:""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
        <div className='youtubeframe'>
         {urlId && < YouTube videoId={urlId.key}  opts={opts}/>}
         </div>
        </div>
    )
}

export default Banner;
