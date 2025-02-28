import { ColorMode, GamutProvider, theme } from "@codecademy/gamut-styles";

export const StyleProviders: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <GamutProvider theme={theme}>
      <ColorMode bg="paleBlue" mode="light" minHeight={"100vh"}>
        {children}
      </ColorMode>
    </GamutProvider>
  );
};
