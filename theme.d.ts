import "@emotion/react";

import { CoreTheme } from "@codecademy/gamut-styles";

declare module "@emotion/react" {
  /* eslint-disable-next-line */
  export interface Theme extends CoreTheme {}
}
