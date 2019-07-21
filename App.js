import React from "react";
import { Provider } from "react-redux";

import store from "./src/store/appStore"

import AppNavigator from "./src/navigation";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
