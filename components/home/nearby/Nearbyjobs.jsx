import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

import styles from "./nearbyjob.style";
import { COLORS, SIZES } from "../../../constants";
import useFetchHook from "../../../hook/useFetchHook";
import NearByJobCard from "../../common/cards/nearby/NearByJobCard";

const Nearbyjobs = () => {
  const router = useRouter();

  const { error, loading, refetch, data } = useFetchHook("search", {
    query: "React Developer",
    num_pages: 1,
    page: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
          data?.map((job) => (
            <NearByJobCard
              stye={{ columnGap: SIZES.medium }}
              job={job}
              handleNavigate={() => router.push(`job-details/${job.job_id}`)}
              key={`nearby-job-${job.job_id}`}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
