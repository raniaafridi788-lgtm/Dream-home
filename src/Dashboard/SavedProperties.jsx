import React from "react";
import {Home,Heart,MessageSquare,Calendar,User,Bell,Search,LogOut,Building2,ChevronDown,BedDouble,Bath,Ruler,Trash2,} from "lucide-react";

const NAV_ITEMS = [
  { label: "Dashboard", icon: Home },
  { label: "Saved Properties", icon: Heart, active: true },
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

function Header({ notifCount = 8, searchPlaceholder = "Search properties..." }) {
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

const PROPERTIES = [
  {
    id: 1,
    title: "Luxury Villa in DHA",
    location: "DHA Phase 6, Lahore",
    price: "$475,000",
    beds: 5,
    baths: 6,
    sqft: "4500 sqft",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=420&fit=crop",
  },
  {
    id: 2,
    title: "Modern Apartment",
    location: "Bahria Town, Karachi",
    price: "$250,000",
    beds: 3,
    baths: 3,
    sqft: "2200 sqft",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=420&fit=crop",
  },
  {
    id: 3,
    title: "Beach House",
    location: "Clifton, Karachi",
    price: "$650,000",
    beds: 4,
    baths: 4,
    sqft: "3200 sqft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=420&fit=crop",
  },
];

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-44 object-cover"
        />
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
        </button>
      </div>
      <div className="p-4">
        <div className="text-blue-600 font-semibold text-lg">{property.price}</div>
        <div className="text-sm font-semibold text-slate-900 mt-0.5">{property.title}</div>
        <div className="text-xs text-slate-500 mt-0.5">{property.location}</div>
        <div className="flex items-center gap-4 mt-3 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <BedDouble className="w-3.5 h-3.5" /> {property.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath className="w-3.5 h-3.5" /> {property.baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <Ruler className="w-3.5 h-3.5" /> {property.sqft}
          </span>
        </div>
        <button className="mt-4 w-full flex items-center justify-center gap-2 border border-red-200 text-red-500 text-sm font-medium py-2 rounded-xl hover:bg-red-50 transition-colors">
          <Trash2 className="w-4 h-4" />
          Remove
        </button>
      </div>
    </div>
  );
}

 function SavedProperties() {
  return (
    <div className="min-h-screen w-full bg-slate-50 flex text-slate-900" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header searchPlaceholder="Search properties..." />
        <main className="flex-1 px-6 md:px-8 py-7 overflow-y-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Saved Properties</h1>
              <p className="text-sm text-slate-500 mt-1">
                These are the properties you have saved.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl px-3.5 py-2">
                All Types <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl px-3.5 py-2">
                Sort By: Newest <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
            {PROPERTIES.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
export default SavedProperties;