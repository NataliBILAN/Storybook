import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
// import breakpoint from 'styled-components-breakpoint';

import img_one from './assets/flower1.jpg';
import img_two from './assets/flower2.jpg';
// import img_three from './assets/flower1';
// import img_four  from './assets/flower1';

const ImageSlider = () => (
  <ImageSlider.Wrapper>
    <ImageSlider.Slider
      speed={1000}
      autoplaySpeed={5000}
      slidesToShow={1}
      slidesToScroll={1}
      dots
      infinite
      autoplay
      arrows={true}
    >
      <ImageSlider.Slide>
        <img src={img_one} alt="img1" width="300px"></img>
      </ImageSlider.Slide>
      <ImageSlider.Slide>
        <img src={img_two} alt="img1" width="300px"></img>
      </ImageSlider.Slide>
      <ImageSlider.Slide>
        <img src={img_one} alt="img1" width="300px"></img>
      </ImageSlider.Slide>
    </ImageSlider.Slider>
  </ImageSlider.Wrapper >
);

ImageSlider.Wrapper = styled.div`
  padding : 20px;
  width: 600px;
`;

ImageSlider.Slider = styled(SlickSlider)`
  position : relative;
  padding  : 22px 0 13px;
`
ImageSlider.Slide = styled.div`
width: 30px;
`;

export default ImageSlider;
