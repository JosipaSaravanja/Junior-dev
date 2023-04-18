import abilityData from './abilitydata.json'
import { AbilityLine } from './ability-line';

export const Ability = () =>{
    return (
    <div className="wrapper">
      <h2 className="title">Sposobnosti</h2>
      <hr />
      {abilityData.map((el)=>{
        return( <AbilityLine name ={el.name} value={el.value}></AbilityLine>)
      })}
    </div>
    );
  }
  
  