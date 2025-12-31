import { FileText } from 'lucide-react';
import React from 'react';

const CanvasPlaceholder = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted text-muted-foreground">
      <FileText className="mb-4 h-12 w-12" />
      <h2 className="text-xl font-semibold">No Document Selected</h2>
      <p>Please select a document from the sidebar to view its contents.</p>
    </div>
  );
};

export default CanvasPlaceholder;
