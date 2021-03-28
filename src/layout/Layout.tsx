import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {useSelector} from 'react-redux';
import Login from 'src/screens/Auth/Login';
import Cart from 'src/screens/Cart';
import Home from 'src/screens/Home';
import Success from 'src/screens/Success';
import {RootState} from 'src/store/store';

interface LayoutProps {}

export type StackParamsList = {
  Login: any;
  Home: any;
  Cart: any;
  Success: any;
};

const Stack = createStackNavigator<StackParamsList>();

const Layout: React.FC<LayoutProps> = ({}) => {
  const login = useSelector((state: RootState) => state.login);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {login.login.id ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen
              options={{headerShown: false}}
              name="Success"
              component={Success}
            />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;
