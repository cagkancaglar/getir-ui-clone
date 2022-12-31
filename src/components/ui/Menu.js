import React from "react";

export default function Menu({ title, items }) {
  return (
    <section>
      <nav className="gap-y-4 grid ">
        <h6 className="text-primary-brand-color font-semibold text-lg">{title}</h6>
          <nav>
            <ul className="grid gap-y-4">
                {items.map((item, index) => (
                    <li key={index}>
                        <a href="#" className="text-sm text-gray-700 hover:text-primary-brand-color transition-colors">
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
          </nav>
      </nav>
    </section>
  );
}
