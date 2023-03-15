export declare global{
  namespace ReactNavigation{
    interface RootParamList{
      home: undefined;
      newMeal: undefined;
      statistic: undefined;
      meal?: {
        id?:string;
      };
      feedback: {
        inDiet: boolean;
      };
      edit: {
        id: string;
      }
    }
  }
}