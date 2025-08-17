import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout.jsx";

// Public site (tumhara existing Home/About… yahin rahenge)
import PublicHome from "./pages/public/Home.jsx";

// Admin pages (mockups ke hisab se)
import InstituteHome from "./pages/admin/InstituteHome.jsx";
import Analytics from "./pages/admin/Analytics.jsx";
import Applications from "./pages/admin/Applications.jsx";
import Students from "./pages/admin/Students.jsx";
import ExportStudents from "./pages/admin/ExportStudents.jsx";
import InterviewMonitor from "./pages/admin/InterviewMonitor.jsx";
import Jobs from "./pages/admin/Jobs.jsx";
import PostJob from "./pages/admin/PostJob.jsx";
import Reports from "./pages/admin/Reports.jsx";
import Settings from "./pages/admin/Settings.jsx";

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<PublicHome />} />

      {/* Admin layout */}
      <Route element={<Layout />}>
        <Route path="/institute" element={<InstituteHome />} />
        <Route path="/institute/analytics" element={<Analytics />} />
        <Route path="/institute/applications" element={<Applications />} />
        <Route path="/institute/students" element={<Students />} />
        <Route path="/institute/students/export" element={<ExportStudents />} />
        <Route path="/institute/interviews" element={<InterviewMonitor />} />
        <Route path="/institute/jobs" element={<Jobs />} />
        <Route path="/institute/post-job" element={<PostJob />} />
        <Route path="/institute/reports" element={<Reports />} />
        <Route path="/institute/settings" element={<Settings />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
