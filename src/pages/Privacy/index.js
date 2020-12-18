import React from 'react'
import { ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Content,
  SubTitle,
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  TitleContainer,
  Title,
} from './styles'

const Privacy = () => {
  const navigation = useNavigation()

  function handleNavigateBack() {
    return navigation.goBack()
  }
  return (
    <>
      <HeaderContainer>
        <HeaderContent onPress={() => handleNavigateBack()}>
          <Feather name="chevron-left" size={24} color="#aaa" />
          <HeaderTitle>Voltar</HeaderTitle>
        </HeaderContent>
      </HeaderContainer>

      <TitleContainer>
        <Title>Politica de Privacidade</Title>
      </TitleContainer>

      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Content>
            Este serviço é fornecido por Wanderson Alves sem nenhum custo e é
            destinado para uso como é.
          </Content>

          <Content>
            Esta página é usada para informar os visitantes sobre nossas
            políticas com a coleta, uso e divulgação de Informações Pessoais,
            caso alguém decida usar nosso Serviço.
          </Content>

          <Content>
            Se você optar por usar nosso Serviço, concordará com a coleta e uso
            de informações relacionadas a essa política. As Informações Pessoais
            que coletamos são usadas para fornecer e melhorar o Serviço. Nós não
            usaremos ou compartilharemos suas informações com ninguém, exceto
            conforme descrito nesta Política de Privacidade.
          </Content>

          <Content>
            Os termos usados ​​nesta Política de Privacidade têm os mesmos
            significados que os nossos Termos e Condições, que podem ser
            acessados ​​neste aplicativo, a menos que definido de outra forma
            nesta Política de Privacidade.
          </Content>

          <SubTitle>Recolha e Uso de Informação</SubTitle>

          <Content>
            Para uma melhor experiência, ao usar nosso Serviço, podemos exigir
            que você nos forneça algumas informações pessoalmente
            identificáveis. As informações que solicitamos serão retidas por nós
            e usadas conforme descrito nesta política de privacidade.
          </Content>

          <Content>
            O aplicativo usa serviços de terceiros que podem coletar informações
            usadas para identificá-lo.
          </Content>

          <Content>
            Vincule à política de privacidade de provedores de serviços de
            terceiros usados ​​pelo aplicativo.
          </Content>

          <SubTitle>Dados de Log</SubTitle>

          <Content>
            Queremos informá-lo que sempre que você usar o nosso serviço, em
            caso de erro no aplicativo, coletamos dados e informações (através
            de produtos de terceiros) em seu telefone chamado Log Data. Esses
            dados de registro podem incluir informações como o endereço IP do
            dispositivo, o nome do dispositivo, a versão do sistema operacional,
            a configuração do aplicativo ao utilizar nosso serviço, a hora e a
            data do seu uso do serviço e outras estatísticas.
          </Content>

          <SubTitle>Cookies</SubTitle>

          <Content>
            Cookies são arquivos com uma pequena quantidade de dados que são
            comumente usados ​​como identificadores exclusivos anônimos. Estes
            são enviados para o seu navegador a partir dos sites que você visita
            e são armazenados na memória interna do seu dispositivo.
          </Content>

          <Content>
            Este serviço não usa esses “cookies” explicitamente. No entanto, o
            aplicativo pode usar código de terceiros e bibliotecas que usam
            "cookies" para coletar informações e melhorar seus serviços. Você
            tem a opção de aceitar ou recusar esses cookies e saber quando um
            cookie está sendo enviado para o seu dispositivo. Se você optar por
            recusar nossos cookies, talvez não consiga usar algumas partes deste
            Serviço.
          </Content>

          <SubTitle>Provedores de serviço</SubTitle>

          <Content>
            Podemos empregar empresas e indivíduos de terceiros pelos seguintes
            motivos:
          </Content>

          <Content>Para facilitar o nosso serviço;</Content>
          <Content> Para fornecer o serviço em nosso nome;</Content>
          <Content>Para executar serviços relacionados a serviços; ou</Content>
          <Content>
            Para nos ajudar a analisar como nosso Serviço é usado.
          </Content>

          <Content>
            Queremos informar aos usuários deste Serviço que esses terceiros
            tenham acesso às suas Informações Pessoais. O motivo é executar as
            tarefas atribuídas a eles em nosso nome. No entanto, eles são
            obrigados a não divulgar ou usar as informações para qualquer outra
            finalidade.
          </Content>

          <SubTitle>Segurança</SubTitle>

          <Content>
            Valorizamos sua confiança ao nos fornecer suas Informações Pessoais,
            e por isso estamos nos esforçando para usar meios comercialmente
            aceitáveis ​​de protegê-los. Mas lembre-se de que nenhum método de
            transmissão pela internet ou método de armazenamento eletrônico é
            100% seguro e confiável, e não podemos garantir sua segurança
            absoluta.
          </Content>
          <SubTitle>Links para outros sites</SubTitle>

          <Content>
            Este Serviço pode conter links para outros sites. Se você clicar em
            um link de terceiros, você será direcionado para esse site. Observe
            que esses sites externos não são operados por nós. Portanto,
            recomendamos que você analise a Política de Privacidade desses
            sites. Não temos controle e não assumimos nenhuma responsabilidade
            pelo conteúdo, políticas de privacidade ou práticas de quaisquer
            sites ou serviços de terceiros.
          </Content>

          <SubTitle>
            Permissões para acessar dados do dispositivo e localização do GPS
            (*)
          </SubTitle>

          <Content>
            Se você usar este aplicativo aplicativos móveis, pediremos permissão
            para acessar algumas informações do dispositivo, como a localização
            por GPS. Usamos essas informações para fornecer uma experiência
            personalizada da Bíblia off-line. Podemos combinar essas informações
            com informações de terceiros para proporcionar uma melhor
            experiência e melhorar a qualidade de nossos serviços. Por exemplo,
            para consultar igrejas próximas, nosso aplicativo pede sua
            localização GPS. Não compartilhamos suas informações pessoalmente
            identificáveis ​​com a identificação ou o local do seu dispositivo
            sem sua permissão explícita.
          </Content>

          <SubTitle>Alterações a esta política de privacidade</SubTitle>

          <Content>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos.
            Assim, aconselhamos que você revise esta página periodicamente para
            quaisquer alterações. Vamos notificá-lo de quaisquer alterações,
            publicando a nova Política de Privacidade nesta página. Estas
            alterações entram em vigor imediatamente após serem publicadas nesta
            página.
          </Content>

          <SubTitle>Contate-Nos</SubTitle>

          <Content>
            Se você tiver dúvidas ou sugestões sobre nossa Política de
            Privacidade, não hesite em nos contatar.
          </Content>

          <Content>wandersonalwes@hotmail.com</Content>

          <Content>
            (*) - Aplicável apenas ao aplicativo da Bíblia Sagrada
          </Content>
        </ScrollView>
      </Container>
    </>
  )
}

export default Privacy
