import { View, Text, ScrollView  } from "react-native";
import Style from "./Style";

function CustomCard({ id, content }) {
    return (
      <View style={Style.card}>
        <ScrollView >

        <Text style={Style.cardTitle}>{id}</Text>
        <Text style={Style.cardText}>{content}</Text>
        </ScrollView>
      </View>
    );
  }

export default CustomCard;