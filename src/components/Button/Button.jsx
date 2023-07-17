import React from 'react';

class ButtonLoadMore extends React.Component {
  render() {
    const { onLoadMore } = this.props;

    return (
      <button onClick={onLoadMore} className="LoadMore">
        Load more
      </button>
    );
  }
}

export default ButtonLoadMore;
