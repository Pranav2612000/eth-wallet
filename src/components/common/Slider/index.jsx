import ReactSlider from "react-slider";

const Slider = ({setValue}) => {
  return (
    <ReactSlider
      className="horizontal-slider w-100 slider"
      thumbClassName="thumb"
      trackClassName="track"
      onChange={(newValue, thumbIndex) => setValue(newValue)}
    />
  )
};
export default Slider;