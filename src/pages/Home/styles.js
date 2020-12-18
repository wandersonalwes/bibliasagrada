import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const HeaderContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: ${Platform.OS === 'ios' ? '70px' : '40px'};
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
`
export const AppName = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: #2f3f64;
  margin-left: 10px;
`
export const SearchContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: ${Platform.OS === 'ios' ? '60px' : '40px'}; */
  margin-bottom: 40px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 20px;
  background: #c19666;
  box-shadow: 0px 4px 10px rgba(47, 63, 100, 0.2);
  border-radius: 3px;
`

export const SearchInput = styled.TextInput`
  font-size: 16px;
  font-family: Roboto_300Light;
  background: #c19666;
  color: #fff;
`

export const ChaptersContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 10px;
`

export const ChapterItem = styled.TouchableOpacity`
  width: 49%;
  height: 100px;
  margin-bottom: 10px;
  background: rgba(181, 201, 242, 0.1);
  border: 1px solid rgba(181, 201, 242, 0.2);
  align-items: center;
  justify-content: center;
`

export const ChapterInitials = styled.Text`
  font-family: Roboto_700Bold;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;

  color: #2f3f64;
`

export const ChapterName = styled.Text`
  font-family: Roboto_300Light;
  color: #2f3f64;
  text-align: center;
`
