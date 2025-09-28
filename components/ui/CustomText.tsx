import { View, Text } from 'react-native'
import React from 'react'

interface CustomTextProperties{
    value: string;
    variant: "normal"|"title"|"subtitle"|"subtitle2";
}
const CustomText = ({value,variant}: CustomTextProperties) => {
 return(
    <Text className={selectVariables(variant)}>{value}</Text>
 )
}

export default CustomText

function selectVariables(variante: string ) {
    switch(variante){
        case "title":
            return "text-2xl font-bold text-gray"
        case "subtitle":
            return "text-xl font-bold text-gray-500"   
        case "normal":
            return "text-base font-normal text-gray-700"   
        default: 
    }

}

