var searchYouTube = (options, callback) => {

  var getVideos = function(callback = () =>{}) {
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        key: options.key,
        type: 'video',
        part: 'snippet',
        maxResults: options.max,
        q: options.query,
        embeddableVideo: true
      },
      success: (data) => {
        console.log('API call success!');
        callback(data);
      },
      error: (status) => {
        console.log('Error: Failed to get videos');
      }
    });
  };
};

export default searchYouTube;
