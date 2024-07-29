// import { View, Text,Button } from 'react-native'
import React from 'react'
import Toast from 'react-native-toast-message'
import { SafeAreaView } from 'react-native';
import {WebView} from 'react-native-webview'
const ToastP = () => {
    // const showToast = () => {
    //     Toast.show({
    //       type: 'success',
    //       text1: 'Wishlist Added',
    //       text2: 'Your Product is added to the wishlist',
    //       visibilityTime: 4000,
    //       autoHide: true,
    //       topOffset: 30,
    //     });
    //   };
    //   const toastConfig = {
    //     success: (props) => (
    //       <View className="border-l-2 border-green bg-white shadow-2xl p-3 rounded-md">
    //         <Text className="text-green-500 font-semibold text-[16px]">{props.text1}</Text>
    //         <Text>{props.text2}</Text>
    //       </View>
    //     ),
    //   };
      return (
        <SafeAreaView className="flex-1">
            {/* <View className="absolute top-30">
            <Button  title="Show Toast" onPress={showToast} />
            </View>          
          <Toast  config={toastConfig} ref={(ref) => Toast.setRef(ref)} /> */}
          <WebView source={{uri:'https://www.wikipedia.org'}}/>
        </SafeAreaView>
      );
    
}

export default ToastP