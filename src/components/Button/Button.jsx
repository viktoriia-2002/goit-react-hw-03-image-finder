import React from 'react';
import { BtnLoadMore } from './Button.styled';

class ButtonLoadMore extends React.Component {
  render() {
    const { handleLoadMore, page, imageCards, loading } = this.props;
    return (
      <div>
        {page >= 1 && !!imageCards.length && !loading && (
          <BtnLoadMore onClick={handleLoadMore} className="LoadMore">
            Load more
          </BtnLoadMore>
        )}
      </div>
    );
  }
}

export default ButtonLoadMore;
