import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { MessageSquare, Send } from "lucide-react";

const AIChatTab = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-center border-b p-4">
        <MessageSquare className="mr-2 h-6 w-6" />
        <h2 className="text-lg font-semibold">AI Chat</h2>
      </div>
      <div className="flex-grow p-4">
        <div className="text-center text-muted-foreground">
          <p>No messages yet. Start a conversation!</p>
        </div>
      </div>
      <div className="flex items-center gap-2 border-t p-4">
        <Input placeholder="Ask something..." />
        <Button>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default AIChatTab;
