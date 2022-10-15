import React, { useState } from "react";
import styles from "./Filter.module.css";
function Filter({ getValue }) {
  const [filter, setFilter] = useState("");
  function filterChange(e) {
    let name = e.target.value;
    setFilter(name);
    getValue(name);
  }
  return (
    <div className={styles.filter}>
      <input
        type="text"
        placeholder="Enter"
        value={filter}
        onChange={filterChange}
      />
    </div>
  );
}

export default Filter;
