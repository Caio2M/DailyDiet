import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FeedBack } from "@screens/FeedBack";
import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="newMeal" component={NewMeal} />

      <Screen name="statistic" component={Statistics} />

      <Screen name="feedback" component={FeedBack} />
    </Navigator>
  );
}
