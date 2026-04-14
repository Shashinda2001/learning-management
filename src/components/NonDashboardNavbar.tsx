import { Bell, BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const NonDashboardNavbar = () => {
  return (
    <nav className="nondashboard-navbar">
      <div className="nondashboard-navbar__container">
        <div className="nondashboard-navbar__search">
        <Link href="/" className="nondashboard-navbar__brand">
          LineNA
        </Link>
        <div className="flex items-center gap-4">
           <div className="relative group">
            <Link href="/search" className="nondashboard-navbar__search-input">
            <span className="hidden sm:inline">Search Courses</span>
            <span className="sm:hidden">Search</span>
            </Link>
            <BookOpen className="nondashboard-navbar__search-icon" size={18}/>
           </div>
        </div>
        </div>
      </div>

      <div className="nondashboard-navbar__actions">
            <Button className="nondashboard-navbar__notification-button">
            <span className="nondashboard-navbar__notification-indicator"></span>
            <Bell className="nondashboard-navbar__notification-icon" />
        </Button>
{/* sign in button */}
      </div>
    </nav>
  );
};

export default NonDashboardNavbar;