import { Box, FlexBox } from "@codecademy/gamut";
import { StyleProviders } from "./StyleProviders";
import { Routing } from "./Routing";

function App() {
  return (
    <StyleProviders>
      <Box
        as="header"
        bg="background-selected"
        borderBottom={"1"}
        fontFamily="monospace"
        px={"16"}
        py={"8"}
        width="100%"
      >
        homeward bound
      </Box>
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
    </StyleProviders>
  );
}

export default App;
