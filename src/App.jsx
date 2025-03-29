import { createContext, useState } from "react"
import AppRoutes from "./routes/AppRoutes"

export const CarrinhoContext = createContext();

function App() {

  const[carrinho, setCarrinho] = useState([]);

  return (
    <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
      <AppRoutes />
    </CarrinhoContext.Provider>
  )
}

export default App