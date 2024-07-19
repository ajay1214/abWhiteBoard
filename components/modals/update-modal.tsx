"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface UpdateModalProps {
  children: React.ReactNode;
  onConfirm: (title: string) => void;
  disabled?: boolean;
  header: string;
  description?: string;
  title: string;
}

export const UpdateModal = ({
  children,
  onConfirm,
  disabled,
  header,
  description,
  title,
}: UpdateModalProps) => {
  const [value, setValue] = useState(title);

  const handleUpdate = () => {
    onConfirm(value);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
            <Input
              className="mt-4"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={handleUpdate}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
