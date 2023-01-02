import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";

export default function Menu({ title, items }) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      isOpen = setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false)
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(true)
    }
  }, [windowWidth]);

  return (
    <section>
      <nav className="gap-y-2 md:gap-y-4 grid ">
        <h6
          onClick={toggleCollapse}
          className="text-primary-brand-color font-semibold text-lg flex justify-between items-center"
        >
          {title}
          <button className="w-6 h-6 rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color flex md:hidden items-center justify-center">
            <span className={`transition-all transform ${isOpen ? "rotate-180" : "" }`}>
              <IoIosArrowDown size={15} />
            </span>
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid gap-y-1 md:gap-y-2">
              {items.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-primary-brand-color transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
}
