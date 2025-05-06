import { View, Text, Pressable } from 'react-native'
import React from 'react'

const DoYouKnowCard = () => {
  return (
    <View className=' mx-auto mb-5 relative bg-[#002020] p-3 h-[150px]'>
      <Text className='text-white text-center font-bold text-base'>Did you know...</Text>
      <Text className='text-xs text-slate-300 pt-3 text-center'>
      {<Text className='text-[#00d0a8] font-bold'>Happy Birthday to You </Text>}- Originally penned by Patty Hill and Mildred J. Hill, this song has been a consistent ватия through its widespread use in celebrations worldwide Estimated to have generated over <Text className='text-white font-bold'>$50 million in rapalios.</Text>
      </Text>
      <View className='w-3 border-[1px] border-slate-300 h-3 rounded-full absolute top-5 right-8'>
            <View className='w-1 h-1 bg-slate-300 rounded-full mx-auto my-auto'></View>
      </View>
      <View className='flex-row gap-x-1 justify-center mt-3 items-center'>
        <Pressable className='w-2 h-2 bg-[#94fbdd] rounded'></Pressable>
        <Pressable className='w-2 h-2 border-[1px] border-[#94fbdd] rounded'></Pressable>
        <Pressable className='w-2 h-2 border-[1px] border-[#94fbdd] rounded'></Pressable>
        <Pressable className='w-2 h-2 border-[1px] border-[#94fbdd] rounded'></Pressable>
      </View>
    </View>
  )
}

export default DoYouKnowCard