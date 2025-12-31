import { Pencil } from "lucide-react";

const HandwritingTab = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-center border-b p-4">
        <Pencil className="mr-2 h-6 w-6" />
        <h2 className="text-lg font-semibold">Handwriting</h2>
      </div>
      <div className="flex-grow p-4">
        <div className="h-full w-full rounded-lg bg-muted" />
      </div>
    </div>
  );
};

export default HandwritingTab;
