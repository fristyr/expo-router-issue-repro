import React from "react";
import { Box, Button, Divider, HStack, Pressable, Text } from "native-base";
import { useLink } from "expo-router";

export default function AuthTabPage() {
  const link = useLink();

  const goToSignUp = () => {
    link.push("/sign-up");
  };

  const goToSignInWithPassword = () => {
    link.push("/sign-in-password");
  };

  return (
    <Box  flex="1" px="2" alignItems='center' justifyContent='center' >
      

      <Button onPress={goToSignInWithPassword}>Sign in with Password</Button>

      <HStack space="1" alignItems="center" justifyContent="center" mt="8">
        <Text textAlign="center">Don't have account yet? </Text>
        <Pressable onPress={goToSignUp}>
          <Text color='red.500' fontFamily="Ubuntu-Bold">
            Sign Up
          </Text>
        </Pressable>
      </HStack>
    </Box>
  );
}
