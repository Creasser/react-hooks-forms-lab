import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchCategory, setSearchCategory] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchCategory(event.target.value)
    
  }






  function handleFormSubmit(newItem) {
    console.log(newItem)
    setItems([...items, newItem])

  }






const searchItemsToDisplay = items.filter(item => {
  return searchCategory === item.name.toLowerCase()
  }
)

  const itemsToDisplay = items.filter((item) => {
     if (selectedCategory === "All"){ 
      console.log(searchItemsToDisplay)
      return true;}
    return item.category === selectedCategory;
  });

  function displayedItems (){
      if (searchItemsToDisplay.length === 1){
        console.log('i am being invoked')
        return searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
    }else{
      return itemsToDisplay.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))
    }
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {displayedItems()}
      </ul>
    </div>
  );
}

export default ShoppingList;


//could check to see if the searchItems to display is null or undefined