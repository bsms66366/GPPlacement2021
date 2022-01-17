import React, { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import "@firebase/firestore";

export default function ChoiceList({ docRef }) {
  const [choices, setChoices] = React.useState([]);

  useEffect(
    () => docRef.onSnapshot((doc) => setChoices(doc.data()?.choices || [])),
    []
  );

  return (
 <ScrollView>
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFFFF",
        padding: 30,
        width: 350,
        //height: 80,
      }}
    >
      <Image source={require('../assets/images/ClinicalSkillsLogo3.png')} style={{width: 100, height: 130, }} />
      <Text style={{ fontSize: 20, fontWeight: "bold", color: '#026666' }}>Attendance Record</Text>

      {choices.map((choice, key) => (
        <Text key={key}>
          {`${choice.time.toDate().toString().slice(4, 21)} - module: ${
            choice.firstOption
          }, Second Option: ${choice.secondOption}`}
        </Text>
      ))}
    </View>
    </ScrollView>
  );
}
