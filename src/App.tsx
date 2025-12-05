import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <I18nextProvider i18n={i18n}>
        <Timeline />
      </I18nextProvider>
    </div>
  );
}

export default App;
