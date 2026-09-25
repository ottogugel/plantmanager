import { Pressable, Text, PressableProps } from "react-native";

type EnvironmentButtonProps = PressableProps & {
  title: string;
  active?: boolean;
};

export function EnvironmentButton({
  title,
  active,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <Pressable
      className={`px-5 h-10 rounded-full items-center justify-center mr-3 ${
        active ? "bg-green-main" : "bg-shape"
      }`}
      {...rest}
    >
      <Text
        className={`text-sm font-medium ${
          active ? "text-white" : "text-gray-600"
        }`}
      >
        {title}
      </Text>
    </Pressable>
  );
}