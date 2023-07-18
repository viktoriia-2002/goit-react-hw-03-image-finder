import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import ButtonLoadMore from './Button/Button';
import Modal from './Modal/Modal';

class App extends React.Component {
  state = {
    searchImage: '',
    page: 1,
    loading: false,
    imageCards: [],
    isOpenModal: false,
    selectedPicture: null,
  };

  handleImages = array => {
    this.setState({ imageCards: array });
  };

  handleLoading = loading => {
    this.setState({ loading });
  };

  handleSearchSubmit = searchImage => {
    this.setState({ searchImage });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOpenModal = id => {
    console.log({ id });
    this.setState({ isOpenModal: true });
    const selectedPicture = this.state.imageCards.find(
      image => image.id === id
    )?.largeImageURL;
    if (selectedPicture) {
      this.setState({ selectedPicture });
    }
  };

  handleCloseModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          searchImage={this.state.searchImage}
          page={this.state.page}
          handleImages={this.handleImages}
          imageCards={this.state.imageCards}
          handleLoading={this.handleLoading}
          loading={this.state.loading}
          handleOpenModal={this.handleOpenModal}
        />

        <Modal
          isOpenModal={this.state.isOpenModal}
          selectedPicture={this.state.selectedPicture}
          handleCloseModal={this.handleCloseModal}
        />

        <ButtonLoadMore
          handleLoadMore={this.handleLoadMore}
          page={this.state.page}
          imageCards={this.state.imageCards}
          loading={this.state.loading}
        />
        <ToastContainer autoClose={1000} />
      </>
    );
  }
}

export default App;
