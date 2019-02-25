import { storiesOf } from '@storybook/react';
import React from 'react';


import ImageSlider from './ImageSlider';

const images =
  [
    {
      id: 1,
      name: "item_1",
      image: "https://images.asos-media.com/products/paperchase-highlighters/11630174-3?$XXL$&wid=513&fit=constrain",
    },
    {
      id: 2,
      name: "item_2",
      image: "https://images.asos-media.com/products/paperchase-highlighters/11630174-4?$XXL$&wid=513&fit=constrain",
    },
    {
      id: 3,
      name: "item_3",
      image: "https://images.asos-media.com/products/paperchase-highlighters/11630174-1-multi?$XXL$&wid=513&fit=constrain",
    },
    {
      id: 4,
      name: "item_4",
      image: "https://images.asos-media.com/products/paperchase-highlighters/11630174-2?$XXL$&wid=513&fit=constrain",
    },
  ];

storiesOf('ImageSlider', module)
  .add('default', () => (
    <ImageSlider
      images={images}
    />
  ));
