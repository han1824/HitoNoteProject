import { StyleSheet, Text, View } from "react-native";
import { HitoNoteList } from "./src/screens/HitoNoteList";
import { FriendPage } from "./src/screens/FriendPage";
import { Add } from "./src/screens/FriendPage";

export default function App() {
  return (
    <View style={styles.container}>
      <HitoNoteList />
      {/* <FriendPage /> */}
      {/* <Add /> */}
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
