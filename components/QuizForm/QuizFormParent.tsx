'use client';

import { useForm, isNotEmpty } from '@mantine/form';
import { RadioGroup, Radio, Button, Group, Box } from '@mantine/core';

export function QuizFormParent() {
  const form = useForm({
    mode: 'uncontrolled',
  });

  return (
    <Box mt="xl" maw={540} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <QuizFormChild
          form={form}
          name="cost"
          label="How important is cost to you?"
          description=""
        />
        <QuizFormChild
          form={form}
          name="weight"
          label="How important is weight to you?"
          description=""
        />
        <QuizFormChild
          form={form}
          name="size"
          label="How important is screen size to you?"
          description=""
        />
        <QuizFormChild
          form={form}
          name="options"
          label="What will you use the laptop for?"
          description="Select up to 3 options."
        />
        <Group justify="center" mt="md">
          <Button type="submit" size="lg" variant="outline" color="#F21616">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
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
      key={form.key(name)}
      label={label}
      description={description}
      required
      {...form.getInputProps(name, { type: 'radio' })}
    >
      <Radio value="1" label="Not important" />
      <Radio value="2" label="Quite important" />
      <Radio value="3" label="Very important" />
    </RadioGroup>
  );
}
