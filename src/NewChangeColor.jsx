import React, { useReducer } from 'react';
import { View } from 'react-native';
import Buttons from './component/Buttons';

function reducer(state, action) {
  //  state {red:0,green:0,blue:0}
  // action  {colorName:'red'|'green'|'blue', amount:15}

  switch (action.colorName) {
    case 'red':
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      return { ...state, red: state.red + action.amount };
    case 'green':
      if (
        state.green + action.amount > 255 ||
        state.green + action.amount < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.amount };
    case 'blue':
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
}

export default function ChangeColor() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const increaseValue = 15;

  return (
    <>
      <Buttons
        name="red"
        increaseColor={() =>
          dispatch({ colorName: 'red', amount: increaseValue })
        }
        decreaseColor={() =>
          dispatch({ colorName: 'red', amount: increaseValue * -1 })
        }
      />
      <Buttons
        name="green"
        increaseColor={() =>
          dispatch({ colorName: 'green', amount: increaseValue })
        }
        decreaseColor={() =>
          dispatch({ colorName: 'green', amount: increaseValue * -1 })
        }
      />
      <Buttons
        name="blue"
        increaseColor={() =>
          dispatch({ colorName: 'blue', amount: increaseValue })
        }
        decreaseColor={() =>
          dispatch({ colorName: 'blue', amount: increaseValue * -1 })
        }
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          margin: 'auto',
        }}
      ></View>
    </>
  );
}
