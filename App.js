/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableHighlight,
} from 'react-native';
import {
  Svg,
  Path,
} from 'react-native-svg';

export default class Animation extends Component {

  componentWillMount() {
    this.reset();
  }

  reset = () => {
    if (this._animatedValueCircle) {
      this._animatedValueCircle.setValue(1000);
      this._animatedValueTick.setValue(79.09);
    } else {
      this._animatedValueCircle = new Animated.Value(1000);
      this._animatedValueTick = new Animated.Value(79.09);
    }

    setTimeout(() => {
      Animated.parallel([
        Animated.timing(this._animatedValueCircle, {
          toValue: 0,
          duration: 1500,
          easing: Easing.inOut(Easing.cubic)
        }),
        Animated.timing(this._animatedValueTick, {
          toValue: 0,
          duration: 500,
          easing: Easing.inOut(Easing.cubic),
          delay: 700,
        }),
      ]).start();
    }, 0);
  }

  render () {
    const AnimatedPath = Animated.createAnimatedComponent(Path);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableHighlight onPress={this.reset}><Text>Click me</Text></TouchableHighlight>
        <Svg height="200" width="200">
          <AnimatedPath fill="none" strokeLinecap="round" stroke="#E34F26" strokeMiterlimit={1} strokeWidth="6" d="M 100  100 m -75  0 a 75 75 0 1 0 150 0 a 75 75 0 1 0 -150 0" strokeDasharray="1000" strokeDashoffset={this._animatedValueCircle} />
          <AnimatedPath x="50" y="50" fill="none" strokeLinecap="round" stroke="#E34F26" strokeMiterlimit={1} strokeWidth="6" d="M20.8 51c0 0 20.8 18.2 21.5 18.2c0.6 0 33.3-38.5 33.3-38.5" strokeDasharray="79.09" strokeDashoffset={this._animatedValueTick} />
        </Svg>
      </View>
    )
  }
}
