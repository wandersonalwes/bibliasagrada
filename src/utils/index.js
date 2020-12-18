import Constants from 'expo-constants'

export const adUnitID = (testID, productionID) => {
  // eslint-disable-next-line no-undef
  return Constants.isDevice && !__DEV__ ? productionID : testID
}
