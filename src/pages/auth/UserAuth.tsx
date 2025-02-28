import { FlexBox } from "@codecademy/gamut";
import { Outlet } from "react-router";

export const UserAuth: React.FC<React.PropsWithChildren> = () => {
  return (
    <FlexBox center>
      <Outlet />
    </FlexBox>
  );
};
