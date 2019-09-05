import React from 'react';
import {View, Image, ScrollView, TouchableOpacity, ListView} from 'react-native';
import Planet from './components/planet';

function onClick(){

}
export default function InfoPage(){
  return(
<View style={{ position: 'absolute', width:800}}>
<Image style={{ height: 850, width: 1000, position: 'absolute', top: 0, left: 0 }} source={require('./public/astronomy.jpg')} />
<ListView>
  <TouchableOpacity onPress={onClick}>
    <Planet x={0} y={0} height={280} width={280} orbitSize={0 * 18} orbitSpeedInDays={248 * 365} planetPicture={require('./public/pluto.png')} name={'Pluto'} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onClick}>
    <Planet x={0} y={0} height={280} width={280} orbitSize={0 * 16} orbitSpeedInDays={165 * 365} planetPicture={require('./public/neptune.png')} name={'Neptune'} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onClick}>
    <Planet x={0} y={0} height={280} width={280} orbitSize={0 * 14} orbitSpeedInDays={84 * 365} planetPicture={require('./public/uranus.png')} name={'Uranus'} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onClick}>
    <Planet x={0} y={0} height={280} width={450} orbitSize={0 * 12} orbitSpeedInDays={29 * 365} planetPicture={require('./public/saturn.png')} name={'Saturn'} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onClick}>
    <Planet x={0} y={0} height={280} width={280} orbitSize={0 * 10} orbitSpeedInDays={4280} planetPicture={require('./public/jupiter.png')} name={'Jupiter'} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onClick}>
    <Planet x={0} y={0} height={280} width={280} orbitSize={0 * 8} orbitSpeedInDays={687} planetPicture={require('./public/mars.png')} name={'Mars'} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onClick}>
    <Planet x={0} y={0} height={280} width={280} orbitSize={0 * 6} orbitSpeedInDays={365} planetPicture={require('./public/earth.png')} name={'Earth'} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onClick}>
    <Planet x={0} y={0} height={280} width={280} orbitSize={0 * 4} orbitSpeedInDays={225} planetPicture={require('./public/venus.png')} name={'Venus'} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onClick}>
    <Planet x={0} y={0} height={280} width={280} orbitSize={0 * 2} orbitSpeedInDays={88} planetPicture={require('./public/mercury.png')} name={'Mercury'} />
  </TouchableOpacity>
  <TouchableOpacity onPress={onClick}>
    <Planet style={{ position: 'relative' }} x={0} y={0} height={280} width={280} orbitSize={0} orbitSpeedInDays={365} planetPicture={require('./public/sun_pic.png')} name={'Sun'} />
  </TouchableOpacity>
</ListView>
</View>)
}