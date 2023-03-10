import { useEffect, useState } from "react";
import categoryData from "../mock/categories.json";
import Category from "./ui/Category";
import Title from  "./ui/Title";

export default function Categories() {
const [categories, setCategories] = useState([]);

useEffect(() =>{
  setCategories(categoryData);
},[])

  return (
    <div className="bg-white py-4">
        <div className="container mx-auto">
          <Title>Kategoriler</Title>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 xl:grid-cols-12">
            {categories && categories.map((category, index) => <Category key={index} category={category} />)}
          </div>
        </div>
    </div>
  )
}
