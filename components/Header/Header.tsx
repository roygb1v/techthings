'use client';

import { Container, Burger, Drawer, Text, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export function Header() {
  const [drawerOpened, { toggle, close: closeDrawer }] = useDisclosure(false);

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Text fw={700} color="#F21616" size="lg">
          TechThings
        </Text>
        <Group>
          <ColorSchemeToggle />
          <Burger opened={drawerOpened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Group>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title={
            <Text fw={700} color="#F21616" size="lg">
              TechThings
            </Text>
          }
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <a href="/" className={classes.link}>
            <Text fw={700}>Home</Text>
          </a>
          <a href="/quiz" className={classes.link}>
            <Text fw={700}>Take Quiz</Text>
          </a>
        </Drawer>
      </Container>
    </header>
  );
}
