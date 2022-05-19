import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {ROUTES} from './routes';

export type RootStackParamList = {
  [ROUTES.LOGIN]: undefined;
  [ROUTES.HOME]: undefined;
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
