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
  diet: DietProps[];
  setDiet: React.Dispatch<React.SetStateAction<DietProps[]>>;
}

const DietContext = createContext({} as DietContextProps);

export function DietProvider({ children }: DietProviderProps) {
  const [diet, setDiet] = useState<DietProps[]>([
    {
      id: uuid(),
      title: "10/05/2022",
      data: [
        {
          name: "Arroz e Carne",
          description: "dcaoodcidoac",
          inDiet: true,
          id: uuid(),
          time: "09:00",
          date: "10/05/2022",
        },
      ],
    },
  ]);

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
