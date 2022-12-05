import {useToken} from 'native-base';
import { Drawer } from '../../src/utils/drawer-layout';

export default function UserDrawerLayout() {
  const [bgColor, activeBgColor] = useToken('colors', ['COLOR_1', 'COLOR_3']);

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
      <Drawer.Screen name="(auth-tab)" />
      <Drawer.Screen name="(auth-stack)"  />


    </Drawer>
  );
}
