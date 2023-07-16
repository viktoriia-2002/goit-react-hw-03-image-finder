import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Searchbar />
        <ToastContainer autoClose={3000}/>
      </div>
    );
  }
}

export default App;
