// Dependencies
import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
// Screens
import FeedScreen from '#screens/Feed';
import DiscoverScreen from '#screens/Discover';
import PostScreen from '#screens/Post';
import NotificationsScreen from '#screens/Notifications';
import ProfileScreen from '#screens/Profile';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Feed: {
        screen: FeedScreen,
        navigationOptions: () => ({
          tabBarIcon: () => <Icon name="ios-home" size={28} color="#FFFFFF" />,
        }),
      },
      Discover: {
        screen: DiscoverScreen,
        navigationOptions: () => ({
          tabBarIcon: () => (
            <Icon name="ios-search" size={28} color="#FFFFFF" />
          ),
        }),
      },
      Post: {
        screen: PostScreen,
        navigationOptions: () => ({
          tabBarIcon: () => (
            <AntIcon name="plussquareo" size={28} color="#FFFFFF" />
          ),
        }),
      },
      Notifications: {
        screen: NotificationsScreen,
        navigationOptions: () => ({
          tabBarIcon: () => <Icon name="ios-heart" size={28} color="#FFFFFF" />,
        }),
      },
      Profile: {
        screen: ProfileScreen,
        navigationOptions: () => ({
          tabBarIcon: () => (
            <Image
              source={{uri: 'https://picsum.photos/100/100?=13'}}
              style={{borderRadius: 14, height: 28, width: 28}}
            />
          ),
        }),
      },
    },
    {
      tabBarOptions: {
        showLabel: false,
        style: {
          backgroundColor: '#121212',
        },
      },
    },
  ),
);
