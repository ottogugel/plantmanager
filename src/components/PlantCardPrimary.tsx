import { Pressable, Text, View, PressableProps } from "react-native";

type PlantCardPrimaryProps = PressableProps & {
  name: string;
};

export function PlantCardPrimary({ name, ...rest }: PlantCardPrimaryProps) {
  return (
    <Pressable
      className="flex-1 bg-shape rounded-xl items-center justify-center py-6 m-2"
      {...rest}
    >
      <Text className="text-4xl mb-2">🌿</Text>
      <Text className="text-gray-800 font-medium text-sm">{name}</Text>
    </Pressable>
  );
}