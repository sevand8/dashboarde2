import React from 'react'
import { View , Text} from 'react-native'
import IconButton from './ui/IconButton'
import CustomText from './ui/CustomText'

const MoreDetails = () => {
  return (
    <View className='h-1/2 w-screen bg-zinc-900 rounded-t-3xl p-6 flex flex-col justify-start gap-4'>
      <CustomText value="Skill" variant="subtitle" ></CustomText>
      <View className="flex-row justify-center items-center gap-4">
        <IconButton icon='java' pulsar={() => console.log('java')} color="orange"></IconButton>
        <IconButton icon='html5' pulsar={() => console.log('html5')} color="blue"></IconButton>
        <IconButton icon='code' pulsar={() => console.log('code')} color="black"></IconButton>
        <IconButton icon='android' pulsar={() => console.log('android')} color="black"></IconButton>
      </View>
      <CustomText value="Experiencia" variant="subtitle"></CustomText>
      <View className='flex-row justify-center items-center gap-4 '>  
        <CustomText value="Programador Junior" variant="subtitle" ></CustomText>
      </View>
    </View>
    
  )
}

export default MoreDetails