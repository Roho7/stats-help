import React, { useState } from "react";

const Checkbox = ({ itm }: { itm: any }) => {
  const [checked, setChecked] = useState(false);

  return (
    <p className={checked ? `text-gray-400 flex gap-2` : "flex gap-2"}>
      <input
        type="checkbox"
        onClick={() => {
          setChecked(!checked);
        }}
      />
      {itm}
    </p>
  );
};

export default Checkbox;
