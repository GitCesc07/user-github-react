import Header from "./components/Header.jsx"
import Buscador from "./components/Buscador.jsx"

function App() {

  return (
    <>
      <main className="container mx-auto lg:h-screen flex items-center justify-center p-8 md:p-0">
        <div className="lg:w-3/6 md:w-4/6">
          <Header />
          <Buscador />
        </div>
      </main>
    </>
  );
}

export default App
