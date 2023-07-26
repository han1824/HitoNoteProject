import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
// アイコンの読み込み
import Icon from "react-native-vector-icons/AntDesign";
// DBの読み込み
// import { db } from "../../firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";

export const HitoNoteList = () => {
  const sampleData = [
    { id: "1", name: "柿原徹也" },
    { id: "2", name: "金澤桃子" },
    { id: "3", name: "木村良平" },
  ];

  // ハンバーガーメニュー
  const menu = () => {
    console.log("menuがタッチされました");
  };

  // 編集ページにジャンプする予定
  const edit = () => {
    console.log("editがタッチされました");
  };

  // タグ検索ページにジャンプする予定
  const tags = () => {
    console.log("tagsがタッチされました");
  };

  // 人物追加ページにジャンプする予定j
  const add = () => {
    console.log("addがタッチされました");
  };

  // 人物検索ページにジャンプする予定
  const serch = () => {
    console.log("serchがタッチされました");
  };

  return (
    <View style={styles.container}>
      {/* ハンバーガーエリア */}
      <View style={styles.hamburgerArea}>
        <View style={styles.hamburger}>
          <TouchableOpacity onPress={menu}>
            <View style={styles.hamburger1}></View>
            <View style={styles.hamburger2}></View>
            <View style={styles.hamburger3}></View>
          </TouchableOpacity>
        </View>
      </View>

      {/* 見出しエリア */}
      <View style={styles.indexArea}>
        <View style={styles.index}>
          <TouchableOpacity>
            <Text style={styles.headline}>か</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* ヒトノートエリア */}
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
                <TouchableOpacity onPress={edit}>
                  <Icon name="edit" color="#00e5ff" size={40} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      {/* 人物追加情報エリア */}
      <View style={styles.addArea}>
        <View>
          <TouchableOpacity onPress={tags}>
            <Icon name="tagso" color="#fff" size={47} />
          </TouchableOpacity>
        </View>

        <View style={styles.addButton}>
          <TouchableOpacity onPress={add}>
            <Icon name="pluscircle" color="#fff" size={70} />
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={serch}>
            <Icon name="search1" color="#fff" size={37} />
          </TouchableOpacity>
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

  // ハンバーガーエリア
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

  // 見出しエリア
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

  // ヒトエリア
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

  // 人物追加エリア
  addArea: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00e5ff",
    width: "100%",
    height: "10%",
    flexDirection: "row",
  },
  addButton: {
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 80,
    height: 80,
    marginHorizontal: 55,
  },
});
