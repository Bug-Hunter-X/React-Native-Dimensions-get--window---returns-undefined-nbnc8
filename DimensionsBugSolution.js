import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const MyComponent = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });
    const getInitialDimensions = async() => {
      const { width, height } = await Dimensions.get('window');
      setDimensions({width, height});
    }
    getInitialDimensions();
    return () => subscription?.remove();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen Width: {dimensions.width}</Text>
      <Text>Screen Height: {dimensions.height}</Text>
    </View>
  );
};
export default MyComponent;