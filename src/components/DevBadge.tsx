const isDev = import.meta.env.VITE_ENVIRONMENT === "development";
const API_BASE = isDev ? "localhost:8080" : "cloud";

function isLocalEnv(): boolean {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h.endsWith(".ngrok-free.app") || h.endsWith(".ngrok-free.dev") || h.endsWith(".ngrok.io") || h.endsWith(".ngrok.app");
}

export function DevBadge() {
  if (!isDev) return null;

  return (
    <div style={{ zIndex: 9999 }} className="fixed bottom-6 right-3 flex flex-col items-end gap-2 select-none pointer-events-none">
      <div className="flex items-center gap-1.5 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-amber-900 shadow-lg">
        <span className="size-2 rounded-full bg-amber-600 animate-pulse" />
        DEV · {API_BASE}
      </div>
      {isLocalEnv() && (
        <div className="flex items-center gap-1.5 rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          <span className="size-2 rounded-full bg-violet-300 animate-pulse" />
          Stripe: Sandbox
        </div>
      )}
    </div>
  );
}
