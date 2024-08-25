import { StyleSheet, View } from 'react-native';
import MyNewComponent from '@/components/MyNewComponent';
import { Text } from '@/components/Themed';

export default function NewTabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Tab</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <MyNewComponent />
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});