// @ts-nocheck
import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FadeInView } from "../../../components/animations/fade.animation";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurant/restaurant.context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FlatListView } from "../components/restaurant-list.styles";
import { Search } from "../components/search.component";

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  const { error: locationError } = useContext(LocationContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  const hasError = !!error || !!locationError;

  return (
    <SafeArea>
      <Search
        isFavoritesToggled={isToggled}
        onFavoritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavoritesBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      {hasError && (
        <Spacer position="left" size="large">
          <Text variant="error">{error.message}</Text>
        </Spacer>
      )}
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      {!hasError && (
        <FlatListView
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <Spacer position="bottom" size="large">
                  <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) =>
            item.name ? item.name.toString() : item.toString()
          }
        />
      )}
    </SafeArea>
  );
};
