import { View, Text, Image } from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

const TradingCard = (props) => {
  const { image, tradeName, tradeCode, price, img2, changePercentage, changeDirection } = props;

  return (
    <View className="bg-[#160904] rounded-lg border-[1px] w-[188px] overflow-hidden h-40 p-2 relative border-yellow-950">
      <View className="flex-row gap-x-1 items-center mt-4">
        <View className="w-[50px] rounded-md overflow-hidden h-[50px] bg-white mt-2 mx-2">
          <Image source={img2} className="w-full h-full" />
        </View>
        <View>
          <Text className="text-white font-bold text-wrap text-sm">{tradeName}</Text>
          <Text className="text-slate-400 text-wrap text-xs">{tradeCode}</Text>
        </View>
      </View>
      <View className="flex-row justify-between p-3">
        <View>
          <Text className="text-white text-lg">{price}</Text>
          <Text className={`text-sm ${changeDirection === 'up' ? 'text-purple-600' : 'text-red-600'}`}>
            <Ionicon name={changeDirection === 'up' ? 'caret-up-sharp' : 'caret-down-sharp'} size={13} />
            {` ${changePercentage}`}
          </Text>
        </View>
        <View>
          <Image source={image} className="h-16 w-16 border-2 border-white" resizeMode="contain" />
        </View>
      </View>

      <View className="absolute top-0 right-0 w-5 h-5 rounded-se-lg bg-[#39271e] justify-center items-center">
        <Ionicon name="star" color={'#d77f40'} size={16} />
      </View>
    </View>
  );
};

export default TradingCard;
