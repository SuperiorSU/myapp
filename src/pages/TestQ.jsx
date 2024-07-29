import { View, Text, ScrollView, Pressable, Alert } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import QCard from '../components/QCard';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'; 

const TestQ = () => {
  const [minutes, setMinutes] = useState(10);
  const [seconds, setSeconds] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [questionsData, setQuestionsData] = useState([]);
  const [finalPoints, setFinalPoints] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const loadQuestions = async () => {
      const data = await import('../components/data');
      setQuestionsData(data.default);
    };

    loadQuestions();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const handleNext = () => {
    if (currentQuestionIndex < questionsData.length - 1 && selectedAnswers[currentQuestionIndex] !== undefined) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (selectedAnswers[currentQuestionIndex] === undefined) {
      Alert.alert('Selection Required', 'Please select an option before proceeding.');
    } else {

      const points = questionsData.reduce((total, question, index) => {
        return total + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
      }, 0);
      setFinalPoints(points);

      navigation.navigate('Result', {
        totalQuestions: questionsData.length,
        selectedAnswers,
        questionsData,
        finalPoints, 
      });
    }
  };

  const handleSelectAnswer = (answerId) => {
    setSelectedAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = answerId;
      return updated;
    });
  };

  const currentQuestion = questionsData[currentQuestionIndex] || {};

  const isNextDisabled = selectedAnswers[currentQuestionIndex] === undefined;

  return (
    <ScrollView className="bg-[#faf7f0]">
      <View className="mt-3 flex-row justify-between items-center p-2 px-3">
        <View>
          <Text className="font-semibold text-black">{`Q${currentQuestionIndex + 1} of ${questionsData.length}`}</Text>
        </View>
        <View className="flex-row gap-x-1">
          <Icon name="clock" color="black" size={20} />
          <Text className="font-semibold text-black">
            {`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
          </Text>
        </View>
      </View>
      {questionsData.length > 0 && (
        <QCard
          questions={currentQuestion.question}
          options={currentQuestion.options}
          selectedAnswer={selectedAnswers[currentQuestionIndex]}
          onSelectAnswer={handleSelectAnswer}
        />
      )}
      <Pressable
        className={`p-2 m-2 rounded-lg ${isNextDisabled ? 'bg-gray-400' : 'bg-green-600'}`}
        onPress={handleNext}
        disabled={isNextDisabled}
      >
        <Text className="text-white text-lg text-center">
          {currentQuestionIndex < questionsData.length - 1 ? 'Next' : 'Submit'}
        </Text>
      </Pressable>
    </ScrollView>
  );
};
export default TestQ;