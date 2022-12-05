import {FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import {useEffect, useState} from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  const loadResourcesAndDataAsync = async () => {
    console.log('cached resources starts')
    try {
      // Load fonts
      await Font.loadAsync({
        ...FontAwesome.font,
        'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        'Ubuntu-Bold': require('../assets/fonts/ubuntu-fonts/Ubuntu-Bold.ttf'),
        'Ubuntu-BoldItalic': require('../assets/fonts/ubuntu-fonts/Ubuntu-BoldItalic.ttf'),
        'Ubuntu-Italic': require('../assets/fonts/ubuntu-fonts/Ubuntu-Italic.ttf'),
        'Ubuntu-Light': require('../assets/fonts/ubuntu-fonts/Ubuntu-Light.ttf'),
        'Ubuntu-LightItalic': require('../assets/fonts/ubuntu-fonts/Ubuntu-LightItalic.ttf'),
        'Ubuntu-Medium': require('../assets/fonts/ubuntu-fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-MediumItalic': require('../assets/fonts/ubuntu-fonts/Ubuntu-MediumItalic.ttf'),
        'Ubuntu-Regular': require('../assets/fonts/ubuntu-fonts/Ubuntu-Regular.ttf'),
      });
      //await delay(2000)
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      console.warn(e);
    } finally {
      setLoadingComplete(true);
      console.log('cached resources finished')
    }
  };
  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
