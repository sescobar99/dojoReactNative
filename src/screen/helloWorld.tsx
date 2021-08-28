import React from "react";
import { View, Text } from "react-native";

export const HelloWorldScreen = () => {
    return (
        <View style={{flex : 1, backgroundColor: 'red'}}>
        <Text style={{
          fontSize: 50,
          textAlign: 'center'
          }}>Hola gente del dojo</Text>
      </View>
    );
}