import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./game-card-container";
import GameCardSkeleton from "./game-card-skeleton";
import GenreCardSkeleton from "./genre-card-skeleton";
import GenreCardContainer from "./genre-card-container";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genreSkeleton = Array(19).fill(null);
  if(error) return null;
//   if (isLoading) return <Spinner />;

  return (
    <List>
        {isLoading &&
          genreSkeleton.map((skeleton) => (
            <GenreCardContainer>
              <GenreCardSkeleton key={skeleton} />
            </GenreCardContainer>
          ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
