import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Slides from './src/LastOut/Slides';
import {slidesData} from './src/utils/data';
import FoundIcon from 'react-native-vector-icons/Foundation';
import DoYouKnowCard from './src/LastOut/DoYouKnowCard';
import TradingCard from './src/LastOut/TradingCard';
import {tradingData} from './src/utils/data';
import HeaderBanner from './src/LastOut/HeaderBanner';
import PieChart from 'react-native-pie-chart';
import DepositCard from './src/LastOut/DepositCard';

const widthAndHeight = 100;
const series = [289, 537];
const sliceColor = ['#0438d2', '#06a7e3'];

function HomeScreen() {
  return (
    <ScrollView className="bg-black w-full h-full">
      <HeaderBanner />
      <DoYouKnowCard />

      <View className="flex-row justify-between px-4 items-center">
        <View className="text-white">
          <Text className="text-white text-base font-sans font-medium">
            Auctions
          </Text>
        </View>
        <View>
          <Pressable>
            <View className="flex-row items-center justify-center gap-x-1 bg-[#00d0a8] p-1 w-16 rounded-xl">
              <View>
                <FoundIcon name="sound" size={16} color={'black'} />
              </View>
              <Text className="font-bold text-xs">Live</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <ScrollView horizontal>
        {slidesData.map((item, key) => {
          return (
            <Slides
              key={key}
              time={item.time}
              name={item.name}
              subtext={item.subtext}
              image={item.image}
            />
          );
        })}
      </ScrollView>
      <View className="flex-row gap-x-1 justify-center mt-3 items-center">
        <Pressable className="w-2 h-2 bg-[#94fbdd] rounded"></Pressable>
        <Pressable className="w-2 h-2 border-[1px] border-[#94fbdd] rounded"></Pressable>
        <Pressable className="w-2 h-2 border-[1px] border-[#94fbdd] rounded"></Pressable>
        <Pressable className="w-2 h-2 border-[1px] border-[#94fbdd] rounded"></Pressable>
      </View>
      <View className="flex-row justify-end px-3 mb-3">
        <View>
          <Pressable>
            <Text className="text-end text-[#d57d41] font-semibold">
              View All
            </Text>
          </Pressable>
        </View>
      </View>
      <View className="flex-row justify-between px-4 items-center">
        <View className="text-white">
          <Text className="text-white text-base font-sans font-medium">
            Trading Board
          </Text>
        </View>
      </View>
      <View className="flex-row justify-evenly mt-3 mb-5">
        {tradingData.map((item, index) => (
          <TradingCard
            key={index}
            image={item.image}
            tradeName={item.tradeName}
            tradeCode={item.tradeCode}
            price={item.price}
            img2={item.img2}
            changePercentage={item.changePercentage}
            changeDirection={item.changeDirection}
          />
        ))}
      </View>
      <View className="flex-row justify-end px-3">
        <View>
          <Pressable>
            <Text className="text-end text-[#d57d41] font-semibold">
              View All
            </Text>
          </Pressable>
        </View>
      </View>
      <View className="my-4 px-4">
        {/* <ChartComp/> */}
        <Text className="text-white text-base font-sans font-medium">
          My Portfolio
        </Text>
        <View className="flex-row justify-between mt-5">
          <View className="bg-[#160904] rounded-lg border-[1px] w-[220px] p-3 relative border-yellow-950">
            <View className="flex-row items-center gap-x-1">
              <View className="w-3 h-3 rounded bg-blue-700"></View>
              <Text className="text-white text-xs">
                {<Text className="text-white font-medium">$32.00</Text>}

                {<Text className="text-slate-300"> Cash Balance</Text>}
              </Text>
            </View>
            <View className="flex-row items-center mt-3 gap-x-1">
              <View className="w-3 h-3 rounded bg-blue-400"></View>
              <Text className="text-white text-xs">
                {<Text className="text-white font-medium">$82.00</Text>}
                {<Text className="text-slate-300"> Units</Text>}
              </Text>
            </View>
            <View className="flex-row items-center mt-3 gap-x-1">
              <View className="w-3 h-3 rounded bg-[#160904]"></View>
              <Text className="text-white text-xs">
                {<Text className="text-purple-700 font-medium">$112.00 </Text>}
                {<Text className="text-purple-400"> 0.12%</Text>}
              </Text>
            </View>
          </View>
          <View className="">
            <View>
              <PieChart
                widthAndHeight={widthAndHeight}
                series={series}
                sliceColor={sliceColor}
                coverRadius={0.45}
                coverFill={'#FFF'}
              />
            </View>
          </View>
        </View>
        <View className="my-5">
          <DepositCard/>
        </View>
      </View>
      <View className="flex-row justify-between px-4 items-center">
        <View className="text-white">
          <Text className="text-white text-base font-sans font-medium">
            Auctions
          </Text>
        </View>
        <View>
          <Pressable>
            <View className="flex-row items-center justify-center gap-x-1 bg-[#00d0a8] p-1 w-16 rounded-xl">
              <View>
                <FoundIcon name="sound" size={16} color={'black'} />
              </View>
              <Text className=" text-black font-bold text-xs">Live</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <ScrollView horizontal>
        {slidesData.map((item, key) => {
          return (
            <Slides
              key={key}
              time={item.time}
              name={item.name}
              subtext={item.subtext}
              image={item.image}
            />
          );
        })}
      </ScrollView>
      <View className="flex-row gap-x-1 justify-center mt-3 items-center">
        <Pressable className="w-2 h-2 bg-[#94fbdd] rounded"></Pressable>
        <Pressable className="w-2 h-2 border-[1px] border-[#94fbdd] rounded"></Pressable>
        <Pressable className="w-2 h-2 border-[1px] border-[#94fbdd] rounded"></Pressable>
        <Pressable className="w-2 h-2 border-[1px] border-[#94fbdd] rounded"></Pressable>
      </View>
      <View className="flex-row justify-end px-3 mb-3">
        <View>
          <Pressable>
            <Text className="text-end text-[#d57d41] font-semibold">
              View All
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#58e3d8',
            tabBarStyle: {
              backgroundColor: '#120900',
              padding: 5,
              shadowColor: 'white',
              shadowOffset: {width: 4, height: 6},
              shadowOpacity: 0.8,
              shadowRadius: 3,
              elevation: 5,
            },
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName = focused ? 'home' : 'home-outline';
              return <Ionicon name={iconName} size={size} color={color} />;
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#58e3d8',
            tabBarStyle: {
              backgroundColor: '#120900',
              padding: 5,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 3,
              elevation: 5,
            },
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName = focused ? 'trail-sign' : 'trail-sign-outline';
              return <Ionicon name={iconName} size={size} color={color} />;
            },
          }}
          name="Auction Board"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#58e3d8',
            tabBarStyle: {
              backgroundColor: '#120900',
              padding: 5,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 3,
              elevation: 5,
            },
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              return <Ionicon name={iconName} size={size} color={color} />;
            },
          }}
          name="Trading Board"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#58e3d8',
            tabBarStyle: {
              backgroundColor: '#120900',
              padding: 5,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 3,
              elevation: 5,
            },
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName = focused ? 'briefcase' : 'briefcase-outline';
              return <Ionicon name={iconName} size={size} color={color} />;
            },
          }}
          name="Portfolio"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarActiveTintColor: '#58e3d8',
            tabBarStyle: {
              backgroundColor: '#120900',
              padding: 5,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.8,
              shadowRadius: 3,
              elevation: 5,
            },
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName = focused ? 'wallet' : 'wallet-outline';
              return <Ionicon name={iconName} size={size} color={color} />;
            },
          }}
          name="My Earning"
          component={HomeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
