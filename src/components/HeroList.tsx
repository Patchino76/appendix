import { ReactEventHandler, useState } from "react";
import { HEROES } from "../data/mock-heroes";
import { Hero } from "../types/hero";

interface HeroListProps {
  heroes: Hero[];
  onSelectId: (id: number) => void;
}

const HeroList = ({ heroes, onSelectId }: HeroListProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Heroes List</h2>
      <ul className="flex flex-col gap-2 my-3">
        {heroes.map((hero) => (
          <li
            className="flex gap-0 cursor-pointer"
            key={hero.id}
            onClick={() => {
              onSelectId(hero.id);
            }}
          >
            <span className="bg-slate-700 text-white rounded-l p-2">
              {hero.id}
            </span>
            <span className="bg-slate-300 p-2 rounded-r w-1/4">
              {hero.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroList;
