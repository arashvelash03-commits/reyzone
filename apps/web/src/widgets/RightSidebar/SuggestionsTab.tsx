import { Lightbulb } from "lucide-react";

const SuggestionsTab = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-center border-b p-4">
        <Lightbulb className="mr-2 h-6 w-6" />
        <h2 className="text-lg font-semibold">AI Suggestions</h2>
      </div>
      <div className="flex-grow p-4">
        <ul className="space-y-2 text-sm">
          <li className="rounded-lg bg-accent p-2">Consider ordering a CBC.</li>
          <li className="rounded-lg bg-accent p-2">Check for patient allergies.</li>
          <li className="rounded-lg bg-accent p-2">Review recent lab results.</li>
        </ul>
      </div>
    </div>
  );
};

export default SuggestionsTab;
