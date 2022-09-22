import React from "react";
import "./App.css";
import Content from "./components/content/index";
import { Layout } from "./components/layout/index";
import { Provider } from "react-redux";
import { store } from "redux/store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Content />
      </Layout>
    </Provider>
  );
}

export default App;
