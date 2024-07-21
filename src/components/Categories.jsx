import { View, Text, ScrollView, Pressable } from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

const categories = [
  { name: 'All Products', icon: 'list-circle' },
  { name: 'Beauty', icon: 'brush' },
  { name: 'Electronics', icon: 'phone-portrait' },
  { name: 'Fashion', icon: 'shirt' },
  { name: 'Home Decor', icon: 'home' },
  { name: 'Appliances', icon: 'aperture' },
  { name: 'Furniture', icon: 'bed' },
  { name: 'Grocery', icon: 'cart' },
];

const Categories = () => {
  const handlePress = (categoryName) => {
    console.log(`${categoryName} pressed`);
    // You can add navigation or other logic here
  };

  return (
    <ScrollView className="my-2" horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <Pressable key={index} onPress={() => handlePress(category.name)} className="bg-white py-1 px-2 mx-2 rounded-xl">
          <View className="bg-white justify-center items-center mx-2 rounded-full py-2">
            <Pressable onPress={() => handlePress(category.name)}>
              <Ionicon className="px-2" name={category.icon} color='#445b4b' size={28} />
            </Pressable>
          </View>
          <Pressable onPress={() => handlePress(category.name)}>
            <Text className="my-auto font-semibold">{category.name}</Text>
          </Pressable>
        </Pressable>
      ))}
    </ScrollView>
  );
}

export default Categories;
