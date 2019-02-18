# Info

# Create React App

[Create React App](https://github.com/facebook/create-react-app) is a tool built by developers at Facebook to help you build React applications.

Install it using this command:

```sh
npx create-react-app your-app-name
cd your-app-name
```

Start your app using `yarn start` command


### React Component example:
```javascript
class Something extends React.Component {

}
```



### Builtin Elements:
```html
  - <div>
  - <span>
  - <p>
  - <something>
```

### ReactJS Components:
```javascript
- <Something />

// out:
        - React.createElement(Something)

// this.props:
              - { }

```

```javascript
// in:
      - <Something other="than" />

// out:
      - React.createElement(Something, { other: 'than' })

// this.props:
              - { other: 'than' }
```

```javascript
// special prop: "children"

                - <Something other="than">hi</Something>

// out:
       - React.createElement(Something, { other: 'than' }, "hi")

// this.props:
              - { other: 'than', children: 'hi' }
```
# Steps

# Step 1:

```javascript
class MainApp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              console.log("Button 1 has been clicked");
            }}
          />
          <button
            onClick={() => {
              console.log("Button 2 has been clicked");
            }}
          />
          <button
            onClick={() => {
              console.log("Button 3 has been clicked");
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              console.log("Button 4 has been clicked");
            }}
          />
          <button
            onClick={() => {
              console.log("Button 5 has been clicked");
            }}
          />
          <button
            onClick={() => {
              console.log("Button 6 has been clicked");
            }}
          />
        </div>
        <div>
          <button
            onClick={() => {
              console.log("Button 7 has been clicked");
            }}
          />
          <button
            onClick={() => {
              console.log("Button 8 has been clicked");
            }}
          />
          <button
            onClick={() => {
              console.log("Button 9 has been clicked");
            }}
          />
        </div>
      </div>
    );
  }
}
```

# Step 2:

```javascript
class Box extends React.Component {
  render() {
    const { handleClick } = this.props;
    return <button onClick={handleClick} />;
  }
}

class MainApp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Box
            handleClick={() => {
              console.log("Button 1 has been clicked");
            }}
          />
          <Box
            handleClick={() => {
              console.log("Button 2 has been clicked");
            }}
          />
          <Box
            handleClick={() => {
              console.log("Button 3 has been clicked");
            }}
          />
        </div>
        <div>
          <Box
            handleClick={() => {
              console.log("Button 4 has been clicked");
            }}
          />
          <Box
            handleClick={() => {
              console.log("Button 5 has been clicked");
            }}
          />
          <Box
            handleClick={() => {
              console.log("Button 6 has been clicked");
            }}
          />
        </div>
        <div>
          <Box
            handleClick={() => {
              console.log("Button 7 has been clicked");
            }}
          />
          <Box
            handleClick={() => {
              console.log("Button 8 has been clicked");
            }}
          />
          <Box
            handleClick={() => {
              console.log("Button 9 has been clicked");
            }}
          />
        </div>
      </div>
    );
  }
}
```

# Step 3:

```javascript
class Box extends React.Component {
  render() {
    const { handleClick, pathName } = this.props;
    return (
      <button
        onClick={() => {
          handleClick(pathName);
        }}
      />
    );
  }
}

class MainApp extends React.Component {
  handleClick = pathName => {
    console.log("path", pathName, "has been clicked");
  };

  renderButton(pathName) {
    return <Box handleClick={this.handleClick} pathName={pathName} />;
  }
  render() {
    return (
      <div>
        <div>
          {this.renderButton(`r1c1`)}
          {this.renderButton(`r1c2`)}
          {this.renderButton(`r1c3`)}
        </div>
        <div>
          {this.renderButton(`r2c1`)}
          {this.renderButton(`r2c2`)}
          {this.renderButton(`r2c3`)}
        </div>
        <div>
          {this.renderButton(`r3c1`)}
          {this.renderButton(`r3c2`)}
          {this.renderButton(`r3c3`)}
        </div>
      </div>
    );
  }
}
```

# Step 4:

```javascript
class MainApp extends React.Component {
  handleClick = pathName => {
    console.log("path", pathName, "has been clicked");
  };

  renderButton(pathName) {
    return (
      <Box handleClick={this.handleClick} pathName={pathName} key={pathName} />
    );
  }
  render() {
    const line = 3;
    const column = 3;

    const batches = [];
    for (let i = 1; i <= line; i++) {
      const lineButtons = [];
      for (let j = 1; j <= column; j++) {
        lineButtons.push(this.renderButton(`r${i}c${j}`));
      }
      batches.push(lineButtons);
    }

    return (
      <div>
        <div>
          {batches.map((batch, i) => (
            <div key={`batch-${i}`}>{batch}</div>
          ))}
        </div>
      </div>
    );
  }
}
```

# Step 5:

```javascript
class Box extends React.Component {
  render() {
    const { handleClick, pathName, checked } = this.props;
    return (
      <button
        onClick={() => {
          handleClick(pathName);
        }}
      >
        {checked || "-"}
      </button>
    );
  }
}

class MainApp extends React.Component {
  state = {
    checked: {},
    nextTurn: "x"
  };

  // or

  // constructor(props, context) {
  //   super(props, context)
  //   this.state = {
  //     checked: {},
  //     nextTurn: 'x'
  //   }
  // }

  handleClick = pathName => {
    const currentTurn = this.state.nextTurn;
    const nextTurn = currentTurn === "x" ? "o" : "x";

    this.setState(oldState => ({
      checked: { ...oldState.checked, [pathName]: currentTurn },
      nextTurn
    }));
  };

  renderButton(pathName) {
    return (
      <Box
        handleClick={this.handleClick}
        pathName={pathName}
        key={pathName}
        checked={this.state.checked[pathName]}
      />
    );
  }

  render() {
    const line = 3;
    const column = 3;

    const batches = [];
    for (let i = 1; i <= line; i++) {
      const lineButtons = [];
      for (let j = 1; j <= column; j++) {
        lineButtons.push(this.renderButton(`r${i}c${j}`));
      }
      batches.push(lineButtons);
    }

    return (
      <div>
        <div>
          {batches.map((batch, i) => (
            <div key={`batch-${i}`}>{batch}</div>
          ))}
        </div>
      </div>
    );
  }
}
```

# Step 6:

```javascript
class MainApp extends React.Component {
  state = {
    checked: {},
    nextTurn: "x"
  };

  handleClick = pathName => {
    const currentTurn = this.state.nextTurn;
    const nextTurn = currentTurn === "x" ? "o" : "x";
    const checked = { ...this.state.checked, [pathName]: currentTurn };

    this.setState({
      checked,
      nextTurn
    });
  };

  renderButton(pathName) {
    const checked = this.state.checked[pathName];
    return (
      <Box
        handleClick={this.handleClick}
        pathName={pathName}
        key={pathName}
        checked={checked}
      />
    );
  }

  render() {
    const line = 3;
    const column = 3;

    const batches = [];
    for (let i = 1; i <= line; i++) {
      const lineButtons = [];
      for (let j = 1; j <= column; j++) {
        lineButtons.push(this.renderButton(`r${i}c${j}`));
      }
      batches.push(lineButtons);
    }

    return (
      <div>
        <div>
          {batches.map((batch, i) => (
            <div key={`batch-${i}`}>{batch}</div>
          ))}
        </div>
      </div>
    );
  }
}
```

# Step 7.1:

```javascript
class Box extends React.Component {
  render() {
    const { handleClick, pathName, checked, disabled } = this.props;
    return (
      <button
        onClick={() => {
          if (!disabled) {
            handleClick(pathName);
          }
        }}
      >
        {checked || "-"}
      </button>
    );
  }
}

class MainApp extends React.Component {
  state = {
    checked: {},
    nextTurn: "x",
    winner: null
  };

  handleClick = pathName => {
    const currentTurn = this.state.nextTurn;
    const nextTurn = currentTurn === "x" ? "o" : "x";
    const checked = { ...this.state.checked, [pathName]: currentTurn };

    this.setState({
      checked,
      nextTurn
    });
  };

  renderButton(pathName) {
    const checked = this.state.checked[pathName];
    return (
      <Box
        handleClick={this.handleClick}
        pathName={pathName}
        key={pathName}
        checked={checked}
        disabled={checked || this.state.winner}
      />
    );
  }

  render() {
    const { winner } = this.state;

    const line = 3;
    const column = 3;

    const batches = [];
    for (let i = 1; i <= line; i++) {
      const lineButtons = [];
      for (let j = 1; j <= column; j++) {
        lineButtons.push(this.renderButton(`r${i}c${j}`));
      }
      batches.push(lineButtons);
    }

    return (
      <div>
        <div>
          {batches.map((batch, i) => (
            <div key={`batch-${i}`}>{batch}</div>
          ))}
        </div>
        {winner ? <div>Winner: {winner}</div> : null}
      </div>
    );
  }
}
```
# Step 7.2:

```javascript
class MainApp extends React.Component {
  state = {
    checked: {},
    nextTurn: "x",
    winner: null
  };

  size = 3;

  handleClick = pathName => {
    const currentTurn = this.state.nextTurn;
    const nextTurn = currentTurn === "x" ? "o" : "x";
    const checked = { ...this.state.checked, [pathName]: currentTurn };

    this.setState({
      checked,
      nextTurn
    });
    this.calculateWinner(checked);
  };

  renderButton(pathName) {
    const checked = this.state.checked[pathName];
    return (
      <Box
        handleClick={this.handleClick}
        pathName={pathName}
        key={pathName}
        checked={checked}
        disabled={checked || this.state.winner}
      />
    );
  }

  render() {
    const { winner } = this.state;
    const { size } = this;

    const batches = [];
    for (let i = 1; i <= size; i++) {
      const lineButtons = [];
      for (let j = 1; j <= size; j++) {
        lineButtons.push(this.renderButton(`r${i}c${j}`));
      }
      batches.push(lineButtons);
    }

    return (
      <div>
        <div>
          {batches.map((batch, i) => (
            <div key={`batch-${i}`}>{batch}</div>
          ))}
        </div>
        {winner ? <div>Winner: {winner}</div> : null}
      </div>
    );
  }
}
```

# Step 8:  ```(winner/looser) logic```

```javascript
      nextTurn
    });
    this.calculateWinner(checked);
  };

*  calculateWinner(checked) {
    const { size } = this;
    let winner;

    if (Object.keys(checked).length < size) {
      return;
    }

    for (let line = 1; line <= size; line++) {
      {
        // left to right check

      }
    }
  }

  renderButton(pathName) {
    const checked = this.state.checked[pathName];
    return (
```

# Step 8.1:  ```(winner/looser) logic - left to right check```

```javascript
calculateWinner(checked) {
    const { size } = this;
    let winner;

    if (Object.keys(checked).length < size) {
      return;
    }

    for (let line = 1; line <= size; line++) {
      {
       * // left to right check
        const firstItem = checked[`r${line}c1`];
        if (firstItem) {
          let allItemsAreSame = true;
          for (let column = 1; column <= size; column++) {
            if (checked[`r${line}c${column}`] !== firstItem) {
              allItemsAreSame = false;
              break;
            }
          }
          if (allItemsAreSame) {
            winner = firstItem;
            break;
          }
        }
      }
      {
        // Up to down check
      }
    }
    if (winner) {
      this.setState({ winner });
    }
  }
```

# Step 8.2:  ```(winner/looser) logic - Up to down check```

```javascript
calculateWinner(checked) {
    const { size } = this;
    let winner;

    if (Object.keys(checked).length < size) {
      return;
    }

    for (let line = 1; line <= size; line++) {
      {
        // left to right check
        const firstItem = checked[`r${line}c1`];
        if (firstItem) {
          let allItemsAreSame = true;
          for (let column = 1; column <= size; column++) {
            if (checked[`r${line}c${column}`] !== firstItem) {
              allItemsAreSame = false;
              break;
            }
          }
          if (allItemsAreSame) {
            winner = firstItem;
            break;
          }
        }
      }
      {
        * // Up to down check
        if (line === 1) {
          for (let column = 1; column <= size; column++) {
            const columnValue = checked[`r${line}c${column}`];

            if (!columnValue) {
              continue;
            }
            let allItemsAreSame = true;
            for (let columnRow = 1; columnRow <= size; columnRow++) {
              if (columnValue !== checked[`r${columnRow}c${column}`]) {
                allItemsAreSame = false;
              }
            }
            if (allItemsAreSame) {
              winner = columnValue;
              break;
            }
          }
        }
      }
      {
        // Diagonal checks
      }
    }
    if (winner) {
      this.setState({ winner });
    }
  }
```

# Step 8.3:  ```(winner/looser) logic - Diagonal Checks```

```javascript
calculateWinner(checked) {
    const { size } = this;
    let winner;

    if (Object.keys(checked).length < size) {
      return;
    }

    for (let line = 1; line <= size; line++) {
      {
        // left to right check
        const firstItem = checked[`r${line}c1`];
        if (firstItem) {
          let allItemsAreSame = true;
          for (let column = 1; column <= size; column++) {
            if (checked[`r${line}c${column}`] !== firstItem) {
              allItemsAreSame = false;
              break;
            }
          }
          if (allItemsAreSame) {
            winner = firstItem;
            break;
          }
        }
      }
      {
        // Up to down check
        if (line === 1) {
          for (let column = 1; column <= size; column++) {
            const columnValue = checked[`r${line}c${column}`];

            if (!columnValue) {
              continue;
            }
            let allItemsAreSame = true;
            for (let columnRow = 1; columnRow <= size; columnRow++) {
              if (checked[`r${columnRow}c${column}`] !== columnValue) {
                allItemsAreSame = false;
              }
            }
            if (allItemsAreSame) {
              winner = columnValue;
              break;
            }
          }
        }
      }
      {
        {
         * // Diagonal checks
          if (line === 1) {
            const firstItemLTR = checked[`r${line}c${1}`];
            if (firstItemLTR) {
              let allItemsAreSame = true;
              for (let checkingSet = 2; checkingSet <= size; checkingSet++) {
                if (
                  checked[`r${checkingSet}c${checkingSet}`] !== firstItemLTR
                ) {
                  allItemsAreSame = false;
                  break;
                }
              }
              if (allItemsAreSame) {
                winner = firstItemLTR;
                break;
              }
            }

            const firstItemRTL = checked[`r${line}c${size}`];
            if (firstItemRTL) {
              let allItemsAreSame = true;
              for (let checkingSet = 2; checkingSet <= size; checkingSet++) {
                if (
                  checked[`r${checkingSet}c${size - checkingSet + 1}`] !==
                  firstItemRTL
                ) {
                  allItemsAreSame = false;
                  break;
                }
              }

              if (allItemsAreSame) {
                winner = firstItemRTL;
                break;
              }
            }
          }
        }
      }
    }

    if (winner) {
      this.setState({ winner });
    }
  }
```
