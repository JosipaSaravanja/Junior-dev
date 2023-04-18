import data from './data.json'
import { InfoLine } from './info-line';

export const Info = () =>{
    return (
    <div className="wrapper">
      <h2 className="title">Opći podaci</h2>
      <hr />
      {data.map((el)=>{
        return( <InfoLine name ={el.name} value={el.value}></InfoLine>)
      })}
    </div>
    );
  }
  
  