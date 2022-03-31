import React from "react";
import {TextInput, View} from "react-native";

const Input = ({text, onTextHandle, styles, placeholder, ...props}) => {
    <View>
        <TextInput
            {...props}
            style={styles.input}
            defaultValue={text}
            onChangeText={onTextHandle}
            placeholder={placeholder}
        />
    </View>
}

export default Input;