import { storiesOf } from '@storybook/react';
import React from 'react';

import ImageSlider from './ImageSlider/ImageSlider';

storiesOf('ImageSlider', module)
    .add('default', () => (
        <ImageSlider></ImageSlider>
    ));