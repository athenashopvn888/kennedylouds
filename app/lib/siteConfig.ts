/**
 * Site-wide cigarette / tobacco visibility.
 * Default false. Set NEXT_PUBLIC_SHOW_CIGARETTES=true and rebuild to restore
 * every gated surface exactly as it was.
 */
export const SHOW_CIGARETTES = process.env.NEXT_PUBLIC_SHOW_CIGARETTES === "true";

/** Nicotine vape menu. Cigarette and Grabba URLs 302 here while the switch is off. */
export const VAPE_PAGE = "/items/vapes";

/** Explicit false / 0 / no / off. An empty value is not a hard override. */
export function cigaretteEnvHardOff(raw: string | undefined = process.env.SHOW_CIGARETTES ?? process.env.NEXT_PUBLIC_SHOW_CIGARETTES): boolean {
  if (raw == null) return false;
  return /^(0|false|no|off)$/i.test(raw.trim());
}
