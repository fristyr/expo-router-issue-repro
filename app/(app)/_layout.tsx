import {FontAwesome5} from '@expo/vector-icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Children} from 'expo-router';
import {Box, Pressable, useToken} from 'native-base';
import { Drawer } from '../../src/utils/drawer-layout';

export default function DrawerLayout() {
  const [bgColor, activeBgColor] = useToken('colors', ['COLOR_1', 'white', 'COLOR_3']);

  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: bgColor,
        },
        drawerActiveBackgroundColor: activeBgColor,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: bgColor,
        },
      }}
    >
      <Drawer.Screen name="(user)" />
    </Drawer>
  );
}
