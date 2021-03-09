type ScoreboardPropsType = {
  count: number;
};

const Scoreboard = (props: ScoreboardPropsType) => {
  return (
    <div className="Scoreboard">
      <h1 className={props.count === 5 ? "ScoreboardRed" : ""}>
        {props.count}
      </h1>
    </div>
  );
};

export default Scoreboard;
