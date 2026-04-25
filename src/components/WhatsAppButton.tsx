import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/35796626844?text=Hi!%20I%27d%20like%20to%20book%20a%20Cyprus%20airport%20transfer"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 fill-white" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-25" />
    </a>
  );
}
