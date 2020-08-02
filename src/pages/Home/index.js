import React, { useState } from 'react';
import { StatusBar, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchContainer, SearchInput, ChaptersContainer, ChapterItem, ChapterName, ChapterInitials, HeaderContainer, AppName } from './styles';
import { Feather } from '@expo/vector-icons';
import books from '../../services/api';


const Home = () => {
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    function handleNavigateChapter(bookAbbrev) {
        return navigation.navigate('Chapters', { bookAbbrev });
    }

    function handleAccentRemoval (text) {       
        text = text.toLowerCase().trim();                                                         
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        text = text.replace(new RegExp('[Ç]','gi'), 'c');
        return text;
    }

    function handleToogleDrawer() {
        return navigation.openDrawer();
    }
    
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={{backgroundColor: "#fff", flex: 1}}>
                <HeaderContainer onPress={() => handleToogleDrawer()}>
                    <Feather name="menu" size={24} color="#2F3F64" />
                    <AppName>Biblia Sagrada</AppName>
                </HeaderContainer>
                <SearchContainer>
                    <SearchInput
                        placeholder="Buscar livro..."
                        placeholderTextColor="#fff"
                        onChangeText={text => setSearch(text)}
                        value={search}
                        autoCorrect={false}
                    />
                    
                    <Feather name="search" size={24} color="#fff" />
                        
                </SearchContainer>
                    
                <ScrollView vertical={true} >
                
                    <ChaptersContainer>

                        {
                            books
                                .filter(book => handleAccentRemoval(book.name).indexOf(handleAccentRemoval(search)) > -1)
                                
                                .map(filteredBook => (
                                    <ChapterItem key={filteredBook.abbrev} onPress={() => handleNavigateChapter(filteredBook.abbrev) }>
                                        <ChapterInitials>{filteredBook.abbrev}</ChapterInitials>
                                        <ChapterName>{filteredBook.name}</ChapterName>
                                    </ChapterItem>
                                ))
                        }
                            
                    </ChaptersContainer>

                    </ScrollView>
                </View>
        </>
  )
}

export default Home;