import abilityData from './abilitydata.json'
import { InfoLine } from './info-line';

export const Ability = () =>{
    return (
    <div className="wrapper">
      <h2 className="title">Sposobnosti</h2>
      <hr />
      {abilityData.map((el)=>{
        return( <InfoLine name ={el.name} value={el.value}></InfoLine>)
      })}
    </div>
    );
  }
  
  