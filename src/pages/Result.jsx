import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native'; // For navigation

const Result = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { totalQuestions, selectedAnswers, questionsData } = route.params || {};

  const correctAnswers = questionsData.filter((question, index) =>
    question.correctAnswer === selectedAnswers[index]
  ).length;

  const wrongAnswers = totalQuestions - correctAnswers;
  const totalMarks = totalQuestions;
  const score = correctAnswers;

  return (
    <View className="flex-1 bg-[#faf7f0] p-4">
      <Text className="text-2xl font-bold text-center mb-4 p-3">Quiz Results</Text>
      <View className="bg-white p-4 rounded-lg gap-y-5 shadow-lg mb-4">
        <Text className="text-lg font-semibold">Total Questions: {totalQuestions}</Text>
        <Text className="text-lg font-semibold">Correct Answers: {correctAnswers}</Text>
        <Text className="text-lg font-semibold">Wrong Answers: {wrongAnswers}</Text>
        <Text className="text-lg font-semibold">Total Marks: {totalMarks}</Text>
        <Text className="text-lg font-semibold">Obtained Score: {score}</Text>
      </View>
      <Pressable
        className="bg-green-600 p-2 rounded-lg"
        onPress={() => navigation.navigate('TestQ')} // Navigate back to the quiz
      >
        <Text className="text-white text-lg text-center">Retake Quiz</Text>
      </Pressable>
    </View>
  );
};

export default Result;
