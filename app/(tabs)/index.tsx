import { StyleSheet } from 'react-native';

import HomeScreenInfo from '../../components/HomeScreenInfo';
import { Text, View } from '../../components/Themed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>TastBudThai</Text> */}
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <HomeScreenInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
