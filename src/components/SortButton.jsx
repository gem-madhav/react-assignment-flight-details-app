import React, { useEffect, useState } from "react";

export const SortButton = ({ sortOption, handleSort }) => {
  const { title, sortType } = sortOption;
  const [sortState, setSortState] = useState("none");
  const handleSortClick = () => {
    setSortState((oldState) =>
      oldState === "none" ? "asc" : oldState === "asc" ? "desc" : "none"
    );
  };

  useEffect(() => {
    handleSort(`${sortType}-${sortState}`);
  }, [sortState]);
  return (
    <button className="sort-button" onClick={handleSortClick}>
      {title}
      {sortState === "none" ? null : sortState === "asc" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="10"
        >
          {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          width="10"
        >
          {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
        </svg>
      )}
    </button>
  );
};
