import React, { Component } from "react";
import { Image } from "react-native";

const splashscreen = require("../../../assets/splashscreen.png");
const vkc = require("../../../assets/company/vkc_logo.jpg");
export default class SplashPage extends Component {
  render() {
    // eslint-disable-line class-methods-use-this
    return (
      <Image
        source={vkc}
        style={{ flex: 1, height: null, width: null }}
      />
    );
  }
}
