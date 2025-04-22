import CardItem from "./CardItem";

function Card({ filteredExtensions, setExtensions, updateEnabled }) {
  const handleRemove = (index) =>
    setExtensions((prev) => prev.filter((_, i) => i !== index));
  return (
    <div className="grid grid-cols-3 gap-4 p-8  max-[600px]:grid-cols-1">
      {filteredExtensions.map((ext, index) => (
        <CardItem
          key={index}
          index={index}
          name={ext.name}
          description={ext.description}
          enabled={ext.enabled}
          onRemove={handleRemove}
          updateEnabled={updateEnabled}
        />
      ))}
    </div>
  );
}

export default Card;
