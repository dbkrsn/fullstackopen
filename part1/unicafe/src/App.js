import { useState } from "react";

const Header = (props) => <h2>{props.header}</h2>;

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const Display = (props) => (
  <p>
    {props.text} {props.count}
  </p>
);

const Statistics = (props) => {
  const { good, neutral, bad } = props.statistics;
  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
  const positive = (good / total) * 100;
  return (
    <>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const header = "give feedback";
  const statistics = {
    good,
    neutral,
    bad,
  };

  return (
    <>
      <Header header={header} />
      <Button name="good" handleClick={() => setGood(good + 1)} />
      <Button name="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button name="bad" handleClick={() => setBad(bad + 1)} />
      <Header header="statistics" />
      <Display text="good" count={good} />
      <Display text="neutral" count={neutral} />
      <Display text="bad" count={bad} />
      <Statistics statistics={statistics} />
    </>
  );
};

export default App;
