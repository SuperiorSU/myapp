import {View, Text, ScrollView, Pressable, Image} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    platform: 'WazirX',
    lastTradedPrice: '₹25,72,612',
    buySellPrice: '₹25,72,610 / ₹25,72,612',
    difference: '-3.14%',
    savings: '₹83,498',
    isPositive: false,
    image: require('./wazirx.png'),
  },
  {
    platform: 'Bitbns',
    lastTradedPrice: '₹28,29,906',
    buySellPrice: '₹28,15,164 / ₹28,29,157',
    difference: '6.58%',
    savings: '₹2,27,796',
    isPositive: true,
    image: require('./bitbns.png'),
  },
  {
    platform: 'Colodax',
    lastTradedPrice: '₹25,46,035',
    buySellPrice: '₹25,33,084 / ₹25,46,799',
    difference: '-3.14%',
    savings: '₹10,110',
    isPositive: false,
    image: require('./colodax.png'),
  },
  {
    platform: 'Zebpay',
    lastTradedPrice: '₹26,50,000',
    buySellPrice: '₹26,49,599 / ₹26,49,999',
    difference: '-0.23%',
    savings: '₹6,110',
    isPositive: false,
    image: require('./zebpay.png'),
  },
];

const BitA = () => {
  return (
    <ScrollView className="bg-slate-900 h-full p-2">
      <Text className="text-cyan-400 font-semibold text-xl text-center py-5">
        HOLDINFO
      </Text>

      <View className="flex-row justify-between overflow-scroll  items-center">
        <View className="flex-row gap-x-3 items-center">
          <View className="bg-slate-800 rounded-md w-10 p-2">
            <Text className="text-white text-center text-xs">BC</Text>
          </View>
          <View className="bg-slate-800 rounded-md w-10 p-2">
            <Text className="text-white text-center text-xs">BC</Text>
          </View>
          <View className="bg-slate-800 rounded-md w-10 p-2">
            <Text className="text-white text-center text-xs">BC</Text>
          </View>
        </View>

        <View>
          <View className="flex flex-row gap-x-3 items-center">
            <View className="border-cyan-400 h-6 w-6 border-2 rounded-full">
              <Text className="text-center text-xs text-cyan-400">57</Text>
            </View>
            <View>
              <Pressable className=" bg-cyan-400 flex-row  p-1 rounded-lg">
                <EvilIcons name="sc-telegram" size={18} color="white" />
                <Text className="text-white text-sm ">Connect Telegram</Text>
              </Pressable>
            </View>
            <View></View>
          </View>
        </View>
      </View>

      <View className="my-2 p-2">
        <Text className="text-lg font-mono text-center text-slate-600 tracking-tighter">
          Best Price to Trade
        </Text>
        <Text className="text-white font-semibold text-4xl py-2 text-center">
          <FontAwesome
            name="rupee"
            size={30}
            color="white"
            className="inline-block me-3"
          />{' '}
          26,56,110
        </Text>
        <Text className="text-xs text-center text-slate-600">
          Average BTC/INR price including currency
        </Text>
      </View>
      <View className="flex-row justify-center gap-x-10 my-4 items-center">
        <View>
          <Text className="text-cyan-400 text-lg text-center font-semibold">
            0.1%
          </Text>
          <Text className="text-slate-600 text-xs text-center font-medium">
            5 mins
          </Text>
        </View>
        <View>
          <Text className="text-cyan-400 text-lg text-center font-semibold">
            0.1%
          </Text>
          <Text className="text-slate-600 text-xs text-center font-medium">
            1 Hour
          </Text>
        </View>
        <View>
          <Text className="text-cyan-400 text-lg text-center font-semibold">
            0.1%
          </Text>
          <Text className="text-slate-600 text-xs text-center font-medium">
            1 Day
          </Text>
        </View>
        <View>
          <Text className="text-cyan-400 text-lg text-center font-semibold">
            0.1%
          </Text>
          <Text className="text-slate-600 text-xs text-center font-medium">
            7 Days
          </Text>
        </View>
      </View>
      <View>
        {data.map((item, index) => (
          <View key={index} className="bg-slate-700 p-3 rounded-md mb-3">
            <View className="flex-row justify-between items-center">
              <View className="flex-row gap-x-2 items-center">
                <View className="bg-white w-12 h-12 rounded-full">
                  <Image
                    source={item.image}
                    className="w-12 h-12 object-cover rounded-full object-center"
                  />
                </View>
                <Text className="text-white text-lg font-semibold">
                  {item.platform}
                </Text>
              </View>
              <View>
                <Text className="text-xs text-slate-300 text-end">
                  Last Transferred Price
                </Text>
                <Text className="text-sm text-end text-white font-semibold">
                  {item.lastTradedPrice}
                </Text>
              </View>
            </View>
            <View className="border-t-[1px] border-slate-600 mt-3 p-1">
              <View className="flex-row justify-between">
                <View>
                  <Text className="text-xs text-slate-300 text-start">
                    Buy/Sell Price
                  </Text>
                  <Text className="text-sm text-end text-white font-semibold">
                    {item.buySellPrice}
                  </Text>
                </View>
                <View>
                  <View className="flex-row items-center gap-x-2">
                    <AntIcon
                      name={item.isPositive ? 'caretup' : 'caretdown'}
                      size={12}
                      color={item.isPositive ? 'green' : 'red'}
                      className="inline-block"
                    />
                    <Text
                      className={
                        item.isPositive
                          ? 'text-green-500 text-sm font-medium'
                          : 'text-red-500 text-sm font-medium'
                      }>
                      {item.savings}
                    </Text>
                  </View>
                  <View className="flex-row items-center gap-x-2">
                    <AntIcon
                      name={item.isPositive ? 'caretup' : 'caretdown'}
                      size={12}
                      color={item.isPositive ? 'green' : 'red'}
                      className="inline-block"
                    />
                    <Text
                      className={
                        item.isPositive
                          ? 'text-green-500 text-sm font-medium'
                          : 'text-red-500 text-sm font-medium'
                      }>
                      {item.difference}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default BitA;
