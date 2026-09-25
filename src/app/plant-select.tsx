import { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";

import { EnvironmentButton } from "@/components/EnvironmentButton";
import { PlantCardPrimary } from "@/components/PlantCardPrimary";
import { environments } from "@/utils/environments";
import { plants } from "@/utils/plants";

export default function PlantSelect() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const [selectedEnv, setSelectedEnv] = useState("all");

  const filteredPlants =
    selectedEnv === "all"
      ? plants
      : plants.filter((plant) => plant.environments.includes(selectedEnv));

  function handleSelectPlant(plantId: string) {
    router.push({
      pathname: "/plant",
      params: { id: plantId },
    });
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="px-8 pt-4">
        <View className="flex-row items-center justify-between mb-6">
          <Text className="text-2xl font-bold text-gray-800">
            Olá,{"\n"}
            {name ?? "visitante"}
          </Text>
          <View className="w-12 h-12 rounded-full bg-green-light items-center justify-center">
            <Text className="text-xl">🙂</Text>
          </View>
        </View>

        <Text className="text-gray-600 mb-4">
          Em qual ambiente você quer colocar sua planta?
        </Text>
      </View>

      <FlatList
        data={[{ key: "all", name: "Todos" }, ...environments]}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        renderItem={({ item }) => (
          <EnvironmentButton
            title={item.name}
            active={selectedEnv === item.key}
            onPress={() => setSelectedEnv(item.key)}
          />
        )}
      />

      <FlatList
        data={filteredPlants}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 24 }}
        renderItem={({ item }) => (
          <PlantCardPrimary
            name={item.name}
            onPress={() => handleSelectPlant(item.id)}
          />
        )}
      />
    </SafeAreaView>
  );
}