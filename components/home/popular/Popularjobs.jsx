import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import styles from "./popularjob.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { COLORS, SIZES } from "../../../constants";
import useFetchHook from "../../../hook/useFetchHook"

const Popularjobs = () => { 
  const [selectedJob, setSelectedJob] = useState(); 
  const router = useRouter();
  
  const { error, loading, refetch, data } = useFetchHook('search', {
    query: 'React Developer',
    num_pages: 1,
    page: 1,
  })

  const handlePress = (item) => {
    setSelectedJob(item?.job_id);
    router.push(`job-details/${item?.job_id}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View stye={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text> Something went wrong.</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handlePress={handlePress}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{
              columnGap: SIZES.medium,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
