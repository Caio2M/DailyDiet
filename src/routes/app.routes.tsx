import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Edit } from "@screens/Edit";
import { FeedBack } from "@screens/FeedBack";
import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="meal" component={Meal} />

      <Screen name="newMeal" component={NewMeal} />

      <Screen name="statistic" component={Statistics} />

      <Screen name="feedback" component={FeedBack} />

      <Screen name="edit" component={Edit} />
    </Navigator>
  );
}
