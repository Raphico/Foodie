import { ThemeProvider } from "styled-components"
import Container from "./styles/Container.styled"
import GlobalStyle from "./styles/global"
import theme from "./styles/theme"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import { QueryClientProvider, QueryClient } from "react-query"
import Watch from "./pages/Watch"
import { motion } from "framer-motion"
import { fade } from "./utils/motion"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider theme={theme}>
          <Container>
            <GlobalStyle />

            <motion.div
              variants={fade}
              initial="hidden"
              whileInView="show"
            >
              <Header />
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Watch />} path="/watch/:youTubeId/:title" />
              </Routes>
            </motion.div>
          </Container>
      </ThemeProvider>
    </Router>
    </QueryClientProvider>
  )
}

export default App
