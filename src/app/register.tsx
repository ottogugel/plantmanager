import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button } from "@/components/Button";
import { useAuth } from "@/contexts/AuthContext";

export default function Register() {
    const { signUp } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleRegister() {
        if (!name.trim() || !email || !password) {
            Alert.alert("Preencha todos os campos.");
            return;
        }
        if (password.length < 6) {
            Alert.alert("A senha precisa ter pelo menos 6 caracteres.");
            return;
        }
        try {
            setLoading(true);
            await signUp(name.trim(), email, password);
            router.replace("/confirmation");
        } catch (error: any) {
            console.log("Erro ao criar conta:", error.code, error.message);

            if (error.code === "auth/email-already-in-use") {
                Alert.alert("Esse email já está cadastrado.");
            } else {
                Alert.alert("Não foi possível criar a conta.", error.message);
            }
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
                <Text className="text-5xl mb-6">😀</Text>

                <Text className="text-2xl font-bold text-gray-800 text-center mb-8">
                    Como podemos{"\n"}chamar você?
                </Text>

                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Digite um nome"
                    placeholderTextColor="#9E9E9E"
                    className="w-full border-b border-gray-400 text-center text-lg text-gray-800 pb-3 mb-6"
                />

                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor="#9E9E9E"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    className="w-full border-b border-gray-400 text-center text-lg text-gray-800 pb-3 mb-6"
                />

                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Senha (mínimo 6 caracteres)"
                    placeholderTextColor="#9E9E9E"
                    secureTextEntry
                    className="w-full border-b border-gray-400 text-center text-lg text-gray-800 pb-3 mb-8"
                />

                <View className="w-full">
                    <Button
                        title={loading ? "Criando conta..." : "Confirmar"}
                        disabled={loading}
                        onPress={handleRegister}
                    />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}