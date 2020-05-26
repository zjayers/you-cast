/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../api/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
  }

  componentDidMount() {
    this.handleSearchSubmit('ReactJS');
  }

  // HANDLE SEARCH SUBMIT
  handleSearchSubmit = async (searchTerm) => {
    const res = await Youtube.get('/search', {
      params: {
        q: searchTerm,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: process.env.REACT_APP_YOUTUBE_KEY,
      },
    });

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  handleVideoSelect = (videoObj) => {
    this.setState({ selectedVideo: videoObj });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className='ui container'>
        <SearchBar handleSearchSubmit={this.handleSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                videos={videos}
                handleVideoSelect={this.handleVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
