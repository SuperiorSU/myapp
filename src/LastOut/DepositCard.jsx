import {View, Text, Pressable} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign'
const DepositCard = () => {
  return (
    <View className="bg-[#160904] overflow-hidden rounded-lg border-[1px] w-[100%] mx-auto p-2 relative border-yellow-950 h-36">
      <View className="bg-[#dc8142] absolute top-0 z-10 right-0 p-[6px] rounded-bl-lg">
        <Text className="text-xs font-bold text-black">
          Deposit funds and start trading
        </Text>
      </View>
      <View className='p-4'>
        <View>
            <View className='w-12 h-12 bg-[#dc8142] justify-center items-center rounded-full'>
                <AntIcon name='wallet' color={'black'} size={28}/>
            </View>
                <Text className='text-slate-300 text-xs font-bold mt-2'>Available Cash</Text>
                <Text className='text-slate-300 text-lg font-bold'>$50.00</Text>
        </View>

      </View>
      <View className='absolute right-5 bottom-8 w-max'>
        <Pressable className='w-12 p-2 rounded-lg bg-[#66fcee]'>
            <Text className="text-end text-black font-semibold">
                ADD
            </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DepositCard;
