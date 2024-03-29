import React from "react";
import { createRoot } from "react-dom/client";
import HelloUniverse from "./components/HelloUniverse";

const container = document.getElementById("root");
// createRoot(container!) if you use TypeScript
const root = createRoot(container);
root.render(
  <>
    <h1>Remotely Hosted App</h1>
    <HelloUniverse />
  </>
);
