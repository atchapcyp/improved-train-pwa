import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.tsx";

const Module1 = lazy(() => import("./pages/module1"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div> Loading.. </div>}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/modules1' element={<Module1 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
