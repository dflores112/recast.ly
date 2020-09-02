// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from '/compiled/src/lib/searchYouTube.js';
import YOUTUBE_API_KEY from '/compiled/src/config/youtube.js';
import _searchResultData from '/compiled/src/data/searchResults.js';


var options = {
  key: YOUTUBE_API_KEY,
  max: 5,
  query: 'React tutorial'
};
var initialize = (data) => {
  console.log(data);
  // _searchResultData = [];
  // _searchResultData.push(...data);
  console.log('New data save complete.');
};
debugger;
searchYouTube(options, initialize);

console.log(_searchResultData);


ReactDOM.render(<App/>, document.getElementById('app'));
