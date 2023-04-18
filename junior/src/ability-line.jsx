export const AbilityLine = (props) => {
  console.log(props);
  return (
    <div className="ability">
      <div className="ability-line-name">{props.name}</div>
      <div className="ability-line-info">{props.value}</div>
    </div>
  );
};
