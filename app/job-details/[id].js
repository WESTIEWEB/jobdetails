import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import { COLORS, SIZES, icons } from "../../constants";
import {
  About,
  Company,
  JobTabs,
  Footer,
  ScreenHeaderBtn,
  Specific,
} from "../../components";

import useFetchHook from "../../hook/useFetchHook";

const JobDetails = () => {
  const [refreshing, setRefreshing] = useState(false);

  const router = useRouter();
  const params = useLocalSearchParams();

  const { data, error, loading, refresh } = useFetchHook("job-details", {
    job_id: params.id,
  });

  console.log(data, params.id);
  const onRefresh = () => {};

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension={"60%"}
              onPress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension={"60%"}
              onPress={() => alert("Share")}
            />
          ),
          headerTitle: "",
        }}
      />
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
            }
          >
            {loading ? (
              <ActivityIndicator />
            ) : error ? (
              <Text>Something went wrong</Text>
            ) : data.length === 0 ? (
              <Text>No data found</Text>
            ) : (
              <View
                style={{
                  padding: SIZES.medium,
                  paddingBottom: 100,
                }}
              >
                <Company
                  companyLogo={data?.employer_logo}
                  jobTitle={data?.job_title}
                  companyName={data?.employer_name}
                  location={data?.job_country}
                />
                <Text>Hello</Text>
                <Text>{data?.employer_logo}</Text>

                <About />
              </View>
            )}
          </ScrollView>
        </>
    </SafeAreaView>
  );
};

export default JobDetails;
