import { createContext, useState } from "react"
import AppRoutes from "./routes/AppRoutes"
import AuthProvider from "./contexts/AuthContext";

export const CarrinhoContext = createContext();
function App() {

  const[carrinho, setCarrinho] = useState([]);

  return (
    <AuthProvider>
      <CarrinhoContext.Provider value={{ carrinho, setCarrinho }}>
        <AppRoutes />
      </CarrinhoContext.Provider>
    </AuthProvider>
  )
}

export default App