import { View, Text } from 'react-native'
import React from 'react'
import { PieChart } from "react-native-gifted-charts";

const data = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
const ChartComp = () => {
  return (
    <View>
      <Text>ChartComp</Text>
      <PieChart data = {data}/>
    </View>
  )
}

export default ChartComp