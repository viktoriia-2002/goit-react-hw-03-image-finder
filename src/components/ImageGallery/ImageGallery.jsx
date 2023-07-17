import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
import { ImagesList } from './ImageGallery.styled';

export default class ImageGallery extends React.Component {
  state = {
    imageCards: [],
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps });
    const apiUrl = 'https://pixabay.com/api/';
    const apiKey = '36126930-7b2057d774b58ed23a3e8d721';
    const query = this.props.searchImage;
    const page = 1;
    const perPage = 12;

    const prevGroup = prevProps?.searchImage;
    const nextGroup = this.props.searchImage;
    console.log({ prevGroup });
    console.log({ nextGroup });
    console.log({ query });

    if (prevGroup !== nextGroup) {
      this.setState({ loading: true });

      setTimeout(() => {
        fetch(
          `${apiUrl}?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
        )
          .then(response => response.json())
          .then(imageCards => this.setState({ imageCards: imageCards.hits }))
          .finally(() => this.setState({ loading: false }));
      }, 2000);
    }
  }

  render() {
    const { loading, imageCards } = this.state;
    console.log(imageCards);

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
