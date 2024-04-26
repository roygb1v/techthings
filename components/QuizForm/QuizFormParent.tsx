'use client';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import {
  MultiSelect,
  Pill,
  Box,
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
  Divider,
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
          <MultiSelectQuizFormChild
            form={form}
            name="options"
            label="What will you use the laptop for?"
            description="Select up to 3 options."
          />
        )}
        <Text color="red">{error}</Text>
        <Group justify="right" mt="md">
          {step > 0 && step < 3 && (
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

          {step >= 0 && step < 3 && (
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
            <Button
              type="submit"
              size="lg"
              variant="filled"
              color="#F21616"
              onClick={() => setStep((prev) => prev + 1)}
            >
              <span className="button-text">
                View <IconChevronRight style={{ width: rem(22) }} stroke={1} />
              </span>
            </Button>
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

function MultiSelectQuizFormChild({
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
  const data = [
    'Surfing the web',
    'Playing games',
    'Coding',
    'Music and Video editing',
    'Image editing',
  ];
  const [value, setValue] = useState<string[]>([]);
  return (
    <div>
      <Text size="xl" fw={400} mb="md">
        {label}
      </Text>
      {data.map((d) => (
        <Pill
          className={value.includes(d) ? 'active' : ''}
          size="xl"
          mb="lg"
          mr="sm"
          onClick={() => {
            if (value.includes(d)) {
              const index = value.findIndex((element) => element === d);
              const values = [...value.slice(0, index), ...value.slice(index + 1)];
              setValue(values);
            } else {
              setValue([...value, d]);
            }
          }}
        >
          {d}
        </Pill>
      ))}
      <MultiSelect
        {...form.getInputProps(name, { type: 'multiselect' })}
        placeholder={value.length === 0 ? description : ''}
        data={data}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

function MatchResults() {
  return (
    <Container>
      <Title>Choose your next laptop.</Title>
      <Box>
        <Image
          radius="sm"
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"
        />
        <RingProgress
          sections={[{ value: 99, color: '#00B14F' }]}
          label={
            <Text c="blue" fw={700} ta="center" size="sm">
              99% match
            </Text>
          }
        />
        <Space h="md" />
        <Text fw={700}>8-Core CPU</Text>
        <Text fw={700}>8-Core GPU</Text>
        <Text>8GB Unified Memory</Text>
        <Text>256GB SSD Storage</Text>
        <Space h="md" />
        <Button size="lg" variant="filled" color="#F21616" fullWidth>
          View on Amazon
        </Button>
      </Box>
      <Divider my="xl" />
      <Box>
        <Image
          radius="sm"
          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba13-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1708367688034"
        />
        <RingProgress
          sections={[{ value: 97, color: '#00B14F' }]}
          label={
            <Text c="blue" fw={700} ta="center" size="sm">
              97% match
            </Text>
          }
        />
        <Space h="md" />
        <Text fw={700}>8-Core CPU</Text>
        <Text fw={700}>8-Core GPU</Text>
        <Text>8GB Unified Memory</Text>
        <Text>256GB SSD Storage</Text>
        <Space h="md" />
        <Button size="lg" variant="filled" color="#F21616" fullWidth>
          View on Amazon
        </Button>
      </Box>
    </Container>
  );
}
