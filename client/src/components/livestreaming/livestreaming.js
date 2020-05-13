import React from 'react'
import ReactLivestream from 'react-livestream'

const YTKEY='AIzaSyCUhFPao7Mh8-sYXHjJ8zBGss1x4Nw4GG0'
const TWAPIKEY='2zrps1v8yt06zswe5du4kxm5chynrc'

function OfflineComponent() {
    return (
      <div>
        <p>I am offline now, but checkout my stream on Fridays at 5 PM EST</p>
      </div>
    )
  }


function App() {
    return (
        <div className="App">
            <ReactLivestream
                platform="youtube"
                youtubeApiKey={YTKEY}
                youtubeChannelId="UCPtbFnfPYsm5WHX8_8JcYHg"
                
            />
            
            {/* <ReactLivestream
                platform="twitch"
                offlineComponent
                twitchClientId={TWAPIKEY}
                twitchUserName="manuelramirez1411"
                
            /> */}

        </div>
    )
}

export default App