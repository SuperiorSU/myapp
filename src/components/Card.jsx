import { View, Text, Image, Pressable } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message'
const Card = (props) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        // Toast.show({
        //     type: 'success',
        //     text1: 'Wishlist Added',
        //     text2: 'Your Product is added to the wishlist',
        //     visibilityTime: 4000,
        //     autoHide: true,
        //     topOffset: 30,
        //   })
    }
    const image = props.product.thumbnail;
    const name = props.product.title;
    const price = props.product.price;
    
    const truncateName = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };
    
      // const toastConfig = {
      //   success: (props) => (
      //     <View className="border-l-2 border-green bg-white shadow-2xl p-3 rounded-md">
      //       <Text className="text-green-500 font-semibold text-[16px]">{props.text1}</Text>
      //       <Text>{props.text2}</Text>
      //     </View>
      //   ),
      // };

    return (
        <View className="rounded-lg shadow-lg p-2 border-2 border-slate-100 bg-white w-[180px] m-1 relative">
            <Image className="rounded-lg" source={{ uri: image }} style={{ height: 130, width: '100%' }} />
            <View className="flex flex-row justify-between items-baseline">
                <Text className="font-semibold py-1 w-1/2 text-black">
                    {truncateName(name, 16)}
                </Text>
                <Text className="font-semibold py-1 text-black text-[17px]">${price}</Text>
            </View>
            <View className="absolute top-4 right-4 rounded-full bg-slate-200 h-[28px] w-[28px] p-1">
                <Pressable onPress={handleLike}>
                    <Icon name={isLiked ? 'heart' : 'heart-outline'} size={20} color="red" />
                </Pressable>
            </View>
            {/* <Toast  config={toastConfig} ref={(ref) => Toast.setRef(ref)} /> */}
        </View>
    );
}

export default Card;
