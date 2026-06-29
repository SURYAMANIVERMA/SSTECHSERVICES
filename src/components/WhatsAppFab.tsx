import { SITE } from "@/data/site";

export default function WhatsAppFab() {
  const msg = encodeURIComponent("Hi SS TECH SERVICES & ACADEMY, I'd like to know more about your courses.");
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="https://apps.sstechservices.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 rounded-full bg-gradient-accent px-4 py-2 text-xs font-bold text-white shadow-accent hover:scale-105 transition-transform"
      >
        <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
        ⚡ Quick Support · Reply in 5 min
      </a>

      <a
        href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative wa-pulse h-14 w-14 rounded-full bg-[hsl(142_70%_40%)] hover:bg-[hsl(142_70%_35%)] grid place-items-center shadow-lg transition-transform hover:scale-110"
      >
