import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const Search = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const onTextHandle = (words) => {
    setText(words);
  }
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};
export default Search;