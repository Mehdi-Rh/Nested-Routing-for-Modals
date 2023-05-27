import React from "react";

export const AppContext = React.createContext();

export const ContextProvider = ({ children, users }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
    window.location.pathname = "/";
  };
  const handleOpen = () => setOpen(true);
  return (
    <AppContext.Provider value={{ open, handleClose, handleOpen, users }}>
      {children}
    </AppContext.Provider>
  );
};
