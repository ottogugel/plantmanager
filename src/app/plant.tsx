import { useState } from "react";
import { View, Text, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import DateTimePicker, {
  DateTimePickerChangeEvent,
} from "@react-native-community/datetimepicker";
import { Button } from "@/components/Button";
import { plants } from "@/utils/plants";

export default function PlantDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const plant = plants.find((item) => item.id === id);

  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(Platform.OS === "ios");

  function handleChangeTime(event: DateTimePickerChangeEvent, date: Date) {
  if (Platform.OS === "android") {
    setShowPicker(false);
  }
  if (date) {
    setSelectedTime(date);
  }
}

  function handleRegister() {
    router.push({
      pathname: "/plant-confirmation",
      params: { name: plant?.name },
    });
  }

  if (!plant) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text>Planta não encontrada.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white px-8">
      <View className="items-center mt-8">
        <Text className="text-6xl mb-4">🌿</Text>

        <Text className="text-2xl font-bold text-gray-800 mb-3">
          {plant.name}
        </Text>

        <Text className="text-gray-600 text-center mb-6">
          {plant.about}
        </Text>
      </View>

      <View className="bg-blue-light rounded-xl p-4 flex-row items-center mb-8">
        <Text className="text-2xl mr-3">💧</Text>
        <Text className="flex-1 text-blue-main text-sm">
          {plant.water_tip}
        </Text>
      </View>

      <Text className="text-gray-600 mb-4">
        Escolha o melhor horário para ser lembrado:
      </Text>

      {Platform.OS === "android" && !showPicker && (
        <Button
          title={selectedTime.toLocaleTimeString().slice(0, 5)}
          onPress={() => setShowPicker(true)}
        />
      )}

      {showPicker && (
<DateTimePicker
  value={selectedTime}
  mode="time"
  is24Hour
  onValueChange={handleChangeTime}
/>
      )}

      <View className="mt-auto mb-8">
        <Button title="Cadastrar planta" onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );
}