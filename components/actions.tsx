"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { useContext } from "react";
import { ActionModalContext } from "@/providers/action-moal-provider";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

export const Actions = ({
  children,
  side,
  sideOffset,
  id,
  title,
}: ActionsProps) => {
  const { mutate: mutateRemove, pending: pendingRemove } = useApiMutation(
    api.board.remove
  );
  const { mutate: mutateUpdate, pending: pendingUpdate } = useApiMutation(
    api.board.update
  );

  const { onOpenModal } = useContext(ActionModalContext);

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const onRemove = (id: string) => {
    mutateRemove({ id })
      .then(() => toast.success("Board deleted"))
      .catch(() => toast.error("Failed to delete board"));

      // TODO: when delete board in the board cavas page, should redirect to hoe page 
  };

  const onUpdate = (id: string, title: string) => {
    mutateUpdate({ id, title })
      .then(() => toast.success("Board updated"))
      .catch(() => toast.error("Failed to update board"));
  };

  const updateModalState = {
    id,
    title,
    header: "Change title?",
    description: "type the new title in input field",
    disabled: pendingUpdate,
    onConfirm: onUpdate,
    hasInput: true,
  };

  const removeModalState = {
    id,
    title,
    header: "Delete board?",
    description: "This will delete the board and all of this contents",
    disabled: pendingRemove,
    onConfirm: onRemove,
    hasInput: false,
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem className="p-3 cursor-pointer" onSelect={onCopyLink}>
          <Link2 className="h-4 w-4 mr-2" />
          Copy board link
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onSelect={() => onOpenModal(updateModalState)}
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-3 cursor-pointer"
          onSelect={() => onOpenModal(removeModalState)}
        >
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
