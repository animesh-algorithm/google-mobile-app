import React from "react";
import {
  View,
  Text,
  Linking,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
interface SearchResultProps {
  item: {
    formattedUrl: string;
    link: string;
    title: string;
    htmlSnippet: string;
  };
}
const SearchResult: React.FC<SearchResultProps> = ({ item }) => {
  const { width } = useWindowDimensions();

  const pressHandler = async () => {
    await Linking.openURL(item.link);
  };

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={pressHandler}>
      <View style={styles.container} key={item.link}>
        <View>
          <Text numberOfLines={1} style={styles.url}>
            {item.formattedUrl}
          </Text>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
        </View>
        <RenderHtml
          baseStyle={styles.snippet}
          contentWidth={width}
          source={{
            html: item.htmlSnippet,
          }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
  },
  url: {
    color: "#463715",
    textDecorationLine: "underline",
    fontSize: 14,
    lineHeight: 20,
    overflow: "hidden",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
    overflow: "hidden",
    color: "#2d52ba",
  },
  snippet: {
    fontSize: 14,
    color: "#3E3E3E",
  },
});

export default SearchResult;
