import React from "react";
import { motion } from "framer-motion"

export default function SongQueueItem({ song }) {

    return (
        <motion.div
            className="song-item"
            initial={{ x: "100%", width: 0 }}
            animate={{ x: 0, width: "100%"}}
            transition={{ ease: "easeIn", duration: 0.1 }}
        >
            <img src={song.photo} alt="Song display" className="song-photo z-depth-1" width="50px" height="50px"/>
            <div className="song-info">
                <a className="song-title" target="_blank" href={song.url}>{song.title}</a>
                <br />
                <a className="song-artist" target="_blank" href={`https://www.youtube.com/channel/${song.chanelId}`}>{song.channel}</a>
            </div>
        </motion.div>
    );
}
