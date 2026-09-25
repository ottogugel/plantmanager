import { Pressable, Text, PressableProps } from "react-native";

type ButtonProps = PressableProps & {
  title: string;
  disabled?: boolean;
};

export function Button({ title, disabled, ...rest }: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      className={`rounded-xl h-14 items-center justify-center active:opacity-80 ${
        disabled ? "bg-green-light" : "bg-green-main"
      }`}
      {...rest}
    >
      <Text className="text-white font-semibold text-base">{title}</Text>
    </Pressable>
  );
}