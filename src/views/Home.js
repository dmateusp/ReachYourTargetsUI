import React from "react";
import Action from "./Action.js";

const Home = props => (
  <div
    style={{
      flexDirection: "column",
      backgroundColor: "#fcf9f9",
      height: props.height,
      overflowY: "auto",
      width: props.width
    }}
  >
    <div
      style={{
        fontSize: 40,
        fontFamily: "Playfair Display, serif",
        alignSelf: "center",
        marginTop: 75
      }}
    >
      {"SAVE!!!!!!!!!!"}
    </div>
    <Action
      onClick={props.changeMood}
      style={{
        flexDirection: "column",
        marginTop: 50,
        backgroundColor: "deepskyblue",
        padding: 10,
        cursor: "pointer",
        height: 220,
        alignItems: "center"
      }}
    >
      <img
        src="https://files.usepages.today/parts.viewsdx.com/emo/smiley-grin.svg"
        style={{
          opacity: props.isFeelingHappy ? 1 : 0,
          position: "absolute",
          transition: "opacity 0.25s linear",
          width: 200
        }}
      />
      <img
        src="https://files.usepages.today/parts.viewsdx.com/emo/smiley-dead.svg"
        style={{
          opacity: props.isFeelingVeryBad ? 1 : 0,
          position: "absolute",
          transition: "opacity 0.25s linear",
          width: 200
        }}
      />
      <img
        src="https://files.usepages.today/parts.viewsdx.com/emo/smiley-sad.svg"
        style={{
          opacity: props.isFeelingSad ? 1 : 0,
          position: "absolute",
          transition: "opacity 0.25s linear",
          width: 200
        }}
      />
    </Action>
    {props.children}
  </div>
);
export default Home;
