import { View, Text, Image, ScrollView, TextInput, Pressable } from 'react-native';
import Toast from 'react-native-toast-message';
import React from 'react';

const Home = () => {
    const [mobileNo, setMobileNo] = React.useState('');
    const [otp, setOtp] = React.useState('');
    const [generatedOtp, setGeneratedOtp] = React.useState(null);
    const [isOtpSent, setIsOtpSent] = React.useState(false);
    const [isOtpVerified, setIsOtpVerified] = React.useState(false);

    const handleMobileChange = (text) => {
        setMobileNo(text);
    };

    const handleOtpChange = (text) => {
        setOtp(text);
    };

    const sendOtp = () => {
        const otpCode = Math.floor(1000 + Math.random() * 9000);
        setGeneratedOtp(otpCode.toString());
        setIsOtpSent(true);
        showOTPToast(`OTP sent to ${mobileNo}`, `Enter OTP: ${otpCode}`);
    };

    const verifyOtp = () => {
        if (otp === generatedOtp) {
            setIsOtpVerified(true);
            showOTPToast('OTP verified', 'Your account is verified');
        } else {
            showOTPToast('OTP verification failed', 'Please enter the correct OTP');
        }
    };

    const showOTPToast = (message1, message2) => {
        Toast.show({
            type: 'success',
            text1: message1,
            text2: message2,
            text2Style:{
                fontSize: 16,
                fontWeight: 'bold'
                
            }
        });
    };

    const resendOtp = () => {
        setIsOtpSent(false);
        setOtp('');
    };

    return (
        <ScrollView className="p-5 pb-10">
            <Toast />
            {!isOtpSent && !isOtpVerified && (
                <>
                    <View className="w-52 h-52 mx-auto">
                        <Image source={require('./lock.png')} resizeMode="contain" className="w-full h-full" />
                    </View>
                    <View className="mt-10">
                        <Text className="text-center text-3xl font-semibold text-black">OTP Verification</Text>
                    </View>
                    <View className="mt-10">
                        <Text className="text-center text-lg font-semibold">Verify your account details</Text>
                        <Text className="text-center py-3 text-base font-medium">We will need OTP to verify your account</Text>
                    </View>

                    <View className="mt-16">
                        <Text className="text-center pb-3 text-lg text-black">Enter Your Mobile Number</Text>
                        <TextInput
                            onChangeText={handleMobileChange}
                            value={mobileNo}
                            keyboardType="phone-pad"
                            className="border-2 border-red-500 bg-slate-200 rounded-md px-3"
                            placeholder="123 456 7890"
                        />
                        <Pressable onPress={sendOtp} className="bg-red-500 w-28 mx-auto rounded-md mt-5 py-2">
                            <Text className="text-center text-white uppercase">Send OTP</Text>
                        </Pressable>
                    </View>
                </>
            )}

            {isOtpSent && !isOtpVerified && (
                <View className="h-full">
                    <View className="w-52 h-52 mx-auto -z-10">
                        <Image source={require('./unlock.png')} resizeMode="contain" className="w-full h-full" />
                    </View>
                    <View className="mt-10">
                        <Text className="text-center text-3xl font-semibold text-black">OTP Verification</Text>
                    </View>
                    <View className="mt-10">
                        <Text className="text-center text-lg font-semibold">Please enter the OTP</Text>
                        <Text className="text-center py-3 text-base font-medium">The OTP was sent to {mobileNo.slice(0, 4) + "*****"}</Text>
                    </View>
                    <View className="mt-16">
                        <Pressable onPress={resendOtp} className="py-1 px-2">
                            <Text className="text-start text-sm text-blue-400">RESEND OTP</Text>
                        </Pressable>
                        <TextInput
                            onChangeText={handleOtpChange}
                            value={otp}
                            keyboardType="numeric"
                            className="border-2 border-red-500 bg-slate-200 rounded-md px-3"
                            placeholder="1234"
                        />
                        <Pressable onPress={verifyOtp} className="bg-red-500 w-28 mx-auto rounded-md mt-5 py-2">
                            <Text className="text-center text-white uppercase">Verify</Text>
                        </Pressable>
                    </View>
                </View>
            )}

            {isOtpVerified && (
                <View>
                    <View className="w-52 h-52 mx-auto">
                        <Image source={require('./done.png')} resizeMode="contain" className="w-full h-full -z-10" />
                    </View>
                    <View className="mt-10">
                        <Text className="text-center text-3xl font-semibold text-black">OTP Verified</Text>
                    </View>
                    <View className="mt-10">
                        <Text className="text-center text-lg font-semibold">Your account has been verified</Text>
                        
                    </View>
                    <View className="w-52 h-52 mx-auto">
                        <Image source={require('./images.png')} resizeMode="contain" className="w-full h-full -z-10" />
                    </View>
                </View>
            )}
        </ScrollView>
    );
};

export default Home;
