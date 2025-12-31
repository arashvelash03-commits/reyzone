import React from "react";
import AIChatTab from "./AIChatTab";
import SuggestionsTab from "./SuggestionsTab";
import HandwritingTab from "./HandwritingTab";

const RightSidebar = () => {
  return (
    <aside className="h-screen w-1/3 max-w-80 min-w-3xs border-l bg-background p-4 flex flex-col">
      {" "}
      <div className="flex-grow pb-4 overflow-y-auto border-b">
        {" "}
        <AIChatTab />
      </div>
      <div className="flex-grow pb-4 overflow-y-auto">
        <SuggestionsTab />
      </div>
      {/* HandwritingTab with a fixed height */}
      <div className="h-[256px] flex-shrink-0">
        <HandwritingTab />
      </div>
    </aside>
  );
};

export default RightSidebar;
