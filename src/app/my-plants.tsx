import { View, Text, Pressable } from "react-native";
import { useAuth } from "@/contexts/AuthContext";

export default function MyPlants() {
  const { signOut } = useAuth();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl">Próxima tela: Minhas plantinhas</Text>
      <Pressable onPress={signOut} className="w-10 h-10 rounded-full bg-shape items-center justify-center">
        <Text>🚪</Text>
      </Pressable>
    </View>
  );
}