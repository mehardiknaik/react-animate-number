# react-animate-number

> number animation
>
> ![ezgif com-gif-maker](https://user-images.githubusercontent.com/96820742/164874532-40f91a9a-80a1-4636-8185-d65e1ec73a27.gif)

[![NPM](https://img.shields.io/npm/v/react-animate-number.svg)](https://www.npmjs.com/package/react-animate-number) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<p align="center">
  <a href="https://mehardiknaik.github.io/react-animate-number/">Demo
  </a>
</p>

## Install

```bash
npm i @hardiknaik/react-animate-number
```

## Usage

### Functional Component

```jsx
import React from "react";
import AnimatedNumbers from "@hardiknaik/react-animate-number";

const App = () => {
  return (
    <AnimatedNumbers
      number={444} // specify the number
      className="text-yellow" // specify the Class name (Optional)
      style={{ background: "red" }} // specify the Style (Optional)
      decimal={2} // specify the Decimal Places default to 0 (Optional)
    />
  );
};

export default App;
```

### Class Component

```tsx
import React, { Component } from "react";
import AnimatedNumbers from "@hardiknaik/react-animate-number";

class Example extends Component {
  render() {
    return (
      <AnimatedNumbers
        number={444} // specify the number
        className="text-yellow" // specify the Class name (Optional)
        style={{ background: "red" }} // specify the Style (Optional)
        decimal={2} // specify the Decimal Places default to 0 (Optional)
      />
    );
  }
}
```

## Customization

Change the below css variale to modify the colour and animation speed

```css
:root {
  /* Change the Animation Speed in ms or s */
  --duration: 500ms;
  /* Change the colour of the number when number will be incrementing */
  --increment: #00b200;
  /* Change the colour of the number when number will be decrementing */
  --decerement: red;
}
```

## Options details

Available options with example values:

```tsx
<AnimatedNumbers
  number={444}
  className="text-yellow"
  style={{ background: "red" }}
  decimal={2}
/>
```

| Parameter   |    Type    | Required | Defaults | Description                                                |
| ----------- | :--------: | :------: | :------: | ---------------------------------------------------------- |
| `number`    |   Number   |   yes    |    -     | Provide the number you want to animate.                    |
| `className` |   String   |    no    |    -     | Provide the Class Name.                                    |
| `style`     | CSS Object |    no    |    -     | Provide the Style.                                         |
| `decimal`   |   Number   |    no    |    0     | Provide the Decimal places you want to show to the number. |

## License

MIT © [Hardik Naik](https://github.com/mehardiknaik)
