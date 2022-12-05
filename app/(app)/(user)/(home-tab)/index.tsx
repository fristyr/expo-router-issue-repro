import {useRoute} from '@react-navigation/native';
import {Link, useLink, Tabs, RootContainer} from 'expo-router';
import {Box, Button, ScrollView, Text, View} from 'native-base';
import Animated, {FadeIn, SlideInLeft, SlideOutRight} from 'react-native-reanimated';
import { useStore } from '../../../../src/store';

export default function HomeTabPage() {
  const link = useLink();
  
  return (
    <Box bg="COLOR_1" flex="1">

      <Animated.View
       // entering={FadeIn.delay(animationTiming.xl).duration(animationTiming.xl)}
        //exiting={SlideOutRight.duration(animationTiming.xl)}
      >
        <Button
          onPress={() => {
            useStore.setState({isSignedIn: false});
          }}
        >
          Logout
        </Button>

        <Button
          onPress={() => {
            link.push('_sitemap');
          }}
          mt="12"
        >
          DEV ROUTES
        </Button>

        <Button
          onPress={() => {
            console.log('press')
            link.push('wizard');
          }}
          mt="12"
        >
         Test
        </Button>
      </Animated.View>
    </Box>
  );
}
