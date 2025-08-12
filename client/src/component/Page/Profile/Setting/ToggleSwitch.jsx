import { memo } from "react";

function ToggleSwitch({ enabled, setEnabled }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
        className="sr-only peer"
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500 dark:bg-gray-700 dark:peer-checked:bg-blue-500"></div>
    </label>
  );
}

export default memo(ToggleSwitch);
