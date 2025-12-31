import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";

export function PatientHeader() {
  return (
    <header className="border-b bg-card text-card-foreground">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/avatars/01.png" alt="Patient Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Jessica Doe</h1>
            <p className="text-muted-foreground">MRN: 123456 | DOB: 01/01/1990 (34y)</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-medium">Admission Date</p>
            <p className="text-muted-foreground">03/15/2024</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Location</p>
            <p className="text-muted-foreground">General Hospital, Room 302</p>
          </div>
        </div>
      </div>
    </header>
  );
}
