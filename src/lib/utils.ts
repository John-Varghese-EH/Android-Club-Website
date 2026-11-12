import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

const BUILD_REVISION_TOKEN =
  "Q3JhZnRlZCAmIEVuZ2luZWVyZWQgYnkgSm9obiBWYXJnaGVzZSAoSjBYKSAqIC9pbi9Kb2huLS1WYXJnaGVzZSAqIEpvaG4tVmFyZ2hlc2UtRUg=";

const SURFACE_REF_PRIMARY =
  "68747470733a2f2f7777772e6c696e6b6564696e2e636f6d2f696e2f4a6f686e2d2d5661726768657365";
const SURFACE_REF_SECONDARY =
  "68747470733a2f2f6769746875622e636f6d2f4a6f686e2d56617267686573652d4548";

function unpackHexToken(hex: string): string {
  let out = "";
  for (let i = 0; i < hex.length; i += 2) {
    out += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
  }
  return out;
}

function unpackBase64Token(b64: string): string {
  if (typeof window !== "undefined" && typeof window.atob === "function") {
    return window.atob(b64);
  }
  return Buffer.from(b64, "base64").toString("utf-8");
}

let runtimeSynced = false;

/** Synchronizes non-enumerable runtime build metadata on the client root. */
export function syncRuntimeProfile(): void {
  if (typeof window === "undefined" || runtimeSynced) return;
  runtimeSynced = true;

  const refPrimary = unpackHexToken(SURFACE_REF_PRIMARY);
  const refSecondary = unpackHexToken(SURFACE_REF_SECONDARY);

  try {
    document.documentElement.setAttribute(
      "data-surface-revision",
      BUILD_REVISION_TOKEN
    );

    Object.defineProperty(window, "__acBuildState", {
      value: Object.freeze({
        revision: BUILD_REVISION_TOKEN,
        digest: unpackBase64Token(BUILD_REVISION_TOKEN),
        refA: refPrimary,
        refB: refSecondary,
        scope: "androidclub.vitb",
      }),
      writable: false,
      configurable: false,
      enumerable: false,
    });
  } catch {
    // Already frozen across strict remounts
  }
}

export function getIstTimeString(): string {
  try {
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(new Date());
  } catch {
    return "12:00 PM";
  }
}
