import React, { useEffect, useState } from "react";
import CategoriesComponent from "./categoriesComponent";
import axios from "axios";

const CategoriesContainer = () => {

    const [categories, setCategories] = useState([]);

    // useEffect( () => {
    //     fetch("http://localhost:8081/categories")
    //     .then((response) => response.json())
    //     .then((response) => {
    //         const {status, data} = response;

    //         if(status === 101)
    //         {
    //             setCategories(data);
    //         }
            
    //     })
    // },[])

    useEffect( () => {
        axios.get("http://localhost:8081/categories")
        .then((response) => {
            const {data} = response;

            if(data.status === 101)
            {
                setCategories(data.data);
            }
            
        })
    },[])

    return <CategoriesComponent categories={categories}/>
}

export default CategoriesContainer;