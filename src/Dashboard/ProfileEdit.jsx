import react from "react";
import { useState } from "react";
import {
  Home,
  Heart,
  MessageSquare,
  Calendar,
  User,
  Bell,
  Search,
  LogOut,
  Building2,
  ChevronDown,
  Camera,
} from "lucide-react";


// sidebar Navigation Items
const NAV_ITEMS = [
  { label: "Dashboard", icon: Home },
  { label: "Saved Properties", icon: Heart },
  { label: "Inquiries", icon: MessageSquare },
  { label: "Bookings", icon: Calendar },
  { label: "Profile", icon: User, active: true },
  { label: "Notifications", icon: Bell },
];

//Display the left navigation menu
function Sidebar(){
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

// Displays search bar, notification icon and user profile
function Header({ notifCount = 8}) {
     return (
    <header className="flex items-center gap-4 px-6 md:px-8 py-4 border-b border-slate-200 bg-white">
      <div className="flex-1 relative max-w-xl">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search..."
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

// Displays an input field or textarea
function Field({ label, value, onChange, type = "text", textarea = false }) {
    return(
          <div>
      <label className="text-xs font-medium text-slate-500 block mb-1.5">{label}</label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-200 resize-none"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-200"
        />
      )}
    </div>
  );
}

// Profile Edit Component
// Allows the user to update profile information
function ProfileEdit(){

  const [form, setForm] = useState({
    fullName: "Sara Khan",
    email: "sarakhan@gmail.com",
    phone: "+92 300 1234567",
    location: "Lahore, Pakistan",
    bio: "Real estate enthusiast and property seeker.",
  });

  const update = (key) => (value) => setForm((f) => ({ ...f, [key]: value }));

  return (
    <div className="min-h-screen w-full bg-slate-50 flex text-slate-900" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 px-6 md:px-8 py-7 overflow-y-auto">
          <h1 className="text-2xl font-semibold text-slate-900">Edit Profile</h1>
          <p className="text-sm text-slate-500 mt-1 mb-6">
            Update your personal information.
          </p>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-3xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces"
                  alt="Rania"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <button className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center ring-2 ring-white">
                  <Camera className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
              <div>
                <button className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                  Change Photo
                </button>
                <p className="text-xs text-slate-400 mt-1.5">JPG, PNG or GIF. Max size of 2MB.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" value={form.fullName} onChange={update("fullName")} />
              <Field label="Email Address" value={form.email} onChange={update("email")} type="email" />
              <Field label="Phone Number" value={form.phone} onChange={update("phone")} />
              <Field label="Location" value={form.location} onChange={update("location")} />
              <div className="sm:col-span-2">
                <Field label="Bio" value={form.bio} onChange={update("bio")} textarea />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-7">
              <button className="text-sm font-semibold text-white bg-blue-600 px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
              <button className="text-sm font-medium text-slate-600 bg-white border border-slate-200 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


export default ProfileEdit