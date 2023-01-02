import { useState, useEffect } from "react";
import CardsData from "../mock/cards.json";

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(CardsData);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-0 md:p-0">
      {cards.length &&
        cards.map((card) => (
          <div className="bg-white p-14 rounded-lg shadow-md flex flex-col items-center text-center">
            <img className="w-[150px] h-[150px] mb-6" src={card.image} alt={card.title} />
            <h6 className="text-lg text-primary-brand-color font-semibold">{card.title}</h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
}
