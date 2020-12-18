import React, {useState} from 'react';
import { ScrollView, TouchableOpacity, Alert, Clipboard, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { AdMobBanner } from "expo-ads-admob";
import { getBookName, getBook, getTotalChapters } from '../../services/api';

import {
  HeaderContainer,
  HeaderTitle,
  HeaderContent,
  ContentText,
  TitleContainer,
  Title,
  NavigateContainer,
  NavigateBottom,
} from "./styles";

const Verses = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { bookAbbrev, index } = route.params;

  const [indexCurrent, setIndexCurrent] = useState(index);

  function handleNavigateToHome() {
    return navigation.navigate('Home');
  }

  function handleNavigateToNext() {
    if (indexCurrent >= getTotalChapters(bookAbbrev) -1) {
      return
    } else {
      setIndexCurrent(indexCurrent + 1)
    }
  }

  function handleNavigateToBack() {
    if (indexCurrent <= 0) {
      return
    } else {
      setIndexCurrent(indexCurrent - 1)
    }
  }

    function handleCopyVerse(verseText, verseNumber) {
    const message = `${verseText}\n\n${getBookName(bookAbbrev)}, ${indexCurrent + 1}:${verseNumber}`;

    return Alert.alert(
      "Deseja copiar este versículo?",
      `${message}`,
      [
        {
          text: "Cancelar",
          onPress: () => console.log("cancel"),
          style: "cancel",
        },
        { 
          text: "Copiar",
          onPress: () => Clipboard.setString(message),
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent onPress={() => handleNavigateToHome()}>
          <HeaderTitle>
            {getBookName(bookAbbrev)}, {indexCurrent + 1}
          </HeaderTitle>
          <Feather name="chevron-down" size={24} color="#fff" />
        </HeaderContent>

        <NavigateContainer>
          <NavigateBottom disabled={indexCurrent === 0 ? true : false}
            onPress={() => handleNavigateToBack()}
            style={{ marginRight: 5 }}
          >
            <Feather name="chevron-left" size={24} color="#fff" />
          </NavigateBottom>

          <NavigateBottom disabled={getTotalChapters(bookAbbrev) -1 === indexCurrent ? true : false} onPress={() => handleNavigateToNext()}>
            <Feather name="chevron-right" size={24} color="#fff" />
          </NavigateBottom>
        </NavigateContainer>
      </HeaderContainer>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 40, paddingBottom: 40 }}>
        <TitleContainer>
          <Feather name="book-open" size={24} color="#555" />
          <Title>
            {getBookName(bookAbbrev)}, {indexCurrent + 1}
          </Title>
        </TitleContainer>

        {
          getBook(bookAbbrev).map(book => {
            const chapter = book.chapters[indexCurrent];

            return chapter.map((verse, index) => {
              const verseNumber = index + 1;

              return (
                <TouchableOpacity key={index} onPress={() => handleCopyVerse(verse, verseNumber)}>
                  <ContentText>{verseNumber}. {verse}</ContentText>
                </TouchableOpacity>
              )
            })
          })
        }

      </ScrollView>

      <View style={{ alignItems: "center"}}>
        <AdMobBanner
          bannerSize="banner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          servePersonalizedAds
          onDidFailToReceiveAdWithError={(error) => console.log(error)}
        />
      </View>
    </>
  );
}

export default Verses;