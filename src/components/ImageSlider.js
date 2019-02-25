import React, { useState } from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import glass from './glass.png';

// type ImageSliderProps = {
//   images: [],
//   speed: number,
//   slidesToShow: number,
//   slidesToScroll: number,
//   onClick: () => void,
//   backgroundPosition: string,
//   initialZoomScale: number,
//   maxZoomScale: number,
//   scrollScale: number,
//   translation: number,
// };

const ImageSlider = ({ images, ...props }) => {
  const initialZoomScale = 1;
  const maxZoomScale = 3;
  const [zoomScale, setZoomScale] = useState(initialZoomScale);
  const [backgroundPosition, setBackgroundPosition] = useState('50% 50%');

  const handleClick = e => {
    e.preventDefault();

    const x = (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * 100;
    const y = (e.nativeEvent.offsetY / e.currentTarget.offsetHeight) * 100;

    const newScale = zoomScale < maxZoomScale ? zoomScale + 1 : initialZoomScale;
    setZoomScale(newScale);
    setBackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <ImageSlider.Wrapper>
      <ImageSlider.Slider
        {...props}
        infinite
        dots
        customPaging={i => <ImageSlider.Image src={images[i].image} />}
        nextArrow={<ImageSlider.NextButton />}
        prevArrow={<ImageSlider.PrevButton />}
        beforeChange={() => {
          setZoomScale(1);
        }}
      >
        {images.map(image => (
          <ImageSlider.Slide key={image.id}>
            <ImageSlider.ImageContainer
              onClick={handleClick}
              zoomScale={zoomScale}
              backgroundPosition={backgroundPosition}
              initialZoomScale={initialZoomScale}
            >
              <ImageSlider.Image
                src={image.image}
                alt={image.name}
                url={glass}
              />
            </ImageSlider.ImageContainer>
          </ImageSlider.Slide>
        ))}
      </ImageSlider.Slider>
    </ImageSlider.Wrapper>
  )
};

ImageSlider.defaultProps = {
  images: [],
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

ImageSlider.Wrapper = styled.div`
  padding   : 0;
  margin    : 0 auto;
  max-width : 640px;
  height: 640px;

  ${breakpoint('tablet')`
    padding : 10px;
  `}
`;

ImageSlider.Slider = styled(SlickSlider)`
  position     : relative;
  padding      : 0;
  width        : 80%;
  height       : auto;
  padding-left : 140px;

  ul {
    width           : initial;
    position        : absolute;
    left            : 40px;
    top             : 40px;
    flex-direction  : column;
    align-items     : flex-start;

    ${breakpoint('mobile')`
    display: none !important;
    `}

    ${breakpoint('tablet')`
    display: flex !important;
    `}
  }

  li {
    position      : relative;
    display       : inline-block;
    width         : 44px;
    height        : 56px;
    margin        : 0 5px;
    padding       : 0;
    cursor        : pointer;
    margin-bottom : 40px;
  }

  ${breakpoint('mobile')`
    width        : 100%;
    padding-left : 0px;
  `}
  ${breakpoint('tablet')`
    width        : 100%;
    padding-left : 140px;
  `}
`;

ImageSlider.Slide = styled.div`
  /* height : auto; */
  /* overflow: hidden; */

  ${breakpoint('mobile')`
    padding : 0;
    width   : 100%;
  `}
`;

ImageSlider.ImageContainer = styled.div`
  transform        : scale(${props => (props.zoomScale > props.initialZoomScale ? props.zoomScale : "1")});
  transform-origin : ${props => (props.zoomScale > props.initialZoomScale ? props.backgroundPosition : "50% 50%")};

  ${breakpoint('mobile')`
    width      : 100%;
    min-height : 408px;
  `}

  ${breakpoint('tablet')`
    width      : 100%;
    min-height : 654px;
  `}
`;

ImageSlider.Image = styled.img`
  display : block;
  width   : 100%;
  height  : auto;
  cursor: url('${props => props.url}'), auto !important;
`;

ImageSlider.PrevButton = styled.button`
  position : absolute;
  top      : 50%;
  left     : 170px;
  z-index  : 100;

  ::before {
    font-size   : 60px;
    line-height : 1;
    opacity     : .8;
    color       : #fff;
  }

  ${breakpoint('mobile')`
    display: none !important;
  `}

  ${breakpoint('tablet')`
    display: block !important;
  `}
`;

ImageSlider.NextButton = styled.button`
  position : absolute;
  top      : 50%;
  right    : 70px;
  z-index  : 100;

  ::before {
    font-size   : 60px;
    line-height : 1;
    opacity     : .8;
    color       : #fff;
  }

  ${breakpoint('mobile')`
    display: none !important;
  `}

  ${breakpoint('tablet')`
    display: block !important;
  `}
`;

export default ImageSlider;