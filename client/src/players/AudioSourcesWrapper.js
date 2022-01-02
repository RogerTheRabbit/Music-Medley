import React, { useContext } from 'react'
import { WebSocketContext } from '../networking/networking';
import AudioSources from './AudioSources'

export default function AudioSourcesWrapper() {
    const networking = useContext(WebSocketContext);
    return <AudioSources onReady={networking.syncPlayer} onEnded={networking.songEnded} />
}
