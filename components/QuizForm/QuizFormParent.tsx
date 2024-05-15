'use client';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  Pill,
  Card,
  Badge,
  RadioGroup,
  Radio,
  Button,
  Group,
  Title,
  Text,
  Center,
  Container,
  Image,
  Space,
  RingProgress,
  rem,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import './QuizFormParent.css';

export function QuizFormParent() {
  const form = useForm({
    mode: 'uncontrolled',
  });

  const [error] = useState('');
  const [step, setStep] = useState<number>(0);
  const shouldShowBack = step > 0 && step <= 3;
  const shouldShowNext = step >= 0 && step < 3;

  return (
    <Center mx="auto" maw={400} h={step === 4 ? '100%' : 400}>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
        })}
      >
        {step === 0 && (
          <QuizFormChild
            form={form}
            name="cost"
            label={<Text fz="xl">How important is cost to you?</Text>}
            description=""
          />
        )}
        {step === 1 && (
          <QuizFormChild
            form={form}
            name="weight"
            label={<Text fz="xl">How important is weight to you?</Text>}
            description=""
          />
        )}
        {step === 2 && (
          <QuizFormChild
            form={form}
            name="size"
            label={<Text fz="xl">How important is screen size to you?</Text>}
            description=""
          />
        )}
        {step === 3 && (
          <MultiSelectQuizFormChild
            form={form}
            name="options"
            label={<Text fz="xl">What will you use the laptop for?</Text>}
          />
        )}
        <Text color="red">{error}</Text>

        <Group justify="right" mt="md">
          {shouldShowBack && (
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

          {shouldShowNext && (
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
          )}

          {step === 3 && (
            <div className="p-4">
              <Button
                type="submit"
                size="lg"
                variant="filled"
                color="#F21616"
                onClick={() => {
                  console.log(form.getValues());
                  setStep((prev) => prev + 1);
                }}
              >
                <span className="button-text">
                  View <IconChevronRight style={{ width: rem(22) }} stroke={1} />
                </span>
              </Button>
            </div>
          )}
        </Group>
      </form>
      {step === 4 && <MatchResults />}
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setValue] = useState(null);

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
      value={form.getValues()[name]}
      {...form.getInputProps(name, { type: 'radio' })}
    >
      <Radio
        value="1"
        label="Not important"
        onClick={(e) => {
          setValue(e.target.value);
        }}
      />
      <Radio
        value="2"
        label="Quite important"
        onClick={(e) => {
          setValue(e.target.value);
        }}
      />
      <Radio
        value="3"
        label="Very important"
        onClick={(e) => {
          setValue(e.target.value);
        }}
      />
    </RadioGroup>
  );
}

function MultiSelectQuizFormChild({
  form,
  name,
  label,
}: {
  form: any;
  name: string;
  label: string;
}) {
  const data = [
    'Surfing the web',
    'Playing games',
    'Coding',
    'Music and Video editing',
    'Image editing',
  ];
  const [value, setValue] = useState<string[]>(form.getValues()[name] || []);

  return (
    <Container>
      <Text size="xl" fw={400} mb="md">
        {label}
      </Text>
      <Space h="xl" />
      {data.map((d) => (
        <Pill
          key={d}
          className={value?.includes(d) ? 'active' : ''}
          size="xl"
          mb="lg"
          mr="sm"
          onClick={() => {
            if (value.includes(d)) {
              const index = value.findIndex((element) => element === d);
              const values = [...value.slice(0, index), ...value.slice(index + 1)];
              setValue(values);

              form.setValues({
                ...form.getValues(),
                [name]: values,
              });
            } else {
              const values = [...value, d];
              setValue(values);

              form.setValues({
                ...form.getValues(),
                [name]: values,
              });
            }
          }}
        >
          {d}
        </Pill>
      ))}
    </Container>
  );
}

function MatchResults() {
  return (
    <Container>
      <Title>Choose your next laptop.</Title>
      <Space h="xl" />
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between">
          <Badge color="green" size="lg">
            Recommended
          </Badge>
          <RingProgress
            size={60}
            thickness={5}
            sections={[{ value: 99, color: 'green' }]}
            label={
              <Text c="blue" fw={700} ta="center" size="sm">
                99%
              </Text>
            }
          />
        </Group>
        <Image
          radius="sm"
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"
        />
        <Text size="xl" fw={700}>
          Macbook Pro 16-inch
        </Text>
        <Space h="md" />
        <Text size="lg" fw={500}>
          8-Core CPU
        </Text>
        <Text size="lg" fw={500}>
          8-Core GPU
        </Text>
        <Text size="lg" fw={500}>
          8GB Unified Memory
        </Text>
        <Text size="lg" fw={500}>
          256GB SSD Storage
        </Text>
        <Space h="xl" />
        <a
          href="https://www.apple.com/sg/shop/buy-mac/macbook-pro/14-inch"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button size="lg" variant="filled" color="#F21616" fullWidth>
            View
          </Button>
        </a>
      </Card>
    </Container>
  );
}
