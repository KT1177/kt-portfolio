/** Resolve a public R2 object key. An unset origin keeps placeholders visible. */
export function mediaUrl(key: string, baseUrl = import.meta.env.PUBLIC_R2_BASE_URL): string | undefined {
  const base = baseUrl?.trim();
  if (!base || !key.trim()) return undefined;
  const origin = new URL(base);
  if (origin.protocol !== 'https:' || origin.username || origin.password || origin.search || origin.hash) {
    throw new Error('PUBLIC_R2_BASE_URL must be a public HTTPS base URL without credentials, query, or fragment.');
  }
  const parts = key.replace(/^\/+/, '').split('/');
  if (parts.some(part => part === '.' || part === '..')) throw new Error('Media keys cannot contain traversal segments.');
  return `${origin.href.replace(/\/+$/, '')}/${parts.map(encodeURIComponent).join('/')}`;
}
