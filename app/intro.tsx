import { Box, Button } from "native-base";
import { useStore } from "../src/store";

export default function IntroScreen() {
  const completeIntro = () => {
    useStore.setState({ wizardCompleted: true });
  };

  return (
    <Box
      bg="COLOR_1"
      flex="1"
      alignItems="center"
      justifyContent="center"
      px="4"
    >
      <Button onPress={completeIntro}>Complete intro</Button>
    </Box>
  );
}
