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

export { MainApp };
