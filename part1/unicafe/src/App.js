import { useState } from "react";

const Header = (props) => <h2>{props.header}</h2>;

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.name}</button>;
};

const Statistics = (props) => {
  const { good, neutral, bad } = props.statistics;

  const total = good + neutral + bad;
  const average = (good * 1 + bad * -1) / total;
  const positive = (good / total) * 100;

  if (good > 0 || neutral > 0 || bad > 0) {
    return (
      <table>
        <tbody>
          <tr>
            <StatisticLine text="good" value={good} />
          </tr>
          <tr>
            <StatisticLine text="neutral" value={neutral} />
          </tr>
          <tr>
            <StatisticLine text="bad" value={bad} />
          </tr>
          <tr>
            <StatisticLine text="all" value={total} />
          </tr>
          <tr>
            <StatisticLine text="average" value={average} />
          </tr>
          <tr>
            <StatisticLine text="positive" value={`${positive} %`} />
          </tr>
        </tbody>
      </table>
    );
  }
  return <p>No feedback given</p>;
};

const StatisticLine = (props) => (
  <>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </>
);

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
      <Statistics statistics={statistics} />
    </>
  );
};

export default App;
