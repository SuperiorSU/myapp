import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {IconButton, Button} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ExpenseP = () => {
  const [budget, setBudget] = useState(1000); // Initial budget
  const [sections, setSections] = useState([{id: 1, amount: 0}]);

  const handleAddSection = () => {
    if (sections.length < 3) {
      setSections([...sections, {id: sections.length + 1, amount: 0}]);
    }
  };

  const handleRemoveSection = id => {
    const updatedSections = sections.filter(section => section.id !== id);
    setSections(updatedSections);
  };

  const handleAmountChange = (id, value) => {
    const updatedSections = sections.map(section =>
      section.id === id
        ? {...section, amount: parseFloat(value) || 0}
        : section,
    );
    setSections(updatedSections);
  };

  const totalAmount = sections.reduce(
    (total, section) => total + section.amount,
    0,
  );
  const balance = budget - totalAmount;

  return (
    <ScrollView className="p-5">
      <View className="gap-y-6 mb-5">
        <View>
          <Text className="text-2xl text-center font-bold text-blue-600 py-3 border-b-2 border-blue-100 uppercase ">
            Expense Tracker
          </Text>
        </View>
        <View className="bg-white rounded-lg border-[1px] border-slate-400 p-1">
          <View className="my-2 p-1 border-slate-400 flex-row justify-between items-center">
            <Text className="text-lg font-medium">Budget: </Text>
            <Text className="text-red-400 text-lg font-medium">${budget.toFixed(2)}</Text>
          </View>
          <View className="my-2 p-1 border-slate-400 flex-row justify-between items-center">
            <Text className="text-lg font-medium">Total Amount: </Text>
            <Text className="text-red-400 text-lg font-medium">${totalAmount.toFixed(2)}</Text>
          </View>
          <View className="my-2 p-1 border-slate-400 flex-row justify-between items-center">
            <Text className="text-lg font-medium">Balance: </Text>
            <Text className="text-red-400 text-lg font-medium">${balance.toFixed(2)}</Text>
          </View>
        </View>
      </View>

      {sections.map(section => (
        <View className="my-1 bg-white py-4 px-3 rounded-lg border-[1px] border-gray-300" key={section.id}>
          <Text className="font-semibold text-blue-500">Enter amount</Text>
          <View className="flex-row items-center justify-end gap-x-5">
            <TextInput
              className="border flex-1 p-2 rounded-lg my-1"
              value={section.amount.toString()}
              onChangeText={value => handleAmountChange(section.id, value)}
              keyboardType="numeric"
            />
            <FontAwesome
              name="trash"
              size={30}
              color="gray"
              onPress={() => handleRemoveSection(section.id)}
            />
          </View>
        </View>
      ))}
      <View className="mt-4">
        <Button
            mode="contained"
            className="bg-blue-500"
            onPress={handleAddSection}
            disabled={sections.length >= 3}>
            Add Section
        </Button>
      </View>
    </ScrollView>
  );
};

export default ExpenseP;
