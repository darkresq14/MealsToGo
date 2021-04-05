// @ts-nocheck
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { FlatListView } from "../../restaurants/components/restaurant-list.styles";

const NoFavoritesArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <FlatListView
      data={favorites}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetail", { restaurant: item })
            }
          >
            <Spacer position="bottom" size="large">
              {index === 0 ? (
                <Spacer position="top" size="large">
                  <RestaurantInfoCard restaurant={item} />
                </Spacer>
              ) : (
                <RestaurantInfoCard restaurant={item} />
              )}
            </Spacer>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <NoFavoritesArea>
      <Text center>No favorites yet</Text>
    </NoFavoritesArea>
  );
};
