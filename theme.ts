'use client';

import { createTheme, ActionIcon } from '@mantine/core';
import classes from './theme.module.css';

export const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});
