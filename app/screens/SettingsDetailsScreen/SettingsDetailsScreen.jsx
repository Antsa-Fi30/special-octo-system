import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";
//React-navigation's element(s)
import { useRoute } from "@react-navigation/native";

const SettingsDetailsScreen = () => {
  const theme = useTheme();
  const param = useRoute().params;
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text>{param.setting?.options}</Text>
      <Text>{param.setting?.type}</Text>
    </View>
  );
};

export default SettingsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    maxHeight: "100%",
    marginTop: 10,
    margin: 5,
    padding: 8,
  },
});
