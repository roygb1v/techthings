import { Title, Text, Button, Group } from '@mantine/core';
import classes from './Welcome.module.css';
import { QuizFormParent } from '../QuizForm/QuizFormParent';

export function Welcome() {
  return (
    <div className={classes.container}>
      <Title className={classes.title} ta="center" mt="xl">
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
        <Button size="lg" color="#F21616">
          Start now
        </Button>
      </Group>
      <QuizFormParent />
    </div>
  );
}
