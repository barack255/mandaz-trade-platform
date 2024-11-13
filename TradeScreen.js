import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const TradeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Trade Screen</Text>
      {/* Add trading functionality here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TradeScreen;
