'use client';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import { RadioGroup, Radio, Button, Group, Box, Text } from '@mantine/core';

import './QuizFormParent.css';

export function QuizFormParent() {
  const form = useForm({
    mode: 'uncontrolled',
  });

  const [error] = useState('');
  const [step, setStep] = useState<number>(0);

  return (
    <Box mt="xl" maw={540} mx="auto">
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
        <Group justify="center" mt="md">
          <Button
            type="submit"
            size="lg"
            variant="outline"
            color="#F21616"
            disabled={step === 0}
            onClick={() => setStep((prev) => prev - 1)}
          >
            Back
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="outline"
            color="#F21616"
            disabled={step === 3}
            onClick={() => setStep((prev) => prev + 1)}
          >
            Next
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
      size="xl"
      key={form.key(name)}
      label={<Text size="xl">{label}</Text>}
      description={description}
      {...form.getInputProps(name, { type: 'radio' })}
    >
      <Radio value="1" label="Not important" />
      <Radio value="2" label="Quite important" />
      <Radio value="3" label="Very important" />
    </RadioGroup>
    // <fieldset>
    //   <legend>{label}</legend>
    //   <ul className="input-container">
    //     <li tabIndex="0">
    //       <label>
    //         <input type="radio" name={name} />
    //         <span>Not important at all</span>
    //       </label>
    //     </li>

    //     <li tabIndex="1">
    //       <label>
    //         <input type="radio" name={name} />
    //         <span>Quite important</span>
    //       </label>
    //     </li>

    //     <li tabIndex="2">
    //       <label>
    //         <input type="radio" name={name} />
    //         <span>Very important</span>
    //       </label>
    //     </li>
    //   </ul>
    // </fieldset>
  );
}
