import React from "react";

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

export { MainApp };
