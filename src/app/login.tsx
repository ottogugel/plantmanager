import { Button } from "@/components/Button";
import { useAuth } from "@/contexts/AuthContext";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      Alert.alert("Preencha email e senha.");
      return;
    }
    try {
      setLoading(true);
      await signIn(email, password);
      router.replace("/plant-select");
    } catch (error) {
      console.log("Erro ao acessar a conta:", error)
      Alert.alert("Não foi possível entrar. Verifique email e senha.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView className="flex-1 bg-white items-center justify-center px-8">
        <Text className="text-2xl font-bold text-gray-800 mb-8">Entrar</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#9E9E9E"
          autoCapitalize="none"
          keyboardType="email-address"
          className="w-full border-b border-gray-400 text-lg text-gray-800 pb-3 mb-6"
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          placeholderTextColor="#9E9E9E"
          secureTextEntry
          className="w-full border-b border-gray-400 text-lg text-gray-800 pb-3 mb-8"
        />

        <View className="w-full mb-6">
          <Button
            title={loading ? "Entrando..." : "Entrar"}
            disabled={loading}
            onPress={handleLogin}
          />
        </View>

        <Link href="/register" className="text-green-main text-sm">
          Não tem conta? Cadastre-se
        </Link>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}