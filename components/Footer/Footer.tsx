'use client';

import { Container, Group, Anchor, Text } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
  // { link: '#', label: 'Contact' },
  // { link: '#', label: 'Privacy' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text fw={700} color="#F21616" size="xl">
          TechThings
        </Text>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
