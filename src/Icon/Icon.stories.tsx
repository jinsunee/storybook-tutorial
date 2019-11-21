/** @jsx jsx */
import { jsx } from '@emotion/core';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'components|Icon'
};

export const icon = () => <Icon icon="heart" />;
icon.story = {
  name: 'Default'
};

export const customSize = () => <Icon icon="heart" size="4rem" />;

export const customColor = () => <Icon icon="heart" color="red" />;

export const customizedWithStyle = () => (
  <Icon icon="heart" css={{ color: 'red', width: '4rem' }} />
);