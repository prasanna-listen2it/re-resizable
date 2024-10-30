import * as React from 'react';
import { Resizable } from '../src';
import { storiesOf } from '@storybook/react';
import { style } from './style';
import { useState } from 'react';

storiesOf('basic', module).add('default', () => {
  const [lockAspectRatio, setLockAspectRatio] = useState<boolean>(false);
  return (
    <Resizable
      style={style}
      lockAspectRatio={lockAspectRatio}
      onResizeStart={(_, dir, elementRef) => {
        if (dir === 'right' || dir === 'bottom' || dir === 'left' || dir === 'top') {
          setLockAspectRatio(false);
        } else {
          setLockAspectRatio(true);
        }
      }}
      defaultSize={{
        width: 200,
        height: 200,
      }}
    >
      001
    </Resizable>
  )
});
