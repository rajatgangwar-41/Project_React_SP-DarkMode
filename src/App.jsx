import Theme from "./components/Theme"
import ThemeProvider from "./components/ThemeProvider"

const App = () => {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  )
}

export default App