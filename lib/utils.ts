import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ImageKey {
  akashaSession: string;
  bioenergotherapy: string;
  decoding: string;
  radiesthesia: string;
  regressionSessions: string;
  systemSettingsSession: string;
  consciousBreathing: string;
  lawsOfTheUniverse: string;
  nonPersonalizedReadings: string;
  sampleSystemSettings: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const imageDatabase: Record<keyof ImageKey, string> = {
  akashaSession: '/akasha.webp',
  bioenergotherapy: '/bioenergotherapy.webp',
  decoding: '/decoding.webp',
  radiesthesia: '/radiesthesia.webp',
  regressionSessions: '/regression.webp',
  systemSettingsSession: '/system-settings.webp',
  consciousBreathing: '/consciousBreathing.webp',
  lawsOfTheUniverse: '/lawsOfTheUniverse.webp',
  nonPersonalizedReadings: '/nonPersonalizedReadings.webp',
  sampleSystemSettings: '/sampleSystemSettings.webp'
};
