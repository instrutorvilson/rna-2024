import { useRef } from 'react';
import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native';

export default function HandleGestos() {
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {dx: pan.x, dy: pan.y}
      ],
      {useNativeDriver:false}),
      onPanResponderRelease:()=>{
        Animated.spring(pan, {
          toValue: {x:0, y:0},
          useNativeDriver: false
        }).start()
      }
  })).current
  
  return (
    <View style={styles.container}>
      <Animated.View 
        {...panResponder.panHandlers}
        style={[pan.getLayout(), styles.box]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  }
});
