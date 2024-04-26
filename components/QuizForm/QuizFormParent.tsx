'use client';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import { RadioGroup, Radio, Button, Group, Text, Center, rem } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import './QuizFormParent.css';

export function QuizFormParent() {
  const form = useForm({
    mode: 'uncontrolled',
  });

  const [error] = useState('');
  const [step, setStep] = useState<number>(0);

  return (
    <Center mx="auto" maw={400} h={400}>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
        })}
      >
        {step === 0 && (
          <QuizFormChild
            form={form}
            name="cost"
            label="How important is cost to you?"
            description=""
          />
        )}
        {step === 1 && (
          <QuizFormChild
            form={form}
            name="weight"
            label="How important is weight to you?"
            description=""
          />
        )}
        {step === 2 && (
          <QuizFormChild
            form={form}
            name="size"
            label="How important is screen size to you?"
            description=""
          />
        )}
        {step === 3 && (
          <QuizFormChild
            form={form}
            name="options"
            label="What will you use the laptop for?"
            description="Select up to 3 options."
          />
        )}
        <Text color="red">{error}</Text>
        <Group justify="right" mt="md">
          {step > 0 && (
            <Button
              type="button"
              size="lg"
              variant="subtle"
              color="#404040"
              disabled={step === 0}
              onClick={() => setStep((prev) => prev - 1)}
            >
              <span className="button-text">
                <IconChevronLeft style={{ width: rem(22) }} stroke={1} /> Back
              </span>
            </Button>
          )}

          <Button
            type="button"
            size="lg"
            variant="filled"
            color="#F21616"
            disabled={step === 3}
            onClick={() => setStep((prev) => prev + 1)}
          >
            <span className="button-text">
              Next <IconChevronRight style={{ width: rem(22) }} stroke={1} />
            </span>
          </Button>
        </Group>
      </form>
    </Center>
  );
}

function QuizFormChild({
  form,
  name,
  label,
  description,
}: {
  form: any;
  name: string;
  label: string;
  description: string;
}) {
  return (
    <RadioGroup
      className="radiogroup"
      size="lg"
      key={form.key(name)}
      label={
        <Text size="xl" fw={400}>
          {label}
        </Text>
      }
      description={description}
      {...form.getInputProps(name, { type: 'radio' })}
    >
      <Radio value="1" label="Not important" />
      <Radio value="2" label="Quite important" />
      <Radio value="3" label="Very important" />
    </RadioGroup>
  );
}
