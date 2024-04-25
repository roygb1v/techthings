'use client';

import { Container, Title, Accordion } from '@mantine/core';
import classes from './Faq.module.css';

export function Faq() {
  return (
    <Container size="sm" mt="xl" className={classes.wrapper}>
      <Title ta="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="data">
          <Accordion.Control>Is my data being collected?</Accordion.Control>
          <Accordion.Panel>Rest assured, we do not collect any personal data.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>How can I get started?</Accordion.Control>
          <Accordion.Panel>
            Get started by answering a few simple questions based on cost, weight screen size and
            use case.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>Is there a newsletter I can subscribe to?</Accordion.Control>
          <Accordion.Panel>
            Right now, we do not have a newsletter but we will introduce this in the future.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Are the results of the quiz free?</Accordion.Control>
          <Accordion.Panel>
            Yes! it is completely free. If you purchase your laptop from the results shown, I earn a
            small commission.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
