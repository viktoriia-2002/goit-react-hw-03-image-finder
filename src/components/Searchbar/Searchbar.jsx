import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Searchbar extends React.Component {
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
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleImageChange}
          />
        </form>
      </header>
    );
  }
}

// componentDidMount() {
//     fetch(
//       'https://pixabay.com/api/?q=cat&page=1&key=36126930-7b2057d774b58ed23a3e8d721&image_type=photo&orientation=horizontal&per_page=12'
//     )
//       .then(response => response.json())
//       .then(pokemon =>  this.setState({ pokemon }));
