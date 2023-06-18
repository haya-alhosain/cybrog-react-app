import './App.css';
import { Container } from './components/index'
import { Header, Footer } from './sections/index'
import { Home } from './Pages'
const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />

    </>
  )
}
export default App;