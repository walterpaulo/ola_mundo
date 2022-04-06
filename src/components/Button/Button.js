import { Text, TouchableOpacity } from "react-native";

import style from "./style";

export default function Button (props) {
  console.log(props)
  return(
    <TouchableOpacity onPress={props.onPress}>
      <Text>botão</Text>
    </TouchableOpacity>
  )
}