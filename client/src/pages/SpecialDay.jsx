import React from "react";
import { CalendarDays, Clock, PlusCircle } from "lucide-react";

function SpecialDay() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <aside className="w-max bg-white border-r shadow-sm">
        <div className="p-4 text-xl font-bold text-orange-600">Studio 813</div>
        <nav className="flex flex-col gap-4 p-4 text-sm">
          <a href="#" className="text-orange-600 font-medium">
            Appointments
          </a>
          <a href="#">Dashboard</a>
          <a href="#">Customers</a>
          <a href="#">Finances</a>
          <a href="#">Reports</a>
          <a href="#">Settings</a>
        </nav>
        <div className="p-4 mt-auto border-t">
          <div className="text-sm font-semibold">Amelia Rhodes</div>
          <div className="text-xs text-gray-500 mb-2">Yoga teacher</div>
          <div className="text-xs">
            Today's classes: <strong>7</strong>
          </div>
          <div className="flex items-center gap-2 text-xs mt-1">
            Booked: <span className="text-orange-600 font-bold">85%</span>
          </div>
          <button className="mt-2 text-xs text-orange-600">Edit account</button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-gray-500" />
            <span className="text-sm font-medium">Request Approval</span>
          </div>
          <button className="flex items-center gap-1 px-3 py-1 bg-orange-500 text-white text-sm rounded">
            <PlusCircle className="w-4 h-4" /> New Appointment
          </button>
        </div>
        <div className="grid grid-cols-8 gap-2 text-sm font-medium text-center border-b pb-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <div key={i}>
              {3 + i} {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div>
            <h2 className="font-semibold text-sm mb-2">
              Amelia Rhodes <span className="text-orange-600">78%</span>
            </h2>
            <div className="bg-orange-100 p-2 rounded mb-2">
              <div className="text-sm font-semibold">Yoga for beginners</div>
              <p className="text-xs">
                Good for beginners and experienced practitioners.
              </p>
              <p className="text-xs mt-1">Small Room #2 • 12 of 20</p>
            </div>
            <div className="bg-orange-100 p-2 rounded mb-2">
              <div className="text-sm font-semibold">Yoga for beginners</div>
              <p className="text-xs">
                Good for beginners and experienced practitioners.
              </p>
              <p className="text-xs mt-1">Small Room #2 • 18 of 20</p>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm mb-2">
              Aarav Brahman <span className="text-orange-600">65%</span>
            </h2>
            <div className="bg-red-100 p-2 rounded mb-2">
              <div className="text-sm font-semibold">Meditation</div>
              <p className="text-xs">
                Meditation teaches us that taking charge of our mind is the most
                crucial task.
              </p>
              <p className="text-xs mt-1">Hall Room • 20 of 20</p>
            </div>
            <div className="bg-green-100 p-2 rounded">
              <div className="text-sm font-semibold">Power Flow</div>
              <p className="text-xs">Suitable for all levels.</p>
              <p className="text-xs mt-1">Mall Room #3 • 8 of 20</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-sm mb-2">
              Kathleen Price <span className="text-orange-600">43%</span>
            </h2>
            <div className="bg-blue-100 p-2 rounded mb-2">
              <div className="text-sm font-semibold">Yoga on hammocks</div>
              <p className="text-xs">Suitable for all, new users start here.</p>
              <p className="text-xs mt-1">Small Room #1 • 15 of 20</p>
            </div>
            <div className="bg-purple-100 p-2 rounded">
              <div className="text-sm font-semibold">Prenatal Yoga</div>
              <p className="text-xs">Prepare for childbirth.</p>
              <p className="text-xs mt-1">Small Room #3 • 15 of 20</p>
            </div>
          </div>

          <div>
            <div className="bg-purple-200 p-2 rounded mb-2">
              <div className="text-sm font-semibold">Prenatal Yoga</div>
              <p className="text-xs">Prepare for childbirth.</p>
              <p className="text-xs mt-1">Small Room #2 • 18 of 20</p>
            </div>
            <div className="bg-red-100 p-2 rounded">
              <div className="text-sm font-semibold">Meditation</div>
              <p className="text-xs">Mind control is crucial.</p>
              <p className="text-xs mt-1">Hall Room • 26 of 30</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SpecialDay;
