import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

import { SettingsContext } from "../../context/SettingsContext";
import { useContext } from "react";

function SliderSet({ max, def, type }) {
  const { workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes } =
    useContext(SettingsContext);

  const sliderValue = type === "work" ? workMinutes : breakMinutes;
  const setSliderValue = type === "work" ? setWorkMinutes : setBreakMinutes;

  const labelStyles = {
    mt: "4",
    ml: "-2.5",
    fontSize: "lg",
  };

  return (
    <Slider
      aria-label="slider-ex-6"
      defaultValue={def}
      min={0}
      max={max}
      step={1}
      onChange={(val) => setSliderValue(val)}
      size="lg"
    >
      <SliderMark value={max / 3} {...labelStyles} color="white">
        {max / 3}
      </SliderMark>
      <SliderMark value={(max / 3) * 2} {...labelStyles} color="white">
        {(max / 3) * 2}
      </SliderMark>
      <SliderMark value={max} {...labelStyles} color="white">
        {max}
      </SliderMark>
      <SliderMark
        value={sliderValue}
        textAlign="center"
        bg="#9333EA"
        color="white"
        mt="-12"
        ml="-6"
        w="16"
        fontSize="lg"
        borderRadius="full"
        p="1"
      >
        {sliderValue}:00
      </SliderMark>
      <SliderTrack height="16px" borderRadius="full">
        <SliderFilledTrack bg="#9333EA" borderRadius="full" />
      </SliderTrack>
      <SliderThumb boxSize="32px" borderRadius="full" bg="#9333EA">
      </SliderThumb>
    </Slider>
  );
}

export default SliderSet;

