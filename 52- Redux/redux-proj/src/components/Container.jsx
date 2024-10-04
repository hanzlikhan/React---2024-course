const Container = ({ children }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {" "}
      {/* Fixed width style */}
      <div className="card-body">
        {children} {/* Render children inside the card body */}
      </div>
    </div>
  );
};

export default Container;
