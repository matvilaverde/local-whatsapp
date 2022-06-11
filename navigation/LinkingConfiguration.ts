/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabCamera: {
            screens: {
              TabOneScreen: 'one',
            },
          },
          TabChats: {
            screens: {
              TabTwoScreen: 'two',
            },
          },
          TabStatus: {
            screens: {
              TabThreeScreen: 'three',
            },
          },
          TabCalls: {
            screens: {
              TabFourScreen: 'four',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
