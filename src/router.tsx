import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage";
import Dashboard from "./pages/Dashboard";
import Documentation from "./pages/Documentation";
import DocumentsPage from "./pages/DocumentsPage";
import Forms from "./pages/Forms";
import Gallery from "./pages/Gallery";
import InterfacePage from "./pages/InterfacePage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import SourceCode from "./pages/SourceCode";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* NOT FOUND/ INVALID ROUTE */}
        <Route path="*" element={<PageNotFound />} />

        {/* LOGIN */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* DASHBOARD PAGE */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/source-code" element={<SourceCode />} />
        <Route path="/interface" element={<InterfacePage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/pages" element={<DocumentsPage />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
