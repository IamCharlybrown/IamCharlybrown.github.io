import SliderSet from "./SliderSet";

function Settings() {
  return (
    <div className="flex flex-col">
      <label className="text-xl">Settings:</label>
      <div className="mb-11 mt-6">
        <label>Working time: </label>
        <SliderSet max={60} def={25}/>
      </div>
      <div>
        <label>Brake time: </label>
        <SliderSet max={15} def={5}/>
      </div>
    </div>
  );
}

export default Settings;
