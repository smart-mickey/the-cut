import React from 'react';
import {H5, H6} from '../../../components/styled/Text';
import {RootView, BarContent} from '../../../components/styled/View';
import {dySize} from '../../../utils/responsive';

const BarberSettingScreen = () => {
  return (
    <RootView justify="flex-start" align="flex-start">
      <BarContent contentContainerStyle={{padding: dySize(10)}}>
        <H6 weight="bold">Barber Settings</H6>
      </BarContent>
    </RootView>
  );
};

export default BarberSettingScreen;
