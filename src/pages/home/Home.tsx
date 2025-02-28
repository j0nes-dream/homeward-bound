import { FlexBox, Text } from "@codecademy/gamut";
import { Link } from "react-router";
export const Home: React.FC = () => {
  return (
    <FlexBox center flexDirection={"column"} width="100%">
      <Text as="h1" variant="title-md">
        Help your new best friend find you.
      </Text>
      <Link to="/login">Login</Link>
    </FlexBox>
  );
};
