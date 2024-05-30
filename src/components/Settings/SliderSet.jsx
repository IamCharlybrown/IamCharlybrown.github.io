import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
import { useState } from "react";

function SliderSet({max, def}) {
  const [sliderValue, setSliderValue] = useState(def);

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <Slider
      aria-label="slider-ex-6"
      defaultValue={def} // Valor inicial ajustado
      min={0}
      max={max} 
      step={1}
      onChange={(val) => setSliderValue(val)}
    >
      <SliderMark value={max/3} {...labelStyles}>
        {max/3}:00
      </SliderMark>
      <SliderMark value={(max/3)*2} {...labelStyles}>
        {(max/3)*2}:00
      </SliderMark>
      <SliderMark value={max} {...labelStyles}>
        {max}:00
      </SliderMark>
      <SliderMark
        value={sliderValue}
        textAlign="center"
        bg="blue.500"
        color="white"
        mt="-10"
        ml="-5"
        w="12"
      >
        {sliderValue}:00 
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
}

export default SliderSet;
