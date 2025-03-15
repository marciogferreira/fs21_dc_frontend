# Projeto FS21 DC Frontend

Este projeto foi desenvolvido com Vite e React.

## 🔥 Tecnologias Utilizadas
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## ⚙️ Como Executar o Projeto

1. **Clone o repositório**

```bash
git clone https://github.com/marciogferreira/fs21_dc_frontend.git
```

2. **Acesse o diretório do projeto**

```bash
cd fs21_dc_frontend
```

3. **Instale as dependências**

Usando npm:

```bash
npm install
```

Ou usando yarn:

```bash
yarn
```

4. **Execute o projeto**

Usando npm:

```bash
npm run dev
```

Ou usando yarn:

```bash
yarn dev
```

O projeto estará disponível em [http://localhost:5173](http://localhost:5173)

## 📚 Conceitos Importantes do React

### Componentes
Componentes são blocos reutilizáveis de código que definem partes da interface de usuário. No React, cada componente é uma função que retorna elementos JSX.

```jsx
function Welcome() {
  return <h1>Bem-vindo ao React!</h1>;
}
```

### Props
Props (propriedades) são argumentos passados para os componentes, permitindo que eles sejam dinâmicos.

```jsx
function Welcome(props) {
  return <h1>Bem-vindo, {props.name}!</h1>;
}

<Welcome name="Marcio" />
```

### Children
`children` é uma prop especial que representa o conteúdo aninhado dentro de um componente.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

<Card>
  <p>Conteúdo do Card</p>
</Card>
```

### useState
`useState` é um hook que permite adicionar estado a um componente funcional.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}
```

### useEffect
`useEffect` é um hook que lida com efeitos colaterais, como chamadas de API ou manipulação direta do DOM.

```jsx
import { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Tempo: {seconds} segundos</p>;
}
```

### Context API
O Context API é utilizado para compartilhar dados entre componentes sem a necessidade de passar props manualmente em cada nível da árvore de componentes.

```jsx
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState('Marcio');
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

function UserProfile() {
  const { user } = useContext(UserContext);
  return <p>Usuário: {user}</p>;
}

function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}
```

---

Com isso, você terá uma boa base para começar a trabalhar com o projeto e entender os conceitos fundamentais do React. 🚀

