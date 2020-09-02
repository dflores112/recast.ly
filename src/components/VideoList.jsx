import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';


// next steps:
// - find what goes in view
// - make number of list items rendered dynamic (called as many times as needed from App.jsx)


var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(
      x => <VideoListEntry
        video={x}
        key={x.id.videoId}
        playThisVideo={props.playThisVideo}
      /> //</em> view goes here</h5></div>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
