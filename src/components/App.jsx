import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import ButtonLoadMore from './Button/Button';

class App extends React.Component {
  state = {
    searchImage: '',
    page: 1,
  };

  handleSearchSubmit = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    return (
      <div>
        <Searchbar
          onSubmit={this.handleSearchSubmit}
          // handleImageChange={this.handleImageChange}
          // searchImage={this.state.searchImage}
          // handleSubmit={this.handleSearchSubmit}
        />
        <ImageGallery searchImage={this.state.searchImage} />
        <ButtonLoadMore onLoadMore={this.onLoadMore} />
        <ToastContainer autoClose={1000} />
      </div>
    );
  }
}

export default App;
