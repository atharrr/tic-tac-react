import React from "react";

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

export { MainApp };
