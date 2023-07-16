import React from 'react';

export default class ImageGallery extends React.Component {
  state = {
    imageCards: [],
    loading: false,
  };

  componentDidMount(prevProps, prevState) {
    console.log({ prevProps });
    const apiUrl = 'https://pixabay.com/api/';
    const apiKey = '36126930-7b2057d774b58ed23a3e8d721';
    const query = this.props.searchImage;
    const page = 1;
    const perPage = 12;

    const prevGroup = prevProps?.searchImage;
    const nextGroup = this.props.searchImage;

    if (prevGroup !== nextGroup) {
      this.setState({ loading: true });

      fetch(
        `${apiUrl}?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      )
        .then(response => response.json())
        .then(imageCards => this.setState({ imageCards }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    console.log(this.state.imageCards);
    return <div>ImageGallery</div>;
  }
}
