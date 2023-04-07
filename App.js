import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import { BottomTab } from './src/navigation/BottomTab'
import { MenuDrawer } from './src/navigation/MenuDrawer'
import AuthStack from './src/navigation/AuthStack'
//import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
// import 'react-native-gesture-handler';
// const App = () => {
//   return (
//     <NavigationContainer>
//       <BottomTab/>
//     </NavigationContainer>
//   )
// }

const App = () => {
  return(
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  )
}
export default App;