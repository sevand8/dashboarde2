import { Text, View } from "react-native";
import MoreDetails from "@/components/MoreDetails";
import ProfileDetails from "@/components/ProfileDetails";
import "../global.css";
export default function Index() {
  return (
       <View className="flex justify-center items-start bg-white-800 w-screen h-1/2">
      <View className="flex justify-center items-center bg-white w-screen h-screen">
      <ProfileDetails></ProfileDetails>
      <MoreDetails></MoreDetails>
    </View>
    </View>
  );
}
