import React, { memo } from "react";

function StatCard(props) {
  const { icon, title, value, variant, progress } = props;
  const variantClasses = {
    success:
      "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200",
    warning:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200",
    danger: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200",
    info: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200",
    neutral: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200",
  };

  const progressColors = {
    success: "bg-green-500",
    warning: "bg-yellow-500",
    danger: "bg-red-500",
    info: "bg-blue-500",
    neutral: "bg-gray-500",
  };

  return (
    <div className={`rounded-lg p-4 ${variantClasses[variant]}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-white dark:bg-gray-900/50">
            {React.cloneElement(icon, { className: "w-4 h-4" })}
          </div>
          <div>
            <div className="text-sm font-medium">{title}</div>
            <div className="text-lg font-semibold">{value}</div>
          </div>
        </div>
        {progress !== undefined && (
          <div className="w-10 h-10 relative">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={progressColors[variant].replace("bg-", "stroke-")}
                strokeWidth="3"
                strokeDasharray={`${progress}, 100`}
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-medium">
              {progress}%
            </div>
          </div>
        )}
      </div>
      {progress !== undefined && (
        <div className="mt-2 w-full bg-white dark:bg-gray-900/50 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full ${progressColors[variant]}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default memo(StatCard);
