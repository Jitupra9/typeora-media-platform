import React from "react";
import { Server, WifiOff, CloudOff, Satellite, RefreshCw } from "lucide-react";

function ServerOffline() {
  return (
    <div className=" relative flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="relative w-72 h-72 mb-12">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="relative p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 rounded-full shadow-2xl animate-pulse-slow">
            <CloudOff className="w-10 h-10 " />
            <div className="absolute inset-0 rounded-full bg-red-500/10 dark:bg-gray-600 animate-ping-slow"></div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 dark:border-red-900/70 animate-rotate-slow"></div>
        <div className="absolute inset-3 rounded-full border border-dashed border-purple-200/70 dark:border-purple-900/50 animate-rotate-medium-reverse"></div>
        <div className="absolute inset-6 rounded-full border border-dashed border-blue-200/50 dark:border-blue-900/40 animate-rotate-fast"></div>

        <div className="absolute top-0 left-0 right-0 bottom-0 animate-orbit-slow">
          <div className="w-12 h-12 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/50 dark:to-red-800/50 rounded-full shadow-lg border border-red-200 dark:border-red-800/60 flex items-center justify-center -translate-x-1 -translate-y-1/2 group hover:shadow-red-200/50 dark:hover:shadow-red-900/30 transition-all duration-300">
            <Server className="w-5 h-5 text-red-600 dark:text-red-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 animate-orbit-medium">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 rounded-full shadow-lg border border-purple-200 dark:border-purple-800/60 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group hover:shadow-purple-200/50 dark:hover:shadow-purple-900/30 transition-all duration-300">
            <WifiOff className="w-4 h-4 text-purple-600 dark:text-purple-400 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12" />
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 bottom-0 animate-orbit-fast">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/50 dark:to-blue-800/50 rounded-full shadow-lg border border-blue-200 dark:border-blue-800/60 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group hover:shadow-blue-200/50 dark:hover:shadow-blue-900/30 transition-all duration-300">
            <Satellite className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
          </div>
        </div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              opacity: 0.6 + Math.random() * 0.4,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>

      {/* Clean messaging */}
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
          Connection Lost
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          We're having trouble reaching our servers. This might be a temporary
          issue - try refreshing the page in a moment.
        </p>

        <button className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto">
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              opacity: 0.6 + Math.random() * 0.4,
              transform: `scale(${0.5 + Math.random()})`,
            }}
          />
        ))}
      </div>

      {/* Animation styles */}
      <style jsx="true">{`
        @keyframes orbit-slow {
          0% {
            transform: rotate(0deg) translateX(25px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(25px) rotate(360deg);
          }
        }
        @keyframes orbit-medium {
          0% {
            transform: rotate(120deg) translateX(60px) rotate(120deg);
          }
          100% {
            transform: rotate(480deg) translateX(60px) rotate(480deg);
          }
        }
        @keyframes orbit-fast {
          0% {
            transform: rotate(240deg) translateX(35px) rotate(240deg);
          }
          100% {
            transform: rotate(600deg) translateX(35px) rotate(600deg);
          }
        }
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes rotate-medium-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        @keyframes rotate-fast {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.08);
            opacity: 0.9;
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70%,
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-orbit-slow {
          animation: orbit-slow 20s linear infinite;
        }
        .animate-orbit-medium {
          animation: orbit-medium 16s linear infinite;
        }
        .animate-orbit-fast {
          animation: orbit-fast 12s linear infinite;
        }
        .animate-rotate-slow {
          animation: rotate-slow 45s linear infinite;
        }
        .animate-rotate-medium-reverse {
          animation: rotate-medium-reverse 35s linear infinite;
        }
        .animate-rotate-fast {
          animation: rotate-fast 25s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 3.5s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s ease-out infinite;
        }
      `}</style>
    </div>
  );
}

export default ServerOffline;
