import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GenreCardContainer = ({ children }: Props) => {
  return (
    <Box padding={1} borderRadius={2} overflow="hidden">
      {children}
    </Box>
  );
};

export default GenreCardContainer;
