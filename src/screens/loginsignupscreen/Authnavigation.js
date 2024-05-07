import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Welcome";
import Login from "./login";
import Signup from "./Signup";
import Homescreen from "../Homescreen";
import Electronic from "../../components/catogries/Electronic";
import Jewelery from "../../components/catogries/Jewelery";
import Menclothing from "../../components/catogries/Menclothing";
import Womenclothing from "../../components/catogries/Womenclothing";
import Cart from "../Cart";
import { Usercontext } from "../../../context/Usercontext";

const Stack = createNativeStackNavigator();

const Authnavigation = () => {
  const { authenticated } = useContext(Usercontext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="welcomepage"
        options={{ headerShown: false }}
        component={authenticated ? Homescreen : Welcome}
      />
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen
        name="sign-up"
        options={{ headerShown: false }}
        component={Signup}
      />
      {authenticated && (
        <>
          <Stack.Screen
            name="electronics"
            options={{ headerShown: false }}
            component={Electronic}
          />
          <Stack.Screen
            name="jeweleries"
            options={{ headerShown: false }}
            component={Jewelery}
          />
          <Stack.Screen
            name="mclothes"
            options={{ headerShown: false }}
            component={Menclothing}
          />
          <Stack.Screen
            name="wclothes"
            options={{ headerShown: false }}
            component={Womenclothing}
          />
          <Stack.Screen
            name="cart"
            options={{ headerShown: false }}
            component={Cart}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Authnavigation;
