"use client";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface ActionModalProps {
  id: string;
  title: string;
  header: string;
  description: string;
  disabled: boolean;
  onConfirm: (id: string, title: string) => void;
  isOpen: boolean;
  onClose: () => void;
  hasInput: boolean;
  input: string;
  setInput: (_: any) => void;
}

export const ActionModal = ({
  id,
  header,
  isOpen,
  description,
  disabled,
  onConfirm,
  onClose,
  hasInput,
  input,
  setInput,
}: ActionModalProps) => {
  const handleConfirm = () => {
    if (!input.trim()) {
      toast.error("Title can't be empty");
      return;
    }
    onConfirm(id, input);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{description}</DialogDescription>
        {hasInput && (
          <Input
            disabled={disabled}
            maxLength={60}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Board title"
          />
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button disabled={disabled} onClick={handleConfirm}>
              Confirm
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
