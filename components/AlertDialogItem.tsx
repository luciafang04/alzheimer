import * as AlertDialog from "@radix-ui/react-alert-dialog";
import React from "react";

interface AlertDialogItemProps {
  triggerText: React.ReactNode; // Permite pasar JSX con color
  title: string;
  description: string;
}

export default function AlertDialogItem({
  triggerText,
  title,
  description,
}: AlertDialogItemProps) {
  return (
    <AlertDialog.Root>
      {/* Botón trigger */}
      <AlertDialog.Trigger asChild>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center
                     transition-all duration-200 ease-in-out
                     hover:scale-105 hover:bg-[#D41EA4] hover:text-white
                     cursor-pointer"
          style={{
            border: "1px solid #D41EA4",
          }}
        >
          {triggerText}
        </button>
      </AlertDialog.Trigger>

      {/* Dialog */}
      <AlertDialog.Portal>
        {/* Overlay */}
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />

        {/* Content */}
        <AlertDialog.Content
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     bg-white p-6 rounded-lg shadow-lg w-96 max-w-[90%]"
        >
          <AlertDialog.Title className="text-lg font-bold text-black">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-black/80 text-sm">
            {description}
          </AlertDialog.Description>

          {/* Botón Cerrar */}
          <div className="mt-6 flex justify-end">
            <AlertDialog.Cancel asChild>
              <button className="px-4 py-2 rounded-md bg-gray-200 text-black hover:bg-gray-300 transition cursor-pointer">
                Entendido
              </button>
            </AlertDialog.Cancel>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
