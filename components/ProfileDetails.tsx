import { View, Image, Text } from 'react-native'
import React from 'react'
import "../global.css";

const ProfileDetails = () => {
  return (
    <View className='flex justify-center items-center bg-white w-screen h-screen'>
      < Image source ={require("../assets/images/icon.png")} 
      className="max-w-32 max-h-32 rounded-full"
      />
      <Text className='text-black bold text-xl'> Sebastian Andrade </Text>
      <Text className='font-bold text-gray-500'>📕Estudiante📕</Text>


    </View>
  )

}

export default ProfileDetails