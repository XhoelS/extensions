function NavButton({ children, active, onClick }) {
  return (
    <button
      className={
        active
          ? "bg-amber-700 text-stone-950 p-3 rounded-3xl w-fit"
          : "bg-[#161b22] p-3 rounded-3xl w-fit"
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default NavButton;
