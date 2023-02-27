import spinner from "../assets/spinner.gif";

function Spinner() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Loading...
      <img src={spinner} alt="spinner" style={{ width: "80px" }} />
    </div>
  );
}

export default Spinner;
