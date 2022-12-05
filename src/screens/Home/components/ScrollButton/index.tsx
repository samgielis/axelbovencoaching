import "./index.css";

export const ScrollButton = () => {
  return (
    <button
      onClick={() => {
        document
          .getElementById("scroll-target")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
      style={{ paddingTop: "60px" }}
      className="scroll-button"
    >
      <span></span>
    </button>
  );
};
