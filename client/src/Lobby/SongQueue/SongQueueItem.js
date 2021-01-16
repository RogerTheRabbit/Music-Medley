import React,{useState} from "react";
import { formatDuration } from "../../utils/utils";
import { motion } from "framer-motion"
// import dotenv from "dotenv";

// dotenv.config();

// const TOKEN = process.env.REACT_APP_SEARCH_TOKEN;
// const MAXRESULTS = 5;

export default function SongQueueItem({ song }) {
    // const [duration, storeDuration] = useState();

    // const getDuration = () => {
        
    //     const url = "https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=" + song.videoId + "&maxResults=" + MAXRESULTS +"&key=" + TOKEN;

    //     fetch(url)
    //             .then(response => response.json())
    //             .then(data => {
    //                 storeDuration(data.items);
    //                 console.log(data.items);
    //             })
        
        
    // };
    
    // getDuration();

    return (
        <motion.div
            className="song-item"
            initial={{ x: "100%", width: 0 }}
            animate={{ x: 0, width: "100%"}}
            transition={{ ease: "easeIn", duration: 0.1 }}
        >
            <img src={song.photo} alt="Song photo" className="song-photo z-depth-1" width="50px" height="50px"/>
            <div className="song-info">
                <div>{song.title}</div>
                <div className="song-artist">{song.channel}</div>
            </div>
            <div className="song-duration">{formatDuration(song.duration)}</div>
        </motion.div>
    );
}

