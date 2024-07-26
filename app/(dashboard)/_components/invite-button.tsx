import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const InviteButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-200" variant="outline">
          {/* <Plus className="h-4 w-4 mr-2" /> */}
          <div className="plusButton">
            <svg
              className="plusIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
            >
              <g mask="url(#mask0_21_345)">
                <path d="M13.75 23.75V16.25H6.25V13.75H13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75Z"></path>
              </g>
            </svg>
          </div>
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-orange-200 border-none max-w-[880px]">
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
};
