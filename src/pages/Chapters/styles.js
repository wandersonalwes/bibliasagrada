import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const HeaderContainer = styled.View`
  background: #c19666;
  padding-top: ${getStatusBarHeight(true) + 24}px;
  padding-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;
`

export const HeaderContent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

export const HeaderTitle = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 18px;
  color: #fff;
`
export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 24px;
`

export const Title = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 24px;
  padding-left: 15px;
  color: #000;
`

export const ChaptersContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 24px 10px;
`

export const ChapterItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 90px;
  height: 90px;
`

export const ChaptersText = styled.Text`
  font-size: 20px;
  font-family: Roboto_700Bold;

  color: #2f3f64;
`
