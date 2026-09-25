import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function PlantDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl">Detalhe da planta ID: {id}</Text>
    </View>
  );
}