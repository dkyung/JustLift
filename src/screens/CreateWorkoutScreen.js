import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const CreateWorkoutScreen = () => {
  const { uid } = useSelector((state) => state.reducer);
  return (
    <View style={styles.container}>
      <Text>UID</Text>
      <Text>{uid}</Text>
    </View>
  );
};

export default CreateWorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
