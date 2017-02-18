import React from "react";
import Action from "./Action.js";

const YesNo = props => (
  <div
    style={{
      flexDirection: "column",
      backgroundColor: "#0376ee",
      height: props.height,
      overflowY: "auto",
      width: props.width,
      padding: 20
    }}
  >
    <img
      src={
        `https://files.usepages.today/parts.viewsdx.com/emo/smiley-${props.mood}.svg`
      }
      style={{
        alignSelf: "center",
        width: 300,
        marginTop: 20
      }}
    />
    <div
      style={{
        flexDirection: "column",
        alignSelf: "center",
        backgroundColor: "white",
        width: 20,
        height: 20,
        transform: "rotate(45deg)",
        marginBottom: -10
      }}
    />
    <div
      style={{
        fontFamily: "PT Sans",
        fontSize: 22,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        minWidth: 350,
        maxWidth: 350,
        alignSelf: "center"
      }}
    >
      {props.message}
    </div>
    {!props.waiting
      ? <div
          style={{
            flexDirection: "row",
            position: "fixed",
            bottom: 30,
            alignSelf: "center",
            marginTop: 50,
            opacity: props.answered ? 0 : 1,
            transition: "all 0.25s linear"
          }}
        >
          <Action
            isActive={props.answered === "trivial"}
            styleHover={{
              transform: "scale(1.05)"
            }}
            styleActive={{
              transform: "scale(1.5)"
            }}
            styleActiveHover={{
              transform: "scale(1.5)"
            }}
            onClick={props.trivial}
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: 100,
              height: 100,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 5px 25px #2b3997",
              transition: "all 0.25s linear",
              cursor: props.answered ? "default" : "cursor"
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontFamily: "Roboto Slab, sans-serif",
                fontSize: 20,
                color: "#2e69fd"
              }}
            >
              {"Trivial"}
            </div>
          </Action>
          <Action
            isActive={props.answered === "crucial"}
            styleHover={{
              transform: "scale(1.05)"
            }}
            styleActive={{
              transform: "scale(1.5)"
            }}
            styleActiveHover={{
              transform: "scale(1.5)"
            }}
            onClick={props.crucial}
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              height: 100,
              width: 100,
              marginLeft: 10,
              boxShadow: "0px 5px 25px #2b3997",
              transition: "all 0.25s linear",
              cursor: props.answered ? "default" : "cursor"
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontFamily: "Roboto Slab, serif",
                fontSize: 20,
                color: "#2e69fd"
              }}
            >
              {"Crucial"}
            </div>
          </Action>
        </div>
      : null}
    {props.children}
  </div>
);
export default YesNo;
