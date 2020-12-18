import Constants from 'expo-constants';

export const adUnitID = (testID, productionID) => {
  return Constants.isDevice && !__DEV__ ? productionID : testID;
}