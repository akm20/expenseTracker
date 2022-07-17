import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = (CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
});

function LoadingComponent() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </div>
  );
}

export default LoadingComponent;
