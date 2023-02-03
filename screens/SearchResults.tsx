import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { ScrollView } from "react-navigation";
import SearchResult from "../components/SearchResults/SearchResult";
import { search } from "../utils/search";

interface Props {
  navigation: {
    getParam: (param: string) => any;
    setParams: (params: { searchTerm?: string; data?: any }) => void;
    navigate: (
      screen: string,
      params: { data: any; searchTerm: string }
    ) => void;
  };
}

const SearchResults: React.FC<Props> = ({ navigation }) => {
  const handleChange = (text: string) => {
    navigation.setParams({ searchTerm: text });
  };
  const handleSubmit = async () => {
    const data = await search(navigation.getParam("searchTerm"), "");
    navigation.setParams({ data });
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          value={navigation.getParam("searchTerm")}
          onChangeText={handleChange}
        />
        <Button title="🔍" onPress={handleSubmit} />
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {navigation.getParam("data").items.map((item: any) => (
          <SearchResult item={item} key={item.link} />
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
    width: 250,
    borderWidth: 1,
    padding: 10,
    borderRadius: 50,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default SearchResults;
