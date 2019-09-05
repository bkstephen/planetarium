import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

export default class Planet extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.moveAnimationPlanet = new Animated.ValueXY(
      {
        x: this.props.orbitSize * Math.cos(0) + this.props.x,
        y: this.props.orbitSize * Math.cos(0) + this.props.y
      })
  }

  componentDidMount() {
    let i = this.props.x
    let j = this.props.y
    let x = 0
    setInterval(() => {
      Animated.spring(this.moveAnimationPlanet, {
        toValue: { x: i, y: j },
      }).start()
      i = this.props.orbitSize * Math.sin(x) + this.props.x
      j = this.props.orbitSize * Math.cos(x) + this.props.y
      x += (365 / this.props.orbitSpeedInDays) / 100
      if(i == this.props.x && j == this.props.y){x=0}
      console.log(x)
    }, 0.1)
  }

  render() {

    const styles = StyleSheet.create({
      attributes: {
        width: this.props.width,
        height: this.props.height
      },
      text: {
        fontSize: 200,
        color: 'white'
      }
    })

    return (
      <Animated.View>
        <Animated.Image source={this.props.planetPicture} style={[styles.attributes, this.moveAnimationPlanet.getLayout()]}>
        </Animated.Image>
        <Animated.Text style={[styles.text, this.moveAnimationPlanet.getLayout()]}> {this.props.name}
        </Animated.Text>
      </Animated.View>
    )
  }
}

