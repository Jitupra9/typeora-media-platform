import { memo } from "react";

function InputField({ label, type, value, onChange, placeholder, disabled }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white ${
          disabled ? "opacity-70 cursor-not-allowed" : ""
        }`}
        placeholder={placeholder}
      />
    </div>
  );
}

export default memo(InputField);
