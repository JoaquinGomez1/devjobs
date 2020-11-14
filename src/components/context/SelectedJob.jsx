import React, { useState } from "react";

export const SelectedJobProvider = React.createContext();

export default function SelectedJobContext(props) {
  const [selectedJob, setSelectedJob] = useState();

  return (
    <SelectedJobProvider.Provider
      {...props}
      value={{ selectedJob, setSelectedJob }}
    />
  );
}
