import React, { createContext, useState } from "react";
export const Headers = createContext();
function Headercontext({ children }) {
  const [headers, setheaders] = useState([]);
  return (
    <Headers.Provider value={{ headers, setheaders }}>
      {children}
    </Headers.Provider>
  );
}

export default Headercontext;
