import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import { toast } from 'react-toastify';

class App extends React.Component {
  state = {
    searchImage: '',
  };

  handleImageChange = event => {
    this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.searchImage.trim() === '') {
      return toast.error('Please enter type of image!');
    }
    this.setState({ searchImage: '' });
  };

  render() {
    console.log(this.state.searchImage);
    return (
      <div>
        <Searchbar
          handleImageChange={this.handleImageChange}
          searchImage={this.state.searchImage}
          handleSubmit={this.handleSubmit}
        />
        <ImageGallery searchImage={this.state.searchImage} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
