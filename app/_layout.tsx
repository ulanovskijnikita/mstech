import container from '@/apps/api/di/container';
import InversifyContext from '@/shared/api/context/InvesifyContext';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export default function RootLayout() {

  return (

    <InversifyContext.Provider value={container}>

      <Stack>
      
        <Stack.Screen name="index" options={{ headerShown: false }} />

        <Stack.Screen name="paywall" options={{ headerShown: false }} />

        <Stack.Screen name="main" options={{ headerShown: false }} />
      </Stack>
    </InversifyContext.Provider>
  )
}