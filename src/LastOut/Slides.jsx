import { View, Text, Image } from 'react-native';
import React from 'react';



const Slides = (props) => {
  const image = props.image;
  const time = props.time;
  const name = props.name;
  const subtext = props.subtext
  return (
    <View className="p-16 rounded-lg h-32 w-[370px] bg-white relative mx-3 my-2">
      <Image source={image} resizeMode='cover' className="absolute top-0 w-[370px] h-32 rounded-lg" />
      <View className="bg-black/60 absolute top-0 z-10 right-0 p-[6px] rounded-bl-lg">
        <Text className="text-white text-xs">{<Text>Auction Ends in </Text> }{<Text className="text-emerald-300 font-semibold">{time}</Text>}</Text>
      </View>
      <View className="bg-black/60 z-10 absolute bottom-3 w-[370px] left-0 right-0 p-2">
        <Text className="text-white px-3 text-base font-semibold">{name}</Text>
        <Text className="text-white px-3 text-xs">{subtext}</Text>
      </View>
    </View>
  );
};

export default Slides;
