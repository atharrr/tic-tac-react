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

export { MainApp };
