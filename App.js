import { StyleSheet, Text, View } from "react-native";
import { HitoNoteList } from "./src/screens/HitoNoteList";

export default function App() {
  return (
    <View style={styles.container}>
      <HitoNoteList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
