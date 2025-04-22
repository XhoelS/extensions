import { useEffect, useState } from "react";
import { extensions as extensionsData } from "./data";
import Navbar from "./Navbar";
import Card from "./Card";
import "./index.css";

function App() {
  const [extensions, setExtensions] = useState(extensionsData);
  const [filter, setFilter] = useState("all");

  const updateEnabled = (index, newStatus) => {
    setExtensions(
      extensions.map((ext, i) =>
        i === index ? { ...ext, enabled: newStatus } : ext
      )
    );
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.enabled;
    if (filter === "inactive") return !ext.enabled;
    if (filter === "all") return ext.enabled + !ext.enabled;
  });

  useEffect(() => {
    document.title = `Extensions ${filter.charAt(0).toUpperCase()}${filter
      .slice(1)
      .toLowerCase()}`;
  }, [filter]);

  return (
    <div>
      <Navbar filter={filter} setFilter={setFilter} />
      <Card
        filteredExtensions={filteredExtensions}
        setExtensions={setExtensions}
        updateEnabled={updateEnabled}
      />
    </div>
  );
}

export default App;
