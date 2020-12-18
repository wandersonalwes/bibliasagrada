import React, {useEffect} from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Feather } from "@expo/vector-icons";
import {AdMobInterstitial} from "expo-ads-admob";
import { getBook, getBookName } from '../../services/api';

import { HeaderContainer, HeaderContent, HeaderTitle, TitleContainer, Title, ChaptersContainer, ChapterItem, ChaptersText } from './styles';

const Chapters = () => { 

  const navigation = useNavigation();
  const route = useRoute();

  const { bookAbbrev } = route.params;

  function handleNavigateBack() {
    return navigation.goBack();
  }

  function handleNavigateToVerses(index) {
    return navigation.navigate('Verses', { index, bookAbbrev });
  }

  useEffect(() => {
    async function loadAd() {
      await AdMobInterstitial.setAdUnitID(
        "ca-app-pub-3940256099942544/8691691433"
      );
      InterstitialAd();
    }

    loadAd();
  }, []);

  async function InterstitialAd() {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#C19666" />
      <HeaderContainer>
        <HeaderContent onPress={() => handleNavigateBack()}>
          <Feather name="chevron-left" size={24} color="#fff" />
          <HeaderTitle>{getBookName(bookAbbrev)}</HeaderTitle>
        </HeaderContent>
      </HeaderContainer>

      <TitleContainer>
        <Feather name="book-open" size={24} color="#555" />
        <Title>Selecione um capítulo</Title>
      </TitleContainer>

      <ScrollView>
        <ChaptersContainer>
          {getBook(bookAbbrev).map(book => book.chapters.map((chapter, index) => {
            const chapterNumber = index + 1;
            return (
              <ChapterItem key={index} onPress={() => handleNavigateToVerses(index)}>
                <ChaptersText>{chapterNumber}</ChaptersText>
              </ChapterItem>
            )
          }))}
        </ChaptersContainer>
      </ScrollView>
    </>);
}

export default Chapters;