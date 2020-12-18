import styled from 'styled-components/native'
import { Platform } from 'react-native'

export const HeaderContainer = styled.View`
  background: #fff;
  padding-top: ${Platform.OS === 'ios' ? '60px' : '30px'};
  padding-bottom: 0px;
  padding-left: 30px;
  padding-right: 30px;
`

export const HeaderContent = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
export const HeaderTitle = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 18px;
  color: #aaa;
`
export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 40px;
  background: #fff;
`

export const Title = styled.Text`
  font-family: Roboto_500Medium;
  font-size: 24px;
  color: #000;
`
export const Container = styled.View`
  flex: 1;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  background: #fff;
`

export const Content = styled.Text`
  font-family: Roboto_300Light;
  line-height: 30px;
  font-size: 18px;
  color: #000;
  margin-bottom: 20px;
`

export const SubTitle = styled.Text`
  font-size: 20px;
  font-family: Roboto_500Medium;
  margin-bottom: 20px;
`
