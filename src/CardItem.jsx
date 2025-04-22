const CardItem = ({
  index,
  name,
  description,
  enabled,
  onRemove,
  updateEnabled,
}) => {
  const handleToggle = (e) => {
    updateEnabled(index, e.target.checked);
  };

  return (
    <div className="bg-[#161b22] rounded-4xl p-4 h-auto flex flex-col max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center max-[600px]:gap-4 max-[600px]:flex-col">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="w-full h-max flex items-center justify-between mt-24 mb-5">
        <button
          className="bg-[#0d1117] p-2.5 rounded-2xl w-fit border-none"
          onClick={() => onRemove(index)}
        >
          Remove
        </button>
        {/* <label className="toggle-switch">
          <input type="checkbox" checked={enabled} onChange={handleToggle} />
          <span className="slider"></span>
        </label> */}
        <label className="relative inline-block w-9 h-5">
          <input
            type="checkbox"
            checked={enabled}
            onChange={handleToggle}
            className="sr-only peer"
          />
          <span className="absolute inset-0 bg-[#0d1117] rounded-full transition peer-checked:bg-[#ff4800]"></span>
          <span className="absolute left-[3px] top-[3px] h-[14px] w-[14px] rounded-full bg-white transition-transform peer-checked:translate-x-4"></span>
        </label>
      </div>
    </div>
  );
};

export default CardItem;
