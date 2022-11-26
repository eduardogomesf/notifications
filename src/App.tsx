import { ThemeProvider } from "styled-components";
import { NotificationsContainer } from "./components/NotificationsContainer";
import { GlobalStyles } from "./styles/global";

import { defaultTheme } from './styles/themes/default'

export function App () {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NotificationsContainer />
      <GlobalStyles />
    </ThemeProvider>
  )
}
