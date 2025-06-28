import { memo, useState } from "react";
import {
  AlertTriangle,
  MapPin,
  Verified,
  Flame,
  Car,
  Bolt,
  ShieldAlert,
  CloudRain,
  Eye,
  Clock,
  ChevronDown,
} from "lucide-react";
function IncidentCard(props) {
  const [expanded, setExpanded] = useState(false);
  const incident = props.incident;
  const typeIcons = {
    fire: <Flame className="w-4 h-4" />,
    accident: <Car className="w-4 h-4" />,
    utility: <Bolt className="w-4 h-4" />,
    crime: <ShieldAlert className="w-4 h-4" />,
    weather: <CloudRain className="w-4 h-4" />,
  };

  const severityColors = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  };
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start space-x-3">
          <div
            className={`p-2 rounded-lg ${
              incident.type === "fire"
                ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300"
                : incident.type === "accident"
                ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300"
                : "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300"
            }`}
          >
            {typeIcons[incident.type] || <AlertTriangle className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {incident.title}
              </h3>
              {incident.verified && (
                <Verified className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              )}
            </div>
            <div className="flex items-center mt-1 space-x-3">
              <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <MapPin className="w-3 h-3 mr-1" />
                {incident.location}
              </span>
              <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <Clock className="w-3 h-3 mr-1" />
                {incident.date} • {incident.time}
              </span>
            </div>
          </div>
        </div>
        <div
          className={`w-3 h-3 rounded-full ${
            severityColors[incident.severity]
          }`}
          title={`${incident.severity} severity`}
        ></div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {incident.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {incident.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
        {incident.updates && incident.updates.length > 0 && (
          <div className="mb-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              <ChevronDown
                className={`w-3 h-3 mr-1 transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
              />
              {expanded
                ? "Hide updates"
                : `Show updates (${incident.updates.length})`}
            </button>

            {expanded && (
              <div className="mt-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-3">
                {incident.updates.map((update, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="font-medium text-gray-500 dark:text-gray-400">
                      {update.time}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-1">
                      {update.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <img
              src={incident.authorPhoto}
              alt={incident.author}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-xs text-gray-600 dark:text-gray-400">
              {incident.author}
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <Eye className="w-3 h-3 mr-1" />
              {incident.views.toLocaleString()}
            </span>
            <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(IncidentCard);
