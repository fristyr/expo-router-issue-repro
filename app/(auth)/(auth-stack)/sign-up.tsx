import {Stack, useLink} from 'expo-router';
import {Box, Button} from 'native-base';

export default function Page() {
  const link = useLink();

  return (
    <Box bg="COLOR_1" flex="1" px="2" alignItems='center' justifyContent='center' >


      <Button onPress={() => link.back()}>Go back </Button>
    </Box>
  );
}
