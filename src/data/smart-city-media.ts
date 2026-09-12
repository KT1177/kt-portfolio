import { mediaUrl } from '../lib/media';

export const smartCityMedia = {
  'smart-city-hero-nyc.webp': 'smart-city/smart-city-hero-nyc.webp',
  'call-box-city.webp': 'smart-city/call-box-city.webp',
  'US20080304628.pdf': 'smart-city/US20080304628.pdf',
  'patent_payphone_image.webp': 'smart-city/patent_payphone_image.webp',
  '247-jennifer-faulk.webp': 'smart-city/247-jennifer-faulk.webp',
  'JC-kiosk-city.webp': 'smart-city/JC-kiosk-city.webp',
  'edison-gold-award.webp': 'smart-city/edison-gold-award.webp',
  'citypost-screens-final.webp': 'smart-city/citypost-screens-final.webp',
  'polevolt-kt-port.webp': 'smart-city/polevolt-kt-port.webp',
  'chicago-jcd-citypost-1.webp': 'smart-city/chicago-jcd-citypost-1.webp',
  'reno-screen-kt-port.webp': 'smart-city/reno-screen-kt-port.webp',
} as const;

export function smartCityUrl(name: keyof typeof smartCityMedia) {
  return mediaUrl(smartCityMedia[name], import.meta.env.PUBLIC_R2_BASE_URL ?? 'https://pub-e185fd1db9bf4dd59d2b99be455217bd.r2.dev');
}
