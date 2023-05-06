import { useState } from "react";
import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title="This is me" />
      <Section>This is My Section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["James", "Jade", "Nicky"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
