// import React from 'react';
// import * as basicLightbox from 'basiclightbox';
// import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';

// class Modal extends React.Component {
//   state = {
//     modalInstance: null,
//   };

//   componentDidUpdate(prevProps) {
//     const { isOpenModal, selectedPicture } = this.props;

//     if (isOpenModal && selectedPicture !== prevProps.selectedPicture) {
//       this.showModal(selectedPicture);
//     }

//     if (!isOpenModal && prevProps.isOpenModal) {
//       this.closeModal();
//     }
//   }

//   componentWillUnmount() {
//     this.closeModal();
//   }

//   showModal(selectedPicture) {
//     this.modalInstance = basicLightbox.create(`
//       <img src=${selectedPicture} width="800" height="600">
//     `);
//     this.modalInstance.show();
//   }

//   closeModal() {
//     if (this.modalInstance) {
//       this.modalInstance.close();
//       this.modalInstance = null;
//     }
//   }

//   render() {
//     return null;
//   }
// }

// export default Modal;

import React from 'react';
import * as basicLightbox from 'basiclightbox';
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';

class Modal extends React.Component {
  state = {
    modalInstance: null,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    
  }
  componentDidUpdate(prevProps) {
    const { isOpenModal, selectedPicture } = this.props;

    if (isOpenModal && selectedPicture !== prevProps.selectedPicture) {
      this.showModal(selectedPicture);
    }

    if (!isOpenModal && prevProps.isOpenModal) {
      this.closeModal();
    }
  }

  componentWillUnmount() {
    this.closeModal();
  }

  showModal(selectedPicture) {
    this.modalInstance = basicLightbox.create(`
      <img src=${selectedPicture} width="800" height="600">
    `);
    this.modalInstance.show();
  }

  closeModal() {
    if (this.modalInstance) {
      this.modalInstance.close();
      this.modalInstance = null;
    }
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    return null;
  }
}

export default Modal;
