import React from "react";

const BadgeCategory = ({ category, selectedCategory, onClick }) => {
  const activeCategory = (id) => id === selectedCategory && "bg-purple-100 shadow-none";
  return (
    <div className={`px-3 py-1 my-1 mx-2 first:ml-0 last:mr-0 rounded-lg cursor-pointer shadow ${activeCategory(category.id)}`} onClick={onClick}>
      {category.name}
    </div>
  );
};

export default BadgeCategory;
