import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';

import InboxScreen from './components/InboxScreen';
import ImageSlider from './components/ImageSlider';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <InboxScreen />
        <ImageSlider />
      </Provider>
    );
  }
}

export default App;