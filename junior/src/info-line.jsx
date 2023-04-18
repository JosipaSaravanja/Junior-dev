export const InfoLine = (props) => {
  console.log(props)
    return (
        <div className="line">
          <div className="line-name">{props.name}</div>
          <div className="line-info">{props.value}</div>
        </div>
    );
  };
  