import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

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
      toast.error('Please enter type of image!');
      return;
    }

    this.props.onSubmit(this.state.searchImage);
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
