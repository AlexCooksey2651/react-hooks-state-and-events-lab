import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // const displayedItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory)

  const displayedItems = items.filter(item => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return (item.category === selectedCategory)
    }
  })

  const renderedList = displayedItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  function handleFilter(evt) {
    setSelectedCategory(evt.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {renderedList}
      </ul>
    </div>
  );
}

export default ShoppingList;
