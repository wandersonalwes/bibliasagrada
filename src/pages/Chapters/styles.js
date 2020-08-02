import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const HeaderContainer = styled.View`
  background: #c19666;
  padding-top: ${Platform.OS === 'ios' ? '60px' : '30px'};
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const HeaderContent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 18px;
  color: #fff;
`;
export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 40px 40px;
`;

export const Title = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 24px;
  padding-left: 15px;
  color: #000;

`;


export const ChaptersContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 30px 30px;
`;

export const ChapterItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: rgba(181, 201, 242, 0.1);
  border: 1px solid rgba(181, 201, 242, 0.2);
  margin-bottom: 20px;
  width: 90px;
  height: 90px;
`;

export const ChaptersText = styled.Text`
  font-size: 20px;
  font-family: Roboto_700Bold;

  color: #2f3f64;
`;
