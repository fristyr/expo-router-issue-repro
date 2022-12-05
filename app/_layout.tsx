import React from "react";
import { Layout, SplashScreen } from "expo-router";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { NativeBaseProvider } from "native-base";
import { useStore } from "../src/store";
import useCachedResources from "../src/hooks/useCachedResources";

export default function RootLayout() {
  //Hooks
  const isLoadingComplete = useCachedResources();
  //Store selectors
  const hasHydrated = useStore.useHasHydrated();
  const isSignedIn = useStore.useIsSignedIn();
  const wizardCompleted = useStore.useWizardCompleted();

  return (
    <React.Fragment>
      {/* When all loading is setup, unmount the splash screen component. */}
      {!isLoadingComplete && !hasHydrated && <SplashScreen />}

      {isLoadingComplete && hasHydrated && (
        <Animated.View entering={SlideInLeft.delay(400)} style={{ flex: 1 }}>
          <NativeBaseProvider>
            <Layout>
              <Layout.Screen
                name="intro"
                // When intro/wizard setup completed, restrict access to the intro page.
                redirect={wizardCompleted}
              />
              <Layout.Screen
                name="(app)"
                // When the auth is unavailable (no user signed in), restrict access to all the routes in the `(app)` directory.
                redirect={!isSignedIn || !wizardCompleted}
              />

              <Layout.Screen
                name="(auth)"
                // When the auth is available (user is signed in), restrict access to the sign-in page.
                redirect={!isSignedIn && !wizardCompleted}
              />

              <Layout.Children />
            </Layout>
          </NativeBaseProvider>
        </Animated.View>
      )}
    </React.Fragment>
  );
}
