export const AbilityLine = (props) => {
  console.log(props);
  return (
    <div className="ability">
      <div className="ability-line-name">{props.name}</div>
      <div className="ability-line-info">
        <div style={{width: props.value + "%"}}>
        {props.value}
        </div>
      </div>
    </div>
  );
};
