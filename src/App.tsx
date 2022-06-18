import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Button, Text } from "@mantine/core";
import { useSelector, useDispatch, Provider, shallowEqual } from "react-redux";

import { store, addToFirst, addToSecond, RootState, doNothing } from "./store";

const DoNothing = () => {
  const dispatch = useDispatch();
  return (
    <Button size="xl" m={4} onClick={() => dispatch(doNothing())}>
      Do Nothing
    </Button>
  );
};

const AddFirstButton = () => {
  const dispatch = useDispatch();
  return (
    <Button size="xl" m={4} onClick={() => dispatch(addToFirst())}>
      Add To First
    </Button>
  );
};

const FirstValue = () => {
  const { firstNumber } = useSelector((state: RootState) => state, shallowEqual);
  return <Text>First Value: {firstNumber}</Text>;
};

const AddSecondButton = () => {
  const dispatch = useDispatch();
  return (
    <Button size="xl" m={4} onClick={() => dispatch(addToSecond())}>
      Add To Second
    </Button>
  );
};

const SecondValue = () => {
  const secondNumber = useSelector((state: RootState) => state.secondNumber);
  return <Text>Second Value: {secondNumber}</Text>;
};

const NumbersValue = () => {
  const numbers = useSelector((state: RootState) => state.numbers, shallowEqual);
  return <Text>Numbers Value: {numbers.join("")}</Text>;
};

function App() {
  return (
    <Provider store={store}>
      <Box p={10}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <DoNothing />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <AddFirstButton />
          <FirstValue />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <AddSecondButton />
          <SecondValue />
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <NumbersValue />
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
