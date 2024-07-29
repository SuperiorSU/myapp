import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { SearchBar } from 'react-native-elements';
import FontIcon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash';
const HomeHeader = () => {
  return (
    <View className="m-1 rounded-lg p-3 bg-[#445b4b]">
        <View className="flex flex-row justify-between items-end">
            <View>
                <Text className="text-slate-200">Location</Text>
                <View className="flex flex-row mt-2 items-baseline gap-x-1">
                    <Ionicon name="location" color='yellow' size={18}/>
                    <Text className="text-white">Chandigarh, India</Text>
                </View>
            </View>
            <View>
                <View className="flex flex-row gap-x-2">
                    <View className="bg-white/30 p-1 rounded">
                        <Ionicon name="cart-sharp" color='yellow' size={19}/>
                    </View>
                    <View className="bg-white/30 p-1 rounded">
                        <FontIcon name="bell" color='yellow' size={18}/>
                    </View>
                </View>
            </View>
        </View>
        <View className="mt-9 flex flex-row gap-x-3 items-center justify-around">
            <View className="w-3/4">
                <TextInput className="bg-white rounded p-2" placeholder='Search Product...'/>
            </View>
            <View>
                <Pressable className="p-1 bg-white rounded">
                    <Ionicon name="grid" color="gray" size={34}/>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default HomeHeader