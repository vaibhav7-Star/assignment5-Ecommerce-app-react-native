import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Usercontext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = await AsyncStorage.getItem("email");
        const password = await AsyncStorage.getItem("password");

        if (email && password) {
          setUser({ email, password });
          setAuthenticated(true);
        }
      } catch (error) {
        console.error("Error fetching user data from local storage:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Usercontext.Provider value={{ user, authenticated }}>
      {children}
    </Usercontext.Provider>
  );
};

export default UserContextProvider;
