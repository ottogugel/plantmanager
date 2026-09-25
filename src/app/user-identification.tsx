import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button } from "@/components/Button";

export default function UserIdentification() {
  const [name, setName] = useState("");

  const isFilled = name.trim().length > 0;

  function handleConfirm() {
    if (!isFilled) return;
    router.push({
      pathname: "/confirmation",
      params: { name: name.trim() },
    });
  }

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView className="flex-1 bg-white items-center justify-center px-8">
        <Text className="text-5xl mb-6">{isFilled ? "😄" : "😀"}</Text>

        <Text className="text-2xl font-bold text-gray-800 text-center mb-8">
          Como podemos{"\n"}chamar você?
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Digite um nome"
          placeholderTextColor="#9E9E9E"
          className="w-full border-b border-gray-400 text-center text-lg text-gray-800 pb-3 mb-8"
        />

        <View className="w-full">
          <Button
            title="Confirmar"
            disabled={!isFilled}
            onPress={handleConfirm}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}