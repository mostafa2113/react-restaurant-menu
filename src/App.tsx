import NavBar from "./components/NavBar/NavBar.tsx";
import {Container} from "react-bootstrap";
import Header from "./components/Header/Header.tsx";
import Category from "./components/Category/Category.tsx";
import IteamList from "./components/ItemList/ItemList.tsx";
import {items} from "./data.ts"
import {useState} from "react";

function App() {
  const [itemsData, setItemsData] = useState(items);
  const allCategory=['الكل', ... new Set(items.map(item=>item.category))]
  const filterByCategory = (category:string)=>{
    if (category!="الكل"){
      const newItemsData=items.filter(item=>item.category==category)
      setItemsData(newItemsData);
    }else{
      setItemsData(items);
    }
  }
  const filterBySearch = (title:string)=>{
    if (title!=""){
      const newItemsData=items.filter(item=>item.title==title)
      setItemsData(newItemsData);
    }else{
      setItemsData(items);
    }
  }
  return (
    <div className={"color-body font"}>
      <NavBar filterbySearch={filterBySearch}/>
        <Container>
          <Header/>
          <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
          <IteamList itemsData={itemsData}/>
        </Container>
    </div>
  )
}

export default App
