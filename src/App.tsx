import React, { Component } from "react";
import Home from "./components/Home/Home";
import ApiServiceStore from "./services/ApiServiceStore";
import GlobalStore from "./services/GlobalStore";

interface ICustomStores {
  apiStore?: ApiServiceStore;
  globalStore: GlobalStore;
}

export default class App extends Component<ICustomStores> {
  render() {
    return (
      <div>
        <Home apiServiceStore={this.props.apiStore} />
      </div>
    );
  }
}
