import React from "react";

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

  calculateWinner(checked) {
    const { size } = this;
    let winner;

    if (Object.keys(checked).length < size) {
      return;
    }

    for (let line = 1; line <= size; line++) {
      {
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
                break;
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
          if (line === 1) {
            const firstItemLTR = checked[`r${line}c1`];
            if (firstItemLTR) {
              let allItemsAreSame = true;
              for (let checkingSet = 1; checkingSet <= size; checkingSet++) {
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

export { MainApp };
