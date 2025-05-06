import React from 'react';
import { View, Text, Pressable } from 'react-native';


const MissedGoal = () => {

  return (
    <View className="mt-5">
      <Text className="text-red-500 font-bold text-xl">Goal is Missed</Text>
    </View>
  );
};

const MadeGoal = () => {

  return (
    <View className='mt-5'>
      <Text className="text-green-500 font-bold text-xl text-center">Goal is Done</Text>
    </View>
  );
};

const Goal = ({ isGoal }) => {
  const handlePress = (message) => {
    alert(message);
  };
  return (
    <View className='p-4'>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
      <View className="mt-4">
        <Pressable
          onPress={() =>
            handlePress(isGoal ? 'You achieved the goal!' : 'You missed the goal!')
          }
          className={`py-3 px-6 rounded-md ${
            isGoal ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          <Text className="text-white text-center text-lg font-semibold">
            {isGoal ? 'Celebrate' : 'Try Again'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Goal;
