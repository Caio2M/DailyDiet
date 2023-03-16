import React, { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export type DataProps = {
  name: string;
  description: string | undefined;
  inDiet: boolean;
  time: string;
  id: string;
  date: string;
};
export type DietProps = {
  title: string;
  id: string;
  data: Array<DataProps>;
};

interface DietProviderProps {
  children: ReactNode;
}

interface DietContextProps {
  diet: DataProps[];
  setDiet: React.Dispatch<React.SetStateAction<DataProps[]>>;
}

const DietContext = createContext({} as DietContextProps);

export function DietProvider({ children }: DietProviderProps) {
  const [diet, setDiet] = useState<DataProps[]>([]);

  return (
    <DietContext.Provider
      value={{
        diet,
        setDiet,
      }}
    >
      {children}
    </DietContext.Provider>
  );
}

export const useDiet = () => useContext(DietContext);
