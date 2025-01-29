import { Stack } from "expo-router";

const index = () => {
  return (
    <Stack>
      <Stack.Screen name="(matches)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default index;
