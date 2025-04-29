import { Box, FlexBox, Text } from "@codecademy/gamut";
import { Routing } from "./Routing";

export const Layout: React.FC = () => {
  return (
    <>
      <FlexBox
        as="header"
        alignItems={"center"}
        bg="background-selected"
        borderBottom={"1"}
        px={"16"}
        py={"8"}
        width="100%"
        justifyContent={"space-between"}
      >
        <Text fontFamily="monospace">homeward bound</Text>
      </FlexBox>
      <Box as="main" mx={"16"} my={"32"}>
        <Routing />
      </Box>
      <FlexBox
        as="footer"
        bg="background"
        borderTop={"1"}
        bottom={0}
        center
        position={"absolute"}
        p={"4"}
        fontSize={".75rem"}
        fontFamily={"accent"}
        width="100%"
      >
        © homeward bound co.
      </FlexBox>
    </>
  );
};
