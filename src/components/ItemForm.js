import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
const [itemName, setItemName] = useState('')
const [itemCategory, setCategory] = useState('Produce')


function handleFormName(e){
  setItemName(e.target.value)
}

function handleCategory(e){
  setCategory(e.target.value)
}



function handleSubmit(e){
  e.preventDefault()
  const newItem = {
    id: uuid(),
    name: itemName,
    category: itemCategory
  }
  onItemFormSubmit(newItem)
}



  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleFormName} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
