
import React, { createContext, useContext, useState } from 'react';


export interface Poem {
  title: string;
  author: string;
  lines: string[];
  linecount: string;
}


interface PoemFormContextType {
  poem: Poem | null;
  setPoem: React.Dispatch<React.SetStateAction<Poem | null>>;
}


const PoemFormContext = createContext<PoemFormContextType | undefined>(undefined);


export const PoemFormProvider = ({ children }) => {
  const [poem, setPoem] = useState<Poem | null>(null);  

  return (
    <PoemFormContext.Provider value={{ poem, setPoem }}>
      {children}
    </PoemFormContext.Provider>
  );
};


export const usePoemFormContext = () => {
  const context = useContext(PoemFormContext);
  if (!context) {
    throw new Error('usePoemFormContext must be used within a PoemFormProvider');
  }
  return context;
};
