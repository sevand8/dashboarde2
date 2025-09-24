import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import { Pressable } from 'react-native';
interface IconButtonProps {
  pulsar: () => void;
  icon: string;
  enlace?: string;
  color?: string;
}

const IconButton = ({icon,pulsar,enlace, color="black"}: IconButtonProps) => {
  return (
    <Pressable onPress={pulsar}>
        <AntDesign name={icon as any} size={24} color={color} />
    </Pressable>
  )
}

export default IconButton