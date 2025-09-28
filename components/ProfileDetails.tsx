import React from 'react';
import { Image, View } from 'react-native';
import "../global.css";
import IconButton from './ui/IconButton';
import CustomText from './ui/CustomText';

const ProfileDetails = () => {
  return (
    <View className='flex justify-center items-center bg-white w-screen h-screen'>
      < Image source ={require("../assets/images/icon.png")} 
      className="max-w-32 max-h-32 rounded-full"/>
      <CustomText value="Sebastian Andrade" variant="title"></CustomText>
      <CustomText value="💻Estudiante💻" variant="subtitle"></CustomText>

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