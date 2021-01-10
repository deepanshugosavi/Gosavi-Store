import React, { createContext } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import FakeData from "./FakeData";
import { useLocalStore, useObserver } from "mobx-react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    totalItemsInCart: 0,
    addItemInCart: () => store.totalItemsInCart++,
    removeItemInCart: () => store.totalItemsInCart--,
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

function App() {
  return (
    <StoreProvider>
      <div className="global__container">
        <Header />
        <div className="main__container">
          {FakeData.map((v, i) => (
            <Products
              title={v.title}
              price={v.price}
              category={v.category}
              image={v.image}
              id={v.id}
            />
          ))}
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
