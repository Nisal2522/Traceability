/** Maps app icon keys (Lucide-style kebab names) to Font Awesome 6 icon suffixes. */
const ICON_MAP: Record<string, string> = {
  sprout: 'seedling',
  factory: 'industry',
  package: 'box',
  anchor: 'anchor',
  ship: 'ship',
  'building-2': 'building',
  warehouse: 'warehouse',
  'shopping-cart': 'cart-shopping',
  users: 'users',
  globe: 'globe',
  plane: 'plane',
  clock: 'clock',
  wheat: 'wheat-awn',
  award: 'award',
  leaf: 'leaf',
  'flask-conical': 'flask',
  'check-circle-2': 'circle-check',
  image: 'image',
  'file-text': 'file-lines',
  'help-circle': 'circle-question',
  link: 'link',
  tag: 'tag',
  'clipboard-list': 'clipboard-list',
  'shield-check': 'shield-halved',
  star: 'star',
  'badge-check': 'certificate',
  check: 'check',
  'triangle-alert': 'triangle-exclamation',
  snowflake: 'snowflake',
  'map-pin': 'location-dot',
  route: 'route',
  'qr-code': 'qrcode',
  x: 'xmark',
  download: 'download',
  calendar: 'calendar',
  hash: 'hashtag',
  'calendar-days': 'calendar-days',
  'calendar-clock': 'clock',
  shapes: 'shapes',
  info: 'circle-info',
  'chevron-down': 'chevron-down',
  search: 'magnifying-glass',
}

export function faIconSuffix(name: string): string {
  return ICON_MAP[name] ?? name
}

export function faIconClasses(name: string): string {
  return `fa-solid fa-${faIconSuffix(name)}`
}
