import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import DataTable from "./components/DataTable";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <DataTable />
    </div>
  );
}

export default App;
