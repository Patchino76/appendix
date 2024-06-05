import {Hero} from "../types/hero"

export interface HeroDetailsProps {
  hero: Hero
  onUpdateName: (hero: Hero) => void
}

const HeroDetails = ({hero, onUpdateName}: HeroDetailsProps) => {
  const handleUpdateName = (e: React.ChangeEvent<HTMLInputElement>) => {

    const updatedName = e.target.value
    onUpdateName({id: hero.id, name: updatedName})
  }
  
  return (
    <div>
      <h2 className="text-2xl font-bold">Hero Details</h2>

      <div className="gap-2 my-3 flex flex-col" >

        <div className="flex gap-2">
            <span className="bg-slate-700 text-white rounded-l p-2">ID:</span>
            <span className="bg-slate-300 rounded-l p-2">{hero.id}</span>
        </div>
        <div className="flex gap-2">
            <span className="bg-slate-700 text-white rounded-l p-2">Name:</span>
            <span className="bg-slate-300 rounded-l p-2">{hero.name}</span>
        </div>

        <div>
          <input className="bg-slate-300 rounded-l p-2" placeholder="Change name"  type="text" 
          onChange={handleUpdateName} />
        </div>
      </div>
    </div>
  )
}

export default HeroDetails
