import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/Button";

export default function Confirmation() {
  const { name } = useLocalSearchParams<{ name: string }>();

function handleStart() {
  router.push({
    pathname: "/plant-select",
    params: { name },
  });
}

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center px-8">
      <Text className="text-7xl mb-6">😁</Text>

      <Text className="text-2xl font-bold text-gray-800 mb-3">
        Prontinho{name ? `, ${name}` : ""}
      </Text>

      <Text className="text-gray-600 text-center text-base mb-10">
        Agora vamos começar a cuidar das suas{"\n"}plantinhas com muito
        cuidado.
      </Text>

      <View className="w-full">
        <Button title="Começar" onPress={handleStart} />
      </View>
    </SafeAreaView>
  );
}