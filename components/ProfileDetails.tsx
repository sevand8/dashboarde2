import React from 'react';
import { Image, Text, View, useColorScheme } from 'react-native';
import "../global.css";
import IconButton from './IconButton';

const ProfileDetails = () => {
  return (
    <View className='flex justify-center items-center bg-white w-screen h-screen'>
      < Image source ={require("../assets/images/icon.png")} 
      className="max-w-32 max-h-32 rounded-full"/>
      <Text className='text-black bold text-xl'> Sebastian Andrade </Text>
      <Text className='font-bold text-gray-500'>📕Estudiante📕</Text>

      <View className='flex flex-row gap-4 mt-4 '>
      <IconButton icon='instagram' pulsar={() => console.log('Instagram')} color="purple"></IconButton>
      <IconButton icon='whats-app' pulsar={() => console.log('whats-app')} color="green"></IconButton>
      <IconButton icon='twitter' pulsar={() => console.log('twitter')} color="skyblue"></IconButton>
      <IconButton icon='tik-tok' pulsar={() => console.log('tik-tok')} color="black"></IconButton>
      <IconButton icon='linkedin' pulsar={() => console.log('linkedin')} color="blue"></IconButton>
     </View>
     </View>
  )

}

export default ProfileDetails