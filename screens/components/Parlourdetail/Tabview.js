import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Tabs } from 'react-native-collapsible-tab-view';

const HEADER_HEIGHT = 200;

const Tabview = () => {
  const Header = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );

  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT} // optional
    >
      <Tabs.Tab name="Tab 1">
        <View style={styles.tabContent}>
          <Text>Content of Tab 1</Text>
        </View>
      </Tabs.Tab>
      <Tabs.Tab name="Tab 2">
        <View style={styles.tabContent}>
          <Text>Content of Tab 2</Text>
        </View>
      </Tabs.Tab>
      <Tabs.Tab name="Tab 3">
        <View style={styles.tabContent}>
          <Text>Content of Tab 3</Text>
        </View>
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  tabContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tabview;
