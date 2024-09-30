import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements1.svg" alt="Empty" height={200} width={200} />
      <h2 className="text-2xl font-semibold mt-6">Welcome to Board</h2>
      <p className="a text-muted-foreground text-sm mt-2">
        Start an organization to begin our work.
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-orange-400" size="lg">Start organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-orange-200 border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
