import React from 'react';


// TODO: Once networking is more complete, it should interface with the player with a HOC like this...somehow
export default (WrappedComponent) => ({ ...props }) => {

    return <WrappedComponent
        {...props}
        onReady={() => props.setReady(true)}
        onStart={() => console.log("onStart")}
        onPlay={() => console.log("onPlay")}
        // onEnablePIP={this.handleEnablePIP}
        // onDisablePIP={this.handleDisablePIP}
        onPause={() => console.log("onPause")}
        onBuffer={() => console.log("onBuffer")}
        onSeek={e => console.log("onSeek", e)}
        onEnded={() => { console.log("onEnded"); props.setSong('https://youtu.be/A6l8THwbcfY') }}
        onError={e => console.log("onError", e)}
        onProgress={e => props.setProgress(e.played)}
        onDuration={e => console.log("onDuration", e)}
    />

};
