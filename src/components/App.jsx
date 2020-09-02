import exampleVideoData from '../data/exampleVideoData.js';
console.log(exampleVideoData);

import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentlyPlaying: exampleVideoData[0],
      availableVidoes: exampleVideoData,
      autoplay: false,
      done: false
    };

    this.playThisVideo = (newVideo) => {
      this.setState({
        currentlyPlaying: newVideo
      });
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">

            <Search/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer
              video={this.state.currentlyPlaying}
            />
          </div>
          <div className="col-md-5">
            <VideoList
              videos={this.state.availableVidoes}
              playThisVideo={this.playThisVideo}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


/*
app tree

App
  |__Search
  |__VideoList
  |   |__VideoListEntry
  |__VideoPlayer


*/