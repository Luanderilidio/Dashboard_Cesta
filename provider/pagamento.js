import React, { createContext, useState } from "react";

const PayContext = createContext();

function PayProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <PayContext.Provider value={{ open, setOpen }}>
      {children}
    </PayContext.Provider>
  );
}

export {PayContext, PayProvider}