import React from "react";
import { Home,Heart,MessageSquare,Calendar,User,Bell, Search,LogOut,Building2,ChevronDown,TrendingUp,CheckCircle2, Mail, Clock,
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard", icon: Home, active: true },
  { label: "Saved Properties", icon: Heart },
  { label: "Inquiries", icon: MessageSquare },
  { label: "Bookings", icon: Calendar },
  { label: "Profile", icon: User },
  { label: "Notifications", icon: Bell },
];

function Sidebar() {
  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col justify-between bg-white border-r border-slate-200 py-6">
      <div>
        <div className="flex items-center gap-2 px-6 mb-8">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" strokeWidth={2.25} />
          </div>
          <span className="font-semibold text-slate-900 text-[15px] tracking-tight">
            EstateHub
          </span>
        </div>
        <nav className="flex flex-col gap-1 px-3">
          {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                active
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-200"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
              {label}
            </button>
          ))}
        </nav>
      </div>
      <div className="px-3">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 w-full text-left">
          <LogOut className="w-[18px] h-[18px]" strokeWidth={2} />
          Logout
        </button>
      </div>
    </aside>
  );
}

function Header({ notifCount = 8 }) {
  return (
    <header className="flex items-center gap-4 px-6 md:px-8 py-4 border-b border-slate-200 bg-white">
      <div className="flex-1 relative max-w-xl">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search properties, inquiries..."
          className="w-full bg-slate-100 rounded-full pl-10 pr-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <button className="relative w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors">
        <Bell className="w-[18px] h-[18px] text-slate-600" />
        {notifCount > 0 && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[10px] font-semibold flex items-center justify-center">
            {notifCount}
          </span>
        )}
      </button>
      <button className="flex items-center gap-2 pl-1">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
  <User className="w-5 h-5 text-slate-600" />
</div>


        <span className="text-sm font-medium text-slate-700 hidden sm:block">
          User
        </span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
    </header>
  );
}

const STATS = [
  { label: "Saved Properties", value: 12, icon: Heart, tint: "bg-blue-50 text-blue-600" },
  { label: "Inquiries", value: 5, icon: MessageSquare, tint: "bg-emerald-50 text-emerald-600" },
  { label: "Bookings", value: 3, icon: Calendar, tint: "bg-amber-50 text-amber-600" },
  { label: "Notifications", value: 8, icon: Bell, tint: "bg-rose-50 text-rose-600" },
];

const ACTIVITY = [
  {
    icon: CheckCircle2,
    tint: "bg-emerald-50 text-emerald-600",
    title: "Booking Confirmed",
    detail: "Luxury Villa in DHA",
    time: "2m ago",
  },
  {
    icon: Mail,
    tint: "bg-blue-50 text-blue-600",
    title: "New Inquiry Received",
    detail: "Interested in Modern Apartment",
    time: "15m ago",
  },
  {
    icon: Heart,
    tint: "bg-rose-50 text-rose-600",
    title: "Property Saved",
    detail: "Beach House in Clifton",
    time: "1h ago",
  },
  {
    icon: User,
    tint: "bg-violet-50 text-violet-600",
    title: "Profile Updated",
    detail: "You updated your profile info",
    time: "3h ago",
  },
];


function OverviewChart() {
  const points = [12, 18, 14, 26, 20, 32, 24];
  const max = Math.max(...points);
  const min = Math.min(...points);
  const w = 560;
  const h = 140;
  const pad = 8;
  const step = (w - pad * 2) / (points.length - 1);
  const coords = points.map((p, i) => {
    const x = pad + i * step;
    const y = h - pad - ((p - min) / (max - min || 1)) * (h - pad * 2);
    return [x, y];
  });
  const linePath = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");
  const areaPath = `${linePath} L${coords[coords.length - 1][0]},${h} L${coords[0][0]},${h} Z`;
  const days = ["1 May", "6 May", "11 May", "16 May", "21 May", "26 May", "31 May"];

  return (
    <svg viewBox={`0 0 ${w} ${h + 24}`} className="w-full h-auto">
      <defs>
        <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#fillGrad)" />
      <path d={linePath} fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {coords.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#2563eb" stroke="white" strokeWidth="1.5" />
      ))}
      {days.map((d, i) => (
        <text
          key={d}
          x={coords[i][0]}
          y={h + 18}
          textAnchor="middle"
          fontSize="10"
          fill="#94a3b8"
        >
          {d}
        </text>
      ))}
    </svg>
  );
}

 function DashboardHome() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex text-slate-900" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 px-6 md:px-8 py-7 overflow-y-auto">
          <h1 className="text-2xl font-semibold text-slate-900 flex items-center gap-2">
            Welcome back! <span>👋</span>
          </h1>
          <p className="text-sm text-slate-500 mt-1 mb-6">
            Here's what's happening with your account today.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {STATS.map(({ label, value, icon: Icon, tint }) => (
              <div
                key={label}
                className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${tint}`}>
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-xl font-semibold leading-none text-slate-900">{value}</div>
                  <div className="text-xs text-slate-500 mt-1">{label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  Overview
                </h2>
                <button className="text-xs font-medium text-slate-500 bg-slate-100 rounded-full px-3 py-1.5 flex items-center gap-1">
                  This Month <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
              <OverviewChart />
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-5">
              <h2 className="text-sm font-semibold text-slate-800 mb-4">Recent Activity</h2>
              <div className="flex flex-col gap-4">
                {ACTIVITY.map(({ icon: Icon, tint, title, detail, time }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${tint}`}>
                      <Icon className="w-4 h-4" strokeWidth={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-slate-800">{title}</div>
                      <div className="text-xs text-slate-500">{detail}</div>
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3" />
                      {time}
                    </div>
                  </div>
                ))}
              </div>
              <button className="text-xs font-medium text-blue-600 mt-4 hover:underline">
                View all
              </button>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-6 flex items-center justify-between overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-white font-semibold text-base">Find your dream property</h3>
              <p className="text-blue-100 text-sm mt-1">
                Explore thousands of properties tailored to your lifestyle.
              </p>
            </div>
            <button className="relative z-10 bg-white text-blue-600 text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors shrink-0">
              Explore Now
            </button>
            <div className="absolute -right-6 -bottom-10 w-40 h-40 rounded-full bg-white/10" />
            <div className="absolute right-16 -top-10 w-24 h-24 rounded-full bg-white/10" />
          </div>
        </main>
      </div>
    </div>
  );
}
export default DashboardHome;