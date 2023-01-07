import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components";

import { Login } from "@/screens/Login";

import theme from "@/styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Login />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
