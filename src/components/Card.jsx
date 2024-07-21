import { View, Text, Image, Pressable } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = (props) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    }
    const image = props.product.thumbnail;
    const name = props.product.title;
    const price = props.product.price;
    
    const truncateName = (text, maxLength) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <View className="rounded-lg shadow-lg p-2 border-2 border-slate-200 bg-white w-[180px] m-1 relative">
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
        </View>
    );
}

export default Card;
