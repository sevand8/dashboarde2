import { Text, View } from "react-native";
import ProfileDetails from "@/components/ProfileDetails";
import "../global.css";
export default function Index() {
  return (
    <View className="flex justify-center items-center bg-white-800 w-screen h-screen">
      <Text className="text-black bold text-xl"></Text>
      <View className="flex justify-center items-center bg-white w-screen h-screen">
      <ProfileDetails></ProfileDetails>
    </View>
    </View>
  );
}
