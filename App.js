import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <View style={{ padding: 16, backgroundColor: 'green' }}>
          <Text>search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: 'blue' }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
      {/* <StatusBar /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'green',
  },
  list: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'blue',
  },
});
