import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js';


// next steps:
// - find what goes in view
// - make number of list items rendered dynamic (called as many times as needed from App.jsx)


var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry video={video} key={video.id.videoId} /> //</em> view goes here</h5></div>
    )}
  </div>
);



// - in list entry, use correct video thumbnail from data set
// - in list entry, add video description

// var VideoList = (props) => (
//   <div className="video-list">
//     <div><h5><em>videoListEntry</em> view goes here</h5></div>
//     <div><h5><em><VideoListEntry video={props.videos[0]} /></em> view goes here</h5></div>
//     <div><h5><em><VideoListEntry video={props.videos[1]} /></em> view goes here</h5></div>
//     <div><h5><em><VideoListEntry video={props.videos[2]} /></em> view goes here</h5></div>
//     <div><h5><em><VideoListEntry video={props.videos[3]} /></em> view goes here</h5></div>
//     <div><h5><em><VideoListEntry video={props.videos[4]} /></em> view goes here</h5></div>
//   </div>
// );

// class VideoList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {

//     return (
//       <div videotitle={this.props.videos[0].snippet.title}>{this.props.videos[0].snippet.title}</div>
//     );
//   }
// }


// exampleVideoData.snippet.title

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
