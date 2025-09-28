import React from 'react'
import { View } from 'react-native'
import IconButton from './ui/IconButton'
import CustomText from './ui/CustomText'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-zinc-900 rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText value="Skill" variant="subtitle" ></CustomText>
      <View className="flex-row justify-center items-center gap-4">
        <IconButton icon='instagram' pulsar={() => console.log('Instagram')} color="purple"></IconButton>
        <IconButton icon='whats-app' pulsar={() => console.log('whats-app')} color="green"></IconButton>
        <IconButton icon='twitter' pulsar={() => console.log('twitter')} color="skyblue"></IconButton>
        <IconButton icon='tik-tok' pulsar={() => console.log('tik-tok')} color="black"></IconButton>
        <IconButton icon='linkedin' pulsar={() => console.log('linkedin')} color="blue"></IconButton>
      </View>
      <CustomText value="Experiencia" variant="subtitle"></CustomText>
    </View>
  )
}

export default MoreDetails