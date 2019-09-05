
import React from 'react';
import { Animated, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Planet from './planet'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
export default class SolarSystem extends React.Component {
  constructor(props) {
    super(props);
    this.scrollView = null;
  }

  render() {
    const xCoord = 0 // sun's initial x and y coordinates
    const yCoord = 0
    const earthSize = 30 //earth size used as reference for planet sizes
    const sunSize = earthSize * 25 //sun's size used as variable to adjust orbital coordinate of planets
    const orbitDefault = sunSize
    return (
      <View style={{ flex:1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 800}}>
        <Image style={{ height: 850, width: 850, position: 'absolute', top: 0, left: 0 }} source={require('../public/astronomy.jpg')} />
        
        <ReactNativeZoomableView
          maxZoom={null}
          minZoom={0}
          zoomStep={10}
          initialZoom={0.5}
          bindToBorders={false}
          onZoomAfter={this.logOutZoomState}>
            
          <Planet x={xCoord} y={yCoord +0.50*sunSize} height={earthSize * 0.16} width={earthSize * 0.16} orbitSize={orbitDefault * 18} orbitSpeedInDays={248 * 365} planetPicture={require('../public/pluto.png')} name={'Pluto'} />
          <Planet x={xCoord} y={yCoord +0.50*sunSize} height={earthSize * 3.88} width={earthSize * 3.88} orbitSize={orbitDefault * 16} orbitSpeedInDays={165 * 365} planetPicture={require('../public/neptune.png')} name={'Neptune'} />
          <Planet x={xCoord} y={yCoord +0.50*sunSize} height={earthSize * 4} width={earthSize * 4} orbitSize={orbitDefault * 14} orbitSpeedInDays={84 * 365} planetPicture={require('../public/uranus.png')} name={'Uranus'} />
          <Planet x={xCoord} y={yCoord +0.50*sunSize} height={earthSize * 9.45} width={earthSize * 9.45 + 300} orbitSize={orbitDefault * 12} orbitSpeedInDays={29 * 365} planetPicture={require('../public/saturn.png')} name={'Saturn'} />
          <Planet x={xCoord} y={yCoord +0.50*sunSize} height={earthSize * 11.2} width={earthSize * 11.2} orbitSize={orbitDefault * 10} orbitSpeedInDays={4300} planetPicture={require('../public/jupiter.png')} name={'Jupiter'} />
          <Planet x={xCoord} y={yCoord +0.50*sunSize} height={earthSize * 0.53} width={earthSize * 0.53} orbitSize={orbitDefault * 8} orbitSpeedInDays={687} planetPicture={require('../public/mars.png')} name={'Mars'} />
          <Planet x={xCoord} y={yCoord +0.50*sunSize} height={earthSize} width={earthSize} orbitSize={orbitDefault * 6} orbitSpeedInDays={365} planetPicture={require('../public/earth.png')} name={'Earth'} />
          <Planet x={xCoord} y={yCoord +0.50*sunSize} height={earthSize * 0.95} width={earthSize * 0.95} orbitSize={orbitDefault * 4} orbitSpeedInDays={225} planetPicture={require('../public/venus.png')} name={'Venus'} />
          <Planet x={xCoord} y={yCoord +0.50*sunSize} height={earthSize * 0.38} width={earthSize * 0.38} orbitSize={orbitDefault * 2} orbitSpeedInDays={88} planetPicture={require('../public/mercury.png')} name={'Mercury'} />
          <Planet x={xCoord} y={yCoord} height={sunSize} width={sunSize} orbitSize={0} orbitSpeedInDays={365} planetPicture={require('../public/sun_pic.png')} name={'Sun'} />
          
        </ReactNativeZoomableView>
        
      </View>
    )
  }
}
// For coordinates of orbiting planets do: PlanetX + (Height/2)
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  space: {
    height: 10000,
    width: 10000,
    position: 'absolute'
  }
});