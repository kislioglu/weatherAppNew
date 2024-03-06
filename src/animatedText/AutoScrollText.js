/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import React, {useEffect} from 'react';
// import {Text} from 'react-native';
// import {
//   Animated,
//   Easing,
//   useSharedValue,
//   withSpring,
//   useAnimatedStyle,
//   withRepeat,
//   withSequence,
// } from './Reanimated';

// const AutoScrollText = ({text}) => {
//   const translateX = useSharedValue(0);

//   useEffect(() => {
//     translateX.value = withRepeat(
//       withSequence(
//         withSpring(-100, {damping: 2, stiffness: 80}),
//         withSpring(0, {damping: 2, stiffness: 80}),
//       ),
//       -1,
//       true,
//     );
//   }, []);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{translateX: translateX.value}],
//     };
//   });

//   return (
//     <Animated.View style={animatedStyle}>
//       <Text>{text}</Text>
//     </Animated.View>
//   );
// };

// export default AutoScrollText;
