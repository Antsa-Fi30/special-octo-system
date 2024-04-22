import React, { useState, useEffect } from "react";

//React Native components
import { StyleSheet } from "react-native";

//React Navigation
import { useNavigation, useRoute } from "@react-navigation/native";

//react-native paper
import { Appbar } from "react-native-paper";
import { useTheme } from "react-native-paper";

export default function AppTopBar({ toggleTheme }) {
  const [showBack, setShowBack] = useState(false);
  const [showSettings, setShowSettings] = useState(true);
  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();

  useEffect(() => {
    setShowBack(route.name != "Dish Detective");

    //Limit settings pages
    if (route.name === "Dish Detective") {
      setShowSettings(true);
    } else {
      setShowSettings(false);
    }
  }, [route]);

  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.background,
        padding: 10,
        paddingVertical: 14,
      }}
    >
      {showBack && <Appbar.BackAction onPress={() => navigation.goBack()} />}
      <Appbar.Content title={route.name} />
      {showSettings && (
        <Appbar.Action icon="cog" onPress={() => navigation.push("Settings")} />
      )}
      <Appbar.Action icon="theme-light-dark" onPress={toggleTheme} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({});
