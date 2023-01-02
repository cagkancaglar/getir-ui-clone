import { useEffect, useState } from "react";
import Title from "./ui/Title";
import Products from "../mock/products.json";
import ProductItem from "./ui/ProductItem";

export default function Favorites() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div>
      <Title className="px-4">Favoriler</Title>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-2 lg:gap-0.1 rounded-lg overflow-hidden">
        {products.length &&
          products.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
      </div>
    </div>
  );
}
