import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in-password"
        options={{
          // Hide the header for all other routes.
          headerShown: false,
          presentation:'modal'

        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          // Set the presentation mode to modal for our modal route.
          headerShown: false,
          presentation:'modal'

        }}
      />
    </Stack>
  );
}