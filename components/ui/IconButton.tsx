import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Pressable } from 'react-native';
interface IconButtonProps {
  pulsar: () => void;
  icon: string;
  enlace?: string;
  color?: string;
}

const IconButton = ({icon,pulsar,enlace,color}: IconButtonProps) => {
  return (
    <Pressable onPress={pulsar} className='bg-white rounded-xl p-3 border-b-4 border-r-2 border-gray-500'>
      <AntDesign name={icon as any} size={24} color={color} />
    </Pressable>
  )
}



export default IconButton