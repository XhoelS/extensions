import NavButton from "./NavButton";

function Navbar({ filter, setFilter }) {
  const types = ["all", "active", "inactive"];

  return (
    <>
      <div className="sticky top-0">
        <div className="bg-[#161b22]  text-amber-50 flex items-center gap-1.5 p-3 text-xl rounded-2xl m-3 max-[600px]:flex max-[600px]:justify-center max-[600px]:py-2.5 max-[600px]:text-2xl ">
          <h1>Extensions</h1>
        </div>
        <div className="flex justify-between px-10 max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center max-[600px]:gap-4 max-[600px]:flex-col">
          <h1>Extensions List</h1>
          <div className=" text-amber-50 rounded-xl   flex gap-5 ">
            {types.map((type) => {
              return (
                <NavButton
                  active={filter === type}
                  onClick={() => setFilter(type)}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
                </NavButton>
              );
            })}
            {/* <NavButton active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </NavButton>
          <NavButton
            active={filter === "active"}
            onClick={() => setFilter("active")}
          >
            Active
          </NavButton>
          <NavButton
            active={filter === "inactive"}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </NavButton> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
