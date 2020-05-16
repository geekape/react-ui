import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button'

storiesOf('Button', module)
  .add('type', () => (
    <div>
      <Button>button one</Button>
      <Button>button one</Button>
      <Button>button one</Button>
      <Button>button one</Button>
    </div>
  ))