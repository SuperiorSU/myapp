import { View, Text, ScrollView, Image, Button } from 'react-native';
import React, { useState } from 'react';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';

const initialData = [
  {
    id: 1,
    views: 500000,
    prog_name: 'IPL 2023',
    date_telecast: '2023-04-01',
    income_of_ad: 150000,
    expenses: 50000,
    image: require('./t20.webp'),
  },
  {
    id: 9,
    views: 12000,
    prog_name: 'The Marvel Adventure',
    date_telecast: '2024-07-14',
    income_of_ad: 6500,
    expenses: 3500,
    image: require('./marvel.jpg'),
  },
  {
    id: 2,
    views: 300000,
    prog_name: 'Movie Night',
    date_telecast: '2023-05-10',
    income_of_ad: 100000,
    expenses: 30000,
    image: 'https://example.com/images/movienight.jpg',
  },
  {
    id: 3,
    views: 800000,
    prog_name: 'News Hour',
    date_telecast: '2023-06-05',
    income_of_ad: 200000,
    expenses: 70000,
    image: 'https://example.com/images/newshour.jpg',
  },
  {
    id: 4,
    views: 450000,
    prog_name: 'Cooking Show',
    date_telecast: '2023-07-12',
    income_of_ad: 130000,
    expenses: 40000,
    image: require('./cook.jpg'),
  },
  {
    id: 5,
    views: 600000,
    prog_name: 'Travel Diaries',
    date_telecast: '2023-08-25',
    income_of_ad: 180000,
    expenses: 60000,
    image: 'https://example.com/images/traveldiaries.jpg',
  },
  {
    id: 6,
    views: 700000,
    prog_name: 'Tech Today',
    date_telecast: '2023-09-10',
    income_of_ad: 210000,
    expenses: 90000,
    image: 'https://example.com/images/techtoday.jpg',
  },
  {
    id: 7,
    views: 400000,
    prog_name: 'Fitness Hour',
    date_telecast: '2023-10-05',
    income_of_ad: 140000,
    expenses: 50000,
    image: 'https://example.com/images/fitnesshour.jpg',
  },
  {
    id: 8,
    views: 550000,
    prog_name: 'Reality Show',
    date_telecast: '2023-11-15',
    income_of_ad: 170000,
    expenses: 75000,
    image: 'https://example.com/images/realityshow.jpg',
  },
];

const JioCinema = () => {
  const [data, setData] = useState(initialData);
  const showAllRecords = () => {
    setData(initialData);
  };
  const showIPLRecord = () => {
    setData(initialData.filter((item) => item.prog_name === 'IPL 2023'));
  };
  const showMaxViewRecord = () => {
    const maxViewRecord = initialData.reduce(
      (max, item) => (item.views > max.views ? item : max),
      initialData[0]
    );
    setData([maxViewRecord]);
  };
  const showLossRecords = () => {
    setData(initialData.filter((item) => item.expenses > item.income_of_ad));
  };
  const addNewRecord = () => {
    const newRecord = {
      id: data.length + 1,
      views: 250000,
      prog_name: 'New Program',
      date_telecast: '2024-01-01',
      income_of_ad: 100000,
      expenses: 60000,
      image: 'https://example.com/images/newprogram.jpg',
    };
    setData([...data, newRecord]);
  };

  const deleteThirdRecord = () => {
    setData(data.filter((item) => item.id !== 3));
  };
  const updateExpensesBy10Percent = () => {
    const updatedData = data.map((item) => ({
      ...item,
      expenses: item.expenses * 1.1,
    }));
    setData(updatedData);
  };

  return (
    <ScrollView className="p-4">
      <View className="flex-row flex-wrap my-5 justify-center w-full">
        <Button title="Show All Records" onPress={showAllRecords} />
        <Button title="Show IPL Record" onPress={showIPLRecord} />
        <Button title="Show Max View Record" onPress={showMaxViewRecord} />
        <Button title="Show Loss Records" onPress={showLossRecords} />
        <Button title="Add New Record" onPress={addNewRecord} />
        <Button title="Delete 3rd Record" onPress={deleteThirdRecord} />
        <Button title="Update Expenses by 10%" onPress={updateExpensesBy10Percent} />
      </View>

      {data.map((item) => (
        <View key={item.id} className="bg-white border-2 border-slate-200 rounded-md shadow-lg p-3 w-full mb-4">
          <Image source={item.image } resizeMode="cover" className="w-full h-48 rounded-xl" />
          <View className="flex-row justify-between my-3 py-2 border-b-[1px] border-slate-400">
            <Text className="text-slate-950 text-base font-semibold">{item.prog_name}</Text>
            <View className="flex-row gap-x-2 items-center">
              <EvilIcon name="heart" size={32} color="red" />
              <IonIcon name="bookmark-outline" size={24} color="black" />
            </View>
          </View>
          <Text className="text-sm font-medium">Streamed on {item.date_telecast}</Text>
          <View className="flex-row items-center">
            <EvilIcon name="eye" size={24} color="black" />
            <Text className="text-sm font-medium pt-1">{item.views} Views</Text>
          </View>
          <View className="flex-row items-center gap-x-10 py-1 mt-2">
            <View>
              <Text>Income of Ad</Text>
              <View className="flex-row items-center">
                <FontIcon name="dollar" size={20} color="green" />
                <Text className="text-lg text-green-800 font-medium"> {item.income_of_ad}</Text>
              </View>
            </View>
            <View>
              <Text>Expenses</Text>
              <View className="flex-row items-center">
                <FontIcon name="dollar" size={20} color="red" />
                <Text className="text-lg text-red-500 font-medium"> {item.expenses}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default JioCinema;
