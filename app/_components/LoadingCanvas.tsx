import { Loader } from "lucide-react";

export default function LoadingCanvas() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader size={50} className="animate-spin text-green-800" />
    </div>
  );
}
