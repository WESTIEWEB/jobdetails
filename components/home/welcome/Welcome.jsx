import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";

const jobTypes = ["Full-Time", "Part-Time", "Contract"];

const Welcome = () => {
  const [activeTab, setActiveTab] = useState("Full-Time");
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.userName,
          textTransform: "capitalize",
        }}
      >
        Hello Chibuike
      </Text>
      <Text style={styles.welcomeMessage}>Welcome, find your dream job.</Text>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
            value=""
            onChange={() => {}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeTab, item)}
              onPress={() => {
                setActiveTab(item);

                router.push(`/search/${item}`)
              }}
            >
              <Text style={
                styles.tabText(activeTab, item)
              }>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.small}}
        />
      </View>
    </View>
  );
};

export default Welcome;
