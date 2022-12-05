import { Stack, useHref, useLink } from 'expo-router';
import {Box, Button} from 'native-base';

export default function Page() {

  const link = useLink();
  const bla = useHref()
  //console.log(bla)



  return (
    <Box bg="COLOR_1" flex="1" px="2" alignItems='center' justifyContent='center' >

      <Stack.Screen options={{presentation:'modal' }} />


      <Button onPress={() => link.back()}>Go back </Button>

    </Box>
  );
}
