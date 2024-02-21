import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="1px"/>
      <CardBody>
        <SkeletonText height={1} />
      </CardBody>
    </Card>
  );
};

export default GenreCardSkeleton;
