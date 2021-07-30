import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUid } from '../redux/actions';
import firebase from '../firebase/config';
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
} from '../components/styles';

const email = 'dk@gmail.com';
const pass = '000000';

const HomeScreen = () => {
  const [logged, setLogged] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {}, [logged]);
  const dispatch = useDispatch();

  const onPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((response) => {
        const { user } = response;
        console.log(user.uid);
        dispatch(setUid(user.uid));
        setLogged(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-undef
        alert(error);
      });
  };
  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>Home</PageTitle>
        <Button
          title="Start Workout"
          onPress={() => navigation.navigate('Create')}
        />
        {!logged && <Button title="login" onPress={() => onPress()} />}
      </InnerContainer>
    </StyledContainer>
  );
};

export default HomeScreen;
