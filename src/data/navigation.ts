export const navigation = [
  { href: '/', label: 'Creative Partner' },
  { href: '/smart-city', label: 'Smart City' },
  { href: '/advertising', label: 'Advertising' },
  { href: '/venture-lab', label: 'Venture Lab' },
  { href: '/creative-diary', label: 'Creative Diary' },
  { href: '/about', label: 'Karl Turkel' },
] as const;

export type NavigationSection = typeof navigation[number]['href'];

/** Match complete path segments so /advertising/project belongs to Advertising. */
export function activeNavigationSection(pathname: string): NavigationSection | undefined {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/' || path === '/creative-partner' || path.startsWith('/creative-partner/')) return '/';
  return navigation.find(({ href }) => href !== '/' && (path === href || path.startsWith(`${href}/`)))?.href;
}
