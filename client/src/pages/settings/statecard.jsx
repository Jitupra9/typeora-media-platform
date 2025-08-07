import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";

const StatCard = memo(({ icon, title, value, variant, progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const variantStyles = {
    success: {
      bg: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/30",
      text: "text-green-700 dark:text-green-300",
      accent: "bg-green-500",
      iconBg:
        "bg-green-100 dark:bg-green-800/40 text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-800/50",
    },
    warning: {
      bg: "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-900/30",
      text: "text-yellow-700 dark:text-yellow-300",
      accent: "bg-yellow-500",
      iconBg:
        "bg-yellow-100 dark:bg-yellow-800/40 text-yellow-600 dark:text-yellow-400",
      border: "border-yellow-200 dark:border-yellow-800/50",
    },
    danger: {
      bg: "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/30",
      text: "text-red-700 dark:text-red-300",
      accent: "bg-red-500",
      iconBg: "bg-red-100 dark:bg-red-800/40 text-red-600 dark:text-red-400",
      border: "border-red-200 dark:border-red-800/50",
    },
    info: {
      bg: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30",
      text: "text-blue-700 dark:text-blue-300",
      accent: "bg-blue-500",
      iconBg:
        "bg-blue-100 dark:bg-blue-800/40 text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-800/50",
    },
    neutral: {
      bg: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-800/30",
      text: "text-gray-700 dark:text-gray-300",
      accent: "bg-gray-500",
      iconBg:
        "bg-gray-100 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400",
      border: "border-gray-200 dark:border-gray-700/50",
    },
  };

  useEffect(() => {
    if (progress !== undefined) {
      const timer = setTimeout(() => {
        setAnimatedProgress(progress);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-2xl p-5 overflow-hidden border ${variantStyles[variant].bg} ${variantStyles[variant].border} ${variantStyles[variant].text}`}
    >
      {/* Decorative accent */}
      <div
        className={`absolute top-0 left-0 w-1 h-full ${variantStyles[variant].accent}`}
      ></div>

      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl ${variantStyles[variant].iconBg}`}>
              {React.cloneElement(icon, { className: "w-5 h-5" })}
            </div>
            <div>
              <h3 className="text-sm font-medium opacity-90">{title}</h3>
              <p className="text-2xl font-bold mt-1">{value}</p>
            </div>
          </div>

          {progress !== undefined && (
            <div className="relative w-14 h-14 flex-shrink-0">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  className="stroke-current opacity-10"
                  strokeWidth="3"
                />
                <motion.path
                  initial={{ strokeDasharray: "0, 100" }}
                  animate={{ strokeDasharray: `${animatedProgress}, 100` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  className={`stroke-current`}
                  strokeWidth="3"
                />
              </svg>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold">
                {progress}%
              </span>
            </div>
          )}
        </div>

        {progress !== undefined && (
          <div className="mt-4 w-full bg-white/30 dark:bg-gray-900/20 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className={`h-full rounded-full ${variantStyles[variant].accent}`}
            ></motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
});

export default StatCard;
