import { memo } from "react";

function SettingItem({ icon, title, description, action, lastItem }) {
  return (
    <div
      className={`flex items-center justify-between p-4 ${
        !lastItem ? "border-b border-gray-200 dark:border-gray-700" : ""
      } hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
    >
      <div className="flex items-center gap-4">
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-white">{title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {typeof action === "string" ? (
          <>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {action}
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          </>
        ) : (
          action
        )}
      </div>
    </div>
  );
}
export default memo(SettingItem);
