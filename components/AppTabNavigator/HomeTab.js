import React from "react";
import { Container, Content, View, Thumbnail, Icon, Row } from "native-base";
import { StyleSheet, Text, ScrollView } from "react-native";
import CardComponent from "../CardComponent";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const items = [
  {
    username: "johncena",
    avatar: "https://robohash.org/johncena.png",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam mollitia earum voluptates expedita tempore praesentium culpa! Repellat nam est explicabo vel eius. Id, eius rem.",
  },
  {
    username: "tripleh",
    avatar: "https://robohash.org/triple.png",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, id nihil temporibus exercitationem consequuntur consectetur?",
  },
  {
    username: "batista",
    avatar: "https://robohash.org/batista.png",
    text:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, velit?",
  },
];

const HomeTab = () => {
  return (
    <Container style={styles.container}>
      <Content>
        <View style={{ height: 100 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 7,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Stories</Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon name="md-play" style={{ fontSize: 14 }}></Icon>
              <Text style={{ fontWeight: "bold" }}> Watch All</Text>
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingStart: 5,
                paddingEnd: 5,
              }}
            >
              <Thumbnail
                style={{
                  marginHorizontal: 5,
                  borderColor: "pink",
                  borderWidth: 2,
                }}
                source={require("../../assets/StoriesHeaderThumbnails/1.jpg")}
              />
              <Thumbnail
                style={{
                  marginHorizontal: 5,
                  borderColor: "pink",
                  borderWidth: 2,
                }}
                source={require("../../assets/StoriesHeaderThumbnails/2.jpg")}
              />
              <Thumbnail
                style={{
                  marginHorizontal: 5,
                  borderColor: "pink",
                  borderWidth: 2,
                }}
                source={require("../../assets/StoriesHeaderThumbnails/3.jpg")}
              />
              <Thumbnail
                style={{
                  marginHorizontal: 5,
                  borderColor: "pink",
                  borderWidth: 2,
                }}
                source={require("../../assets/StoriesHeaderThumbnails/4.jpg")}
              />

              <Thumbnail
                style={{
                  marginHorizontal: 5,
                  borderColor: "pink",
                  borderWidth: 2,
                }}
                source={require("../../assets/StoriesHeaderThumbnails/5.jpg")}
              />
              <Thumbnail
                style={{
                  marginHorizontal: 5,
                  borderColor: "pink",
                  borderWidth: 2,
                }}
                source={require("../../assets/StoriesHeaderThumbnails/6.jpg")}
              />
              <Thumbnail
                style={{
                  marginHorizontal: 5,
                  borderColor: "pink",
                  borderWidth: 2,
                }}
                source={require("../../assets/StoriesHeaderThumbnails/7.jpg")}
              />
            </ScrollView>
          </View>
        </View>
        {items.map((item) => (
          <CardComponent
            key={item.username}
            username={item.username}
            avatar={item.avatar}
            text={item.text}
          />
        ))}
      </Content>
    </Container>
  );
};

export default HomeTab;
