import React from 'react';
import { Btn } from './Button.styled';

class ButtonLoadMore extends React.Component {
  render() {
    const { handleLoadMore, page, imageCards, loading } = this.props;
    return (
      <div>
        {page >= 1 && !!imageCards.length && !loading && (
          <Btn onClick={handleLoadMore} className="LoadMore">
            Load more
          </Btn>
        )}
      </div>
    );
  }
}

export default ButtonLoadMore;
