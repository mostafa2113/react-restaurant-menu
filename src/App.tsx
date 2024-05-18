import NavBar from "./components/NavBar/NavBar.tsx";
import {Container} from "react-bootstrap";
import Header from "./components/Header/Header.tsx";
import Category from "./components/Category/Category.tsx";
import IteamList from "./components/ItemList/ItemList.tsx";
import {items} from "./data.ts"
import {useState} from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);
  return (
    <div className={"color-body font"}>
      <NavBar/>
        <Container>
          <Header/>
          <Category/>
          <IteamList itemsData={itemsData}/>
        </Container>
    </div>
  )
}

export default App
