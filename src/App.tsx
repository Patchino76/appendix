import HeroList from "./components/HeroList";
import { Hero } from "./types/hero";
import { HEROES } from "./data/mock-heroes";
import { useState } from "react";
import HeroDetails from "./components/HeroDetails";

const App = () => {
  const [hero, setHero] = useState(HEROES[0]);
  const [heroes, setHeroes] = useState<Hero[]>(HEROES);

  const handleSelectedId = (id: number) => {
    const foundHero = heroes.find((hero) => hero.id === id);
    if (foundHero) setHero(foundHero);
    console.log(id);
  };

  const handleUpdateName = (hero : Hero) => {
    // console.log(hero);
    setHeroes(heroes.map((h) => (h.id === hero.id ? { ...h, name: hero.name } : h)));
    console.log(heroes)
  }
  return (
    <>
      <HeroList heroes={heroes} onSelectId={handleSelectedId} />
      <HeroDetails hero={hero} onUpdateName={handleUpdateName} />
    </>
  );
};

export default App;
