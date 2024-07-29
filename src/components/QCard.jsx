import { View, Text } from 'react-native';
import React from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const QCard = ({ questions,options, selectedAnswer, onSelectAnswer }) => {
  if (!options || !Array.isArray(options)) {
    return <Text>Error: No options available.</Text>;
  }

  return (
    <View className="bg-white m-2 rounded-lg">
      <View>
        <Text className="text-lg px-3 py-2 text-black">
          {
            questions.question
          }
        </Text>
      </View>
      <View className="flex-row justify-start">
        <RadioGroup
          radioButtons={options.map(option => ({
            id: option.id,
            label: option.label,
            value: option.value,
          }))}
          onPress={onSelectAnswer}
          selectedId={selectedAnswer}
          flexDirection='row'
          layout='col'
          labelStyle={{
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: 'green',
            backgroundColor: '#faf7f0',
            padding: 10,
            color: 'black',
            width: '100%',
            lineHeight: 19,
            borderRadius: 10,
          }}
          containerStyle={{
            borderRadius: 10,
            padding: 10,
            paddingRight: 20,
            gap: 10,
            marginRight: 10,
            marginLeft: 10,
            overflow: 'auto',
            width: '100%',
          }}
        />
      </View>
    </View>
  );
};

export default QCard;
