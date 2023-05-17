import React from "react";
import "./categoriesComponent.css";

const CategoriesComponent = (props) => {
    const {categories} = props;

  return (
    <ul>
        {categories.map((item, index) => {
            return <li key={index}>
                <div><img src={item.img} alt={item.name} className="catg-img"/></div>
                <div>{item.name}</div>
            </li>
        })}
    </ul>
  );
};

export default CategoriesComponent;
