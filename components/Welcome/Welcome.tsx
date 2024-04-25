'use client';

import { useRouter } from 'next/navigation';
import { Title, Text, Button, Group, Container } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  const router = useRouter();
  return (
    <Container size="lg" className={classes.container}>
      <Title className={classes.title} ta="center">
        Find your{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'red', to: 'yellow' }}>
          perfect
        </Text>{' '}
        laptop
      </Title>
      <Text c="dimmed" ta="center" size="xl" maw={580} mx="auto" mt="lg">
        Start by answering a few simple questions to help us identify the best laptop for your
        needs.
      </Text>
      <Group justify="center" mt="xl">
        <Button size="lg" color="#F21616" onClick={() => router.push('/quiz')}>
          Start now
        </Button>
      </Group>
    </Container>
  );
}
