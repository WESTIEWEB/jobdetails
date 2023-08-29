import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import { Stack, useRouter} from 'expo-router';

import { images, icons, COLORS, FONT, SIZES, SHADOWS } from '../constants';
import { Nearbyjobs, Popularjobs, Welcome, ScreenHeaderBtn } from '../components';

const Home = () => {
    const router = useRouter();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite, alignItems: 'center', justifyContent: 'center'}}>
      <Stack.Screen
        options={{
            headerStyle: {
                backgroundColor: COLORS.lightWhite
            },
            headerShadowVisible: false,
            headerLeft: () => (
                <ScreenHeaderBtn iconUrl={icons.menu} dimension={'60%'}/>
            ),
            headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimension={'100%'}/>
            ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
            flex: 1,
            padding: SIZES.medium
        }}>
            <Welcome />
            <Popularjobs />
            <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
