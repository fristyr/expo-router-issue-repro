import {Tabs} from 'expo-router';
import {FontAwesome5} from '@expo/vector-icons';


export default function Layout2() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        
      }}
    >
      <Tabs.Screen
        name="auth-tab-home"
        options={{
          title: 'auth.hometab_title_1',
          tabBarIcon: ({color, size}) => <FontAwesome5 name="home" size={size} color={color} />,
        }}
        
      />
      <Tabs.Screen
        name="auth-settings"
        options={{
          title: 'public.tab_title_2',
          tabBarIcon: ({color, size}) => <FontAwesome5 name="cog" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
