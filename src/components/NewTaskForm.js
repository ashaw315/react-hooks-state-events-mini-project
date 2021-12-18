import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  
  const [text, setNewItem] = useState("")
  const [category, setNewCategory] = useState("Code")

  function handleCategorySelect(event) {
    setNewCategory(event.target.value)
  }

  function handleNewItem(event) {
    setNewItem(event.target.value)
    console.log(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    onTaskFormSubmit({ category,text });
    setNewCategory("Code");
    setNewItem("")
  }
  
  const displayOptions = categories.map((cat) => {
    return (
      <option key={cat}>
        {cat}
      </option>
    )
  })

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input 
          onChange={handleNewItem} 
          type="text" 
          name="text" 
          value={text} />
      </label>
      <label>
        Category
        <select 
          onChange={handleCategorySelect} 
          name="category" value={category}>
        {displayOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
