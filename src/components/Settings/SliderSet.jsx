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

  const sliderValue = type == "work" ? workMinutes : breakMinutes;
  const setSliderValue = type == "work" ? setWorkMinutes : setBreakMinutes;

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "md",
  };

  return (
    <Slider
      aria-label="slider-ex-6"
      defaultValue={def}
      min={0}
      max={max}
      step={1}
      onChange={(val) => setSliderValue(val)}
    >
      <SliderMark value={max / 3} {...labelStyles}>
        {max / 3}
      </SliderMark>
      <SliderMark value={(max / 3) * 2} {...labelStyles}>
        {(max / 3) * 2}
      </SliderMark>
      <SliderMark value={max} {...labelStyles}>
        {max}
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
