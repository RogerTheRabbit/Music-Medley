import React from "react";
import { formatDuration } from "../../utils/utils";
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
                <div>{song.title}</div>
                <div className="song-artist">{song.channel}</div>
            </div>
            <div className="song-duration">{formatDuration(song.duration)}</div>
        </motion.div>
    );
}

