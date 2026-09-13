import { mediaUrl } from '../lib/media';

export const smartCityMedia = {
  'smart-city-hero-nyc.webp': 'smart-city/smart-city-hero-nyc.webp',
  'citysafe-nyc-hero.webp': 'smart-city/citysafe-nyc-hero.webp',
  'call-box-city.webp': 'smart-city/call-box-city.webp',
  'US20080304628.pdf': 'smart-city/smart-city-pdfs/US20080304628.pdf',
  'patent_payphone_image.webp': 'smart-city/patent_payphone_image.webp',
  '247-interface.webp': 'smart-city/247-interface.webp',
  'JC-kiosk-city.webp': 'smart-city/JC-kiosk-city.webp',
  'edison-gold-award.webp': 'smart-city/edison-gold-award.webp',
  'citypost-screens.webp': 'smart-city/citypost-screens.webp',
  'polevolt-web.webp': 'smart-city/polevolt-web.webp',
  'chicago-jcd-citypost.webp': 'smart-city/chicago-jcd-citypost.webp',
  'reno-screen.webp': 'smart-city/reno-screen.webp',
  'Citypost-Hero-JC.webp': 'smart-city/Citypost-Hero-JC.webp',
  'Citypost-Hero-DART.webp': 'smart-city/Citypost-Hero-DART.webp',
  'Citypost-Hero-DART-2.webp': 'smart-city/Citypost-Hero-DART-2.webp',
  'Citypost-Hero-KC-Streetcar.webp': 'smart-city/Citypost-Hero-KC-Streetcar.webp',
  'Citypost-Hero-KC-Bus-1.webp': 'smart-city/Citypost-Hero-KC-Bus-1.webp',
  'Citypost-Hero-KC-Bus.webp': 'smart-city/Citypost-Hero-KC-Bus.webp',
  'Citypost-Hero-GB.webp': 'smart-city/Citypost-Hero-GB.webp',
  'Citypost-Hero-GB-1.webp': 'smart-city/Citypost-Hero-GB-1.webp',
  'Citypost-Hero-Aurora.webp': 'smart-city/Citypost-Hero-Aurora.webp',
  'Citypost-Hero-Louisville.webp': 'smart-city/Citypost-Hero-Louisville.webp',
  'Citypost-Hero-MKE.webp': 'smart-city/Citypost-Hero-MKE.webp',
  'Citypost-Hero-Moco.webp': 'smart-city/Citypost-Hero-Moco.webp',
  'Citypost-Hero-Torrance-Station.webp': 'smart-city/Citypost-Hero-Torrance-Station.webp',
  'Citypost-Hero-UMKC.webp': 'smart-city/Citypost-Hero-UMKC.webp',
} as const;

export function smartCityUrl(name: keyof typeof smartCityMedia) {
  return mediaUrl(smartCityMedia[name], import.meta.env.PUBLIC_R2_BASE_URL ?? 'https://pub-e185fd1db9bf4dd59d2b99be455217bd.r2.dev');
}
