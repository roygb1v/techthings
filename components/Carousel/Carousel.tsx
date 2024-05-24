'use client';

import React from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
  Container,
  Paper,
  Text,
  Title,
  useMantineTheme,
  useMantineColorScheme,
  rem,
} from '@mantine/core';
import classes from './Carousel.module.css';

const data = [
  {
    image:
      'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2023-03/shopblade-dell-xps-updated.png.rendition.intel.web.720.405.png',
    title: 'Dell XPS',
    category: 'Dell',
  },
  {
    image:
      'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2022-11/shopblade-hp-spectre-x360.png.rendition.intel.web.720.405.png',
    title: 'HP Spectre x360',
    category: 'HP',
  },
  {
    image:
      'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2023-03/shopblade-asus-zenbook-s13.png.rendition.intel.web.720.405.png',
    title: 'ASUS Zenbook S13',
    category: 'ASUS',
  },
  {
    image:
      'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2023-03/shopblade-acer-aspire-vero.png.rendition.intel.web.720.405.png',
    title: 'Acer Aspire Vero',
    category: 'Acer',
  },
  {
    image:
      'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2023-03/shopblade-lenovo-slim-pro-9i.png.rendition.intel.web.720.405.png',
    title: 'Lenovo IdeaPad Pro 5i Laptop',
    category: 'Lenovo',
  },
  {
    image:
      'https://www.intel.com/content/dam/www/central-libraries/us/en/images/2023-12/msi-prestige-16-stellar-gray.png.rendition.intel.web.720.405.png',
    title: 'MSI Prestige 16 Laptop',
    category: 'MSI',
  },
];

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Paper
      shadow="md"
      p="sm"
      radius="md"
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={classes.card}
    >
      <div>
        <Text
          className={classes.category}
          size="xs"
          style={{ color: dark ? '#FFFFFF' : '#000000' }}
        >
          {category}
        </Text>
        <Title order={3} className={classes.title} style={{ color: dark ? '#FFFFFF' : '#71717a' }}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

export function CarouselParent({ title = 'Top models 2024' }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="responsive" className={classes.container}>
      <Title order={2}>{title}</Title>
      <Carousel
        slideSize={{ base: '100%', sm: mobile ? '50%' : '25%' }}
        slideGap={{ base: rem(2), sm: 'xl' }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
