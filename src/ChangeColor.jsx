import React, { useState } from 'react';
import { View } from 'react-native';
import Buttons from './component/Buttons';
export default function ChangeColor() {
  const [Red, setRed] = useState(0);
  const [Green, setGreen] = useState(0);
  const [Blue, setBlue] = useState(0);
  const changeValue = 15;

  function setColor(name, change) {
    console.log(Red, Green, Blue);
    switch (name) {
      case 'red':
        Red + change > 255 || Red + change < 0 ? null : setRed(Red + change);
        return;
      case 'green':
        Green + change > 255 || Green + change < 0
          ? null
          : setGreen(Green + change);
        return;

      case 'blue':
        Blue + change > 255 || Blue + change < 0
          ? null
          : setBlue(Blue + change);
        return;
    }
  }

  return (
    <>
      <Buttons
        name="red"
        increaseColor={() => setColor('red', changeValue)}
        decreaseColor={() => setColor('red', changeValue * -1)}
      />
      <Buttons
        name="green"
        increaseColor={() => setColor('green', changeValue)}
        decreaseColor={() => setColor('green', changeValue * -1)}
      />
      <Buttons
        name="blue"
        increaseColor={() => setColor('blue', changeValue)}
        decreaseColor={() => setColor('blue', changeValue * -1)}
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${Red},${Green},${Blue})`,
          margin: 'auto',
        }}
      ></View>
    </>
  );
}
