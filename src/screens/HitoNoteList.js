import { StyleSheet, Text, View, FlatList } from "react-native";
// アイコンの読み込み
import Icon from "react-native-vector-icons/AntDesign";

export const HitoNoteList = () => {
  const sampleData = [
    { id: "1", name: "柿原徹也" },
    { id: "2", name: "金澤桃子" },
    { id: "3", name: "木村良平" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.hamburgerArea}>
        <View style={styles.hamburger}>
          <View style={styles.hamburger1}></View>
          <View style={styles.hamburger2}></View>
          <View style={styles.hamburger3}></View>
        </View>
      </View>

      <View style={styles.indexArea}>
        <View style={styles.index}>
          <Text style={styles.headline}>か</Text>
        </View>
      </View>

      <View style={styles.hitoArea}>
        <FlatList
          data={sampleData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.hitos}>
              <View>
                <Text style={styles.hito}>{item.name}</Text>
              </View>
              <View>
                <Icon name="edit" color="#00e5ff" size={40} />
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.addArea}>
        <View style={styles.addButton}>
          <Icon name="pluscircle" color="#fff" size={70} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F000",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  hamburgerArea: {
    alignItems: "left",
    justifyContent: "flex-end",
    // backgroundColor: "green",
    width: "100%",
    height: "12%",
  },
  hamburger: {
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "#fff",
    width: 80,
    height: "80%",
  },

  hamburger1: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00e5ff",
    width: 35,
    height: 5,
    borderRadius: 3,
    marginBottom: 5,
  },
  hamburger2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00e5ff",
    width: 35,
    height: 5,
    borderRadius: 3,
    marginBottom: 5,
  },
  hamburger3: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00e5ff",
    width: 35,
    height: 5,
    borderRadius: 3,
    marginBottom: 20,
  },

  indexArea: {
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "blue",
    width: "100%",
    height: "8%",
  },
  index: {
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
    width: "80%",
    height: 50,
    borderWidth: 3,
    borderColor: "#00e5ff",
    borderStyle: "dashed",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  headline: {
    fontSize: 30,
  },
  hitoArea: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0f7fa",
    width: "100%",
    height: "70%",
    paddingTop: 10,
  },

  hitos: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#00bcd4",
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    width: 350,
    height: 60,
    backgroundColor: "#fff",
  },
  hito: {
    fontSize: 25,
    width: 230,
    // padding: 15,
    // margin: 10,
  },
  addArea: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00e5ff",
    width: "100%",
    height: "10%",
  },
  addButton: {
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 80,
    height: 80,
  },
});
