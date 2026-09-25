import { View, Text, Image, Pressable } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-between px-8 py-12">
      <Text className="text-3xl font-bold text-gray-800 text-center mt-8">
        Gerencie suas{"\n"}plantas de forma fácil
      </Text>

      {/* Substitua pela ilustração exportada do Figma */}
      <View className="w-64 h-64 bg-green-light rounded-full items-center justify-center">
        <Image source={require("@/assets/images/ilustra.png")} />
      </View>

      <View className="items-center">
        <Text className="text-gray-600 text-center text-base mb-8">
          Não esqueça mais de regar suas plantas.{"\n"}
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <Pressable
          onPress={() => router.push("/user-identification")}
          className="bg-green-main w-14 h-14 rounded-2xl items-center justify-center active:opacity-80"
        >
          <Text className="text-white text-2xl">→</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}