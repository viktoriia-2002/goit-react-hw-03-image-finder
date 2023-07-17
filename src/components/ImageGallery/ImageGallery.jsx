import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
import { ImagesList } from './ImageGallery.styled';

export default class ImageGallery extends React.Component {
  state = {
    imageCards: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const apiUrl = 'https://pixabay.com/api/';
    const apiKey = '36126930-7b2057d774b58ed23a3e8d721';
    const query = this.props.searchImage;
    const prevGroup = prevProps?.searchImage;
    const nextGroup = this.props.searchImage;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevGroup !== nextGroup || prevPage !== nextPage) {
      this.setState({ loading: true });

      fetch(
        `${apiUrl}?q=${query}&page=${nextPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(imageCards => {
          if (imageCards.hits.length > 0) {
            this.setState(prevState => ({
              imageCards: [...prevState.imageCards, ...imageCards.hits],
            }));
          }
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, imageCards } = this.state;

    return (
      <div>
        {loading && <div>Loading...</div>}
        {!loading && imageCards && (
          <ImagesList className="gallery">
            {imageCards.map(imageCard => (
              <ImageGalleryItem key={imageCard.id} imageCard={imageCard} />
            ))}
          </ImagesList>
        )}
      </div>
    );
  }
}
