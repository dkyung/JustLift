import styled from 'styled-components';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;
export const InnerContainer = styled.View`
  flex: 1;
  padding: 35px;
  width: 100%;
  align-items: center;
`;
export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;
