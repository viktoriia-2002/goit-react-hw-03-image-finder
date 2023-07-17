import React from 'react';

class ButtonLoadMore extends React.Component {
  render() {
    const { handleLoadMore, page } = this.props;
    console.log({ page });
    return (
      <div>
        {page >= 1 && (
          <button onClick={handleLoadMore} className="LoadMore">
            Load more
          </button>
        )}
      </div>
    );
  }
}

export default ButtonLoadMore;
