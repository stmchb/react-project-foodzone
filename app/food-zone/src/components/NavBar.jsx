const NavBar = ({
  isSeletedType,
  typeFood,
  handleSearchedFood,
  handleFoodByType,
}) => {
  const btnArr = ["All", "BreakFast", "Lunch", "Dinner"];

  return (
    <nav className="navbar">
      <div className="top_bar">
        <div className="logo">
          <img src="Foody Zone.svg" alt="logo" />
        </div>
        <div className="search_bar">
          <input
            onChange={handleSearchedFood}
            type="text"
            placeholder="Search Food..."
          />
        </div>
      </div>
      <div className="nav_buttons">
        {btnArr.map((btn) => (
          <button
            onClick={() => handleFoodByType(btn)}
            key={btn}
            style={{
              border:
                isSeletedType === btn
                  ? "2px solid white"
                  : "2px solid transparent",
            }}
          >
            {btn}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
