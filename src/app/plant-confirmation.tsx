import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/Button";

export default function PlantConfirmation() {
  const { name } = useLocalSearchParams<{ name: string }>();

  function handleFinish() {
    router.push("/my-plants");
  }

  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center px-8">
      <Text className="text-7xl mb-6">🤗</Text>

      <Text className="text-2xl font-bold text-gray-800 mb-3">
        Tudo certo
      </Text>

      <Text className="text-gray-600 text-center mb-10">
        Fique tranquilo que sempre vamos lembrar você de cuidar da sua
        plantinha {name} com bastante amor.
      </Text>

      <View className="w-full">
        <Button title="Muito obrigado :D" onPress={handleFinish} />
      </View>
    </SafeAreaView>
  );
}