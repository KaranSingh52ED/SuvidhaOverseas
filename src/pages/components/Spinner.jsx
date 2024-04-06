import React from "react";

const Loading = () => {
    return (
        <div className="fullpage-wrapper">
            <div className="reactor-container">
                <div className="tunnel circle abs-center"></div>
                <div className="core-wrapper circle abs-center">
                    <div className="core-outer circle abs-center"></div>
                    <div className="core-inner circle abs-center"></div>
                </div>
                <div className="coil-container">
                    <div className="coil coil-1"></div>
                    <div className="coil coil-2"></div>
                    <div className="coil coil-3"></div>
                    <div className="coil coil-4"></div>
                    <div className="coil coil-5"></div>
                    <div className="coil coil-6"></div>
                    <div className="coil coil-7"></div>
                    <div className="coil coil-8"></div>
                </div>
            </div>
        </div>
    );
};

const styles = `
  .fullpage-wrapper {
    width: 100%;
    height: 100vh;
    background: linear-gradient(orange, lightyellow,   lightgreen);
    display: flex;
  }
  .reactor-container {
    width: 300px;
    height: 300px;
    margin: auto;
    border: none;
    position: relative;
  }
  .circle {
    border-radius: 50%;
  }
  .abs-center {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .core-inner {
    width: 70px;
    height: 70px;
    border: 5px solid #1B4E5F;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 7px 5px #52FEFE, 0px 0px 10px 10px #52FEFE inset;
  }
  .core-outer {
    width: 120px;
    height: 120px;
    border: 1px solid #52FEFE;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 2px 1px #52FEFE, 0px 0px 10px 5px #52FEFE inset;
  }
  .core-wrapper {
    width: 180px;
    height: 180px;
    background-color: #073c4b;
    box-shadow: 0px 0px 5px 4px #52FEFE, 0px 0px 6px 2px #52FEFE inset;
  }
  .tunnel {
    width: 220px;
    height: 220px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 5px 1px #52FEFE, 0px 0px 5px 4px #52FEFE inset;
  }
  .coil-container {
    position: relative;
    width: 100%;
    height: 100%;
    animation: reactor-anim 3s infinite linear;
  }
  .coil {
    position: absolute;
    width: 30px;
    height: 20px;
    top: calc(50% - 110px);
    left: calc(50% - 15px);
    transform-origin: 15px 110px;
    background-color:#073c4b;
    box-shadow: 0px 0px 5px #52FEFE inset;
  }
  .coil-1 {
    transform: rotate(0deg);
  }
  .coil-2 {
    transform: rotate(45deg);
  }
  .coil-3 {
    transform: rotate(90deg);
  }
  .coil-4 {
    transform: rotate(135deg);
  }
  .coil-5 {
    transform: rotate(180deg);
  }
  .coil-6 {
    transform: rotate(225deg);
  }
  .coil-7 {
    transform: rotate(270deg);
  }
  .coil-8 {
    transform: rotate(315deg);
  }
  @keyframes reactor-anim {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppWithStyles = () => {
    return (
        <>
            <style>{styles}</style>
            <Loading />
        </>
    );
};

export default AppWithStyles;