import React from "react";
import {Home, Heart, MessageSquare, Calendar, User, Bell ,LogOut, Building2, ChevronDown, CheckCircle2, Mail,CalendarClock, Search } from "lucide-react"

// sidebar Navigation Items
const NAV_ITEMS = [
  { label: "Dashboard", icon: Home },
  { label: "Saved Properties", icon: Heart },
  { label: "Inquiries", icon: MessageSquare },
  { label: "Bookings", icon: Calendar },
  { label: "Profile", icon: User },
  { label: "Notifications", icon: Bell, active: true },
];

//Display the left navigation menu
function Sidebar(){
    return(
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
 
// Displays search bar, notification icon and user profile
function Header({ notifCount = 8 }) {
  return (
    <header className="flex items-center gap-4 px-6 md:px-8 py-4 border-b border-slate-200 bg-white">
      <div className="flex-1 relative max-w-xl">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search notifications..."
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

// Stores all user notifications
const NOTIFICATIONS = [
  {
    id: 1,
    icon: CheckCircle2,
    tint: "bg-emerald-50 text-emerald-600",
    title: "Booking Confirmed",
    detail: "Your booking for Luxury Villa in DHA has been confirmed.",
    time: "2 minutes ago",
    unread: true,
  },
  {
    id: 2,
    icon: Heart,
    tint: "bg-rose-50 text-rose-500",
    title: "Property Added to Saved",
    detail: "Modern Apartment has been added to your saved properties.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    icon: Mail,
    tint: "bg-blue-50 text-blue-600",
    title: "New Inquiry Received",
    detail: "Ali Khan sent you a new inquiry regarding Modern Apartment.",
    time: "3 hours ago",
    unread: true,
  },
  {
    id: 4,
    icon: CalendarClock,
    tint: "bg-amber-50 text-amber-600",
    title: "Booking Reminder",
    detail: "Your booking for Modern Apartment is starting tomorrow.",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 5,
    icon: User,
    tint: "bg-violet-50 text-violet-600",
    title: "Profile Updated",
    detail: "Your profile information has been updated successfully.",
    time: "3 days ago",
    unread: false,
  },
];

// Displays a single notification
function NotificationRow({ notification }) {
  const { icon: Icon, tint, title, detail, time, unread } = notification;

  return (
    <div
      className={`flex items-start gap-3.5 py-4 px-4 border-b border-slate-100 last:border-b-0 ${
        unread ? "bg-blue-50/40" : ""
      }`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${tint}`}
      >
        <Icon className="w-4 h-4" strokeWidth={2} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-slate-900">
          {title}
        </div>

        <div className="text-sm text-slate-500 mt-0.5">
          {detail}
        </div>

        <div className="text-xs text-slate-400 mt-1.5">
          {time}
        </div>
      </div>

      {unread && (
        <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
      )}
    </div>
  );
}


// Main Notification List Component
// Displays all user notifications
function NotificationList(){
    return(
    <>
  <div className="min-h-screen w-full bg-slate-50 flex text-slate-900" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 px-6 md:px-8 py-7 overflow-y-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Notifications</h1>
              <p className="text-sm text-slate-500 mt-1">
                Stay updated with your latest activities.
              </p>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:underline">
              Mark all as read
            </button>
          </div>
           <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl overflow-hidden">
            {NOTIFICATIONS.map((n) => (
              <NotificationRow key={n.id} notification={n} />
            ))}
          </div>

   </main>
</div>
</div>


        </>
    )

}
export default NotificationList