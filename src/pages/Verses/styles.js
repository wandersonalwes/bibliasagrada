import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export const HeaderContainer = styled.View`
  background: #c19666;
  padding-top: ${getStatusBarHeight(true) + 24}px;
  padding-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const ContentText = styled.Text`
  font-family: Roboto_300Light;
  line-height: 30px;
  font-size: 18px;
  color: #000;
  margin-bottom: 8px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 0px;
`

export const Title = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 24px;
  padding-left: 15px;
  color: #000;
`

export const NavigateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const NavigateBottom = styled.TouchableOpacity`
  padding: 5px;
  background: rgba(170, 129, 83, 0.6);
  border-radius: 4px;
  display: ${props => (props.disabled === true ? 'none' : 'flex')};
`
