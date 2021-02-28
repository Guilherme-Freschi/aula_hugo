import React from 'react';
import {
   SafeAreaView,
   StyleSheet,
   View,
   Text,
   Image,
   touchabkeOpacity,
   Touchable
}  from 'react-native'

import {
   Header,
   LearnMoreLinks,
   Colors,
   DebugIntructions,
   ReloadIntructions,
}  from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
   return (
      <SafeAreaView>
         
         <View style = { styles.linhaNomeImage }>  
         
            <View style={ { flexDirection:'row', alignItems: 'center' } }>
            <Touchable>
               <View>
                  <Image 
                     style={{ width: 55, height: 55, borderRadius: 50 }}
                     source={{
                        uri: 'https://cdn.diariodolitoral.com.br/upload/dn_arquivo/2021/02/joao-kleber-974.jpg'
                     }}  
                  
                     />
               </View>
            </Touchable>
            
            <text style = { styles.nomeUsuario }>Guilherme de Ciesco Freschi</text>
            
            </View>
            
            <Touchable>
               <View>
                  <text style = { { FontSize: 30, color: '#c4c4c4' } }>...</text>
               </View>
            </Touchable>

         </View>   


         <View>
            <image
               style={styles.fotoPost}
               source={{
                  uri: 'data:image/jpeg;base64,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'
               }}
            />
         </View>
      </SafeAreaView>
   );
};
const styles = StyleSheet.create( { 
   fotoPost: {
      width: '100%',
      height: 350 
   },
   linhaNomeImage:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 10,
      alignItems: 'center', 
      marginBottom: 10
   },
   nomeUsuario:{ 
      fontSize: 18,
      color: '#000',
      marginLeft: 10,
      fontWeight: 'bold'
   }
} );

export default App;