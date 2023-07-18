import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
import { ImagesList } from './ImageGallery.styled';
import Loader from '../Loader';

export default class ImageGallery extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    const apiUrl = 'https://pixabay.com/api/';
    const apiKey = '36126930-7b2057d774b58ed23a3e8d721';
    const query = this.props.searchImage;
    const prevGroup = prevProps?.searchImage;
    const nextGroup = this.props.searchImage;
    const prevPage = prevProps.page;
    const nextPage = this.props.page;

    if (prevGroup !== nextGroup || prevPage !== nextPage) {
      this.props.handleLoading(true);

      setTimeout(() => {
        fetch(
          `${apiUrl}?q=${query}&page=${
            this.props.page === 0 ? 1 : this.props.page + 1
          }&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(response => response.json())
          .then(imageCards => {
            console.log(
              prevPage === nextPage && this.props.imageCards.length !== 0
            );
            const isNewSearch =
              prevPage === nextPage && this.props.imageCards.length !== 0;
            if (imageCards.hits.length > 0) {
              console.log(imageCards.hits);
              this.props.handleImages(
                isNewSearch
                  ? [...imageCards.hits]
                  : [...prevProps.imageCards, ...imageCards.hits]
              );
            }
          })
          .finally(this.props.handleLoading(false));
      }, 2000);
    }
  }

  render() {
    const { imageCards, loading, handleOpenModal } = this.props;

    return (
      <div>
        {loading && <Loader />}
        {!loading && imageCards && (
          <ImagesList className="gallery">
            {imageCards.map(imageCard => (
              <ImageGalleryItem
                key={imageCard.id}
                handleOpenModal={handleOpenModal}
                imageCard={imageCard}
              />
            ))}
          </ImagesList>
        )}
      </div>
    );
  }
}
