import React, { useState } from 'react';
import { View, Button, FlatList } from 'react-native';
function rgp() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}
export default function AddColor() {
  const [colorArray, setcolorArray] = useState([]);

  return (
    <>
      <Button
        title="AddColor"
        onPress={() => setcolorArray([...colorArray, rgp()])}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colorArray}
        renderItem={({ item }) => (
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: item,
            }}
          ></View>
        )}
      />
    </>
  );
}

// export default function AddColor() {
//   const [colorArray, setcolorArray] = useState([]);
//   return (
//     <>
//       <Button
//         title="AddColor"
//         onPress={() => setcolorArray([...colorArray, 'hi'])}
//       />
//       {console.log(colorArray)}
//       <View
//         style={{
//           width: 150,
//           height: 150,
//           backgroundColor: 'rgb(200,0,0)',
//         }}
//       ></View>
//     </>
//   );
// }
