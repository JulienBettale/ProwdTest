import React from 'react';
import { SafeAreaView } from 'react-native';
import ChatBot from './src/chatbot/index';
import Data from './src/chatbot/data';

export default function App() {
  return (
    <SafeAreaView>
      <ChatBot/>
      <Data/>
    </SafeAreaView>
  );
};
