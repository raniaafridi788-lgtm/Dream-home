import React from "react";
import {Home,Heart,MessageSquare,Calendar,User,Bell,Search,LogOut,Building2,ChevronDown,} from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard", icon: Home },
  { label: "Saved Properties", icon: Heart },
  { label: "Inquiries", icon: MessageSquare, active: true },
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
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
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

function Header({ notifCount = 8, searchPlaceholder = "Search inquiries..." }) {
  return (
    <header className="flex items-center gap-4 px-6 md:px-8 py-4 border-b border-slate-200 bg-white">
      <div className="flex-1 relative max-w-xl">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder={searchPlaceholder}
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
        <span className="text-sm font-medium text-slate-700 hidden sm:block">User</span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </button>
    </header>
  );
}

const STATUS_STYLES = {
  Pending: "bg-amber-50 text-amber-600",
  Replied: "bg-emerald-50 text-emerald-600",
  Closed: "bg-slate-100 text-slate-500",
};

const INQUIRIES = [
  {
    id: 1,
    name: "Faraz Ahmed",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=faces",
    message: "I am interested in your Luxury Villa. Please share more details.",
    property: "Luxury Villa in DHA",
    date: "12 May, 2024",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    id: 2,
    name: "Ali Khan",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    message: "I would like to know the price and availability.",
    property: "Modern Apartment",
    date: "11 May, 2024",
    time: "04:15 PM",
    status: "Replied",
  },
  {
    id: 3,
    name: "Sara Malik",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    message: "Please share the visiting schedule.",
    property: "Beach House",
    date: "10 May, 2024",
    time: "01:20 PM",
    status: "Pending",
  },
  {
    id: 4,
    name: "Hassan Raza",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=faces",
    message: "Is this property still available?",
    property: "Penthouse Apartment",
    date: "9 May, 2024",
    time: "11:45 AM",
    status: "Closed",
  },
];

function InquiryRow({ inquiry }) {
  return (
    <div className="flex items-start gap-4 py-4 px-1 border-b border-slate-100 last:border-b-0">
      <img
        src={inquiry.avatar}
        alt={inquiry.name}
        className="w-11 h-11 rounded-full object-cover shrink-0"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-slate-900">{inquiry.name}</span>
          <span className="text-xs text-slate-400 shrink-0">
            {inquiry.date} &nbsp;{inquiry.time}
          </span>
        </div>
        <p className="text-sm text-slate-500 mt-1">{inquiry.message}</p>
        <button className="text-xs font-medium text-blue-600 mt-1.5 hover:underline">
          {inquiry.property}
        </button>
      </div>
      <span
        className={`text-xs font-medium px-3 py-1 rounded-full shrink-0 ${STATUS_STYLES[inquiry.status]}`}
      >
        {inquiry.status}
      </span>
    </div>
  );
}

export default function InquiriesList() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex text-slate-900" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header searchPlaceholder="Search inquiries..." />
        <main className="flex-1 px-6 md:px-8 py-7 overflow-y-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">My Inquiries</h1>
              <p className="text-sm text-slate-500 mt-1">
                Here are the inquiries you have sent.
              </p>
            </div>
            <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl px-3.5 py-2">
              All Status <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 px-4">
            {INQUIRIES.map((inquiry) => (
              <InquiryRow key={inquiry.id} inquiry={inquiry} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}