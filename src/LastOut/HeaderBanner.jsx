import { View, Text, Image } from 'react-native'
import React from 'react'
import head from '../LastOut/head-banner.jpg'
import bull from '../LastOut/bull.png'
import FontIcon from 'react-native-vector-icons/FontAwesome'

const HeaderBanner = () => {
  return (
    <View className='h-40 w-full bg-black relative'>
      <Image source={head} className="w-full h-40" resizeMode='cover' />
      <View className='absolute bottom-4 w-full '>
        <View className='p-4 flex-row justify-between items-center'>
            <View>
                <Image source={bull} resizeMode='contain' className='w-16 h-16'/>
                <Text className='text-lg font-bold text-white'>Welcome</Text>
            </View>
        </View>
      </View>
      <View className='absolute bottom-10 items-center right-4 flex-row gap-x-6'>
        <FontIcon name='bell' size={24} color={'white'} />
        <View className='w-7 justify-center items-center rounded-full h-7 bg-[#d57d41]'>
          <FontIcon name='user-circle-o'  size={18} color={'black'} />
        </View>
      </View>
    </View>
  )
}

export default HeaderBanner