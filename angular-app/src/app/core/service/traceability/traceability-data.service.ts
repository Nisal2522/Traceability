import { Injectable } from '@angular/core'
import { QuickStatDTO } from '../../models/QuickStatDTO'
import { JourneyStopDTO } from '../../models/JourneyStopDTO'
import { StopDetailDTO } from '../../models/StopDetailDTO'
import { CertificationDTO } from '../../models/CertificationDTO'
import { FarmerDTO } from '../../models/FarmerDTO'
import { FaqItemDTO } from '../../models/FaqItemDTO'
import { GalleryItemDTO } from '../../models/GalleryItemDTO'
import { SustainabilityMetricDTO } from '../../models/SustainabilityMetricDTO'
import { QualityCheckDTO } from '../../models/QualityCheckDTO'
import { PassportTimelineStepDTO } from '../../models/PassportTimelineStepDTO'

export const PRIMARY = '#2E7D32'
export const PRIMARY_LIGHT = '#E8F5E9'
export const SHADOW_SM = '0 14px 40px rgba(15,23,42,0.08), 0 2px 8px rgba(15,23,42,0.05)'

const QUICK_STATS: QuickStatDTO[] = [
  { icon: 'users', label: 'Farmers', value: '10', sub: 'Sri Lanka' },
  { icon: 'globe', label: 'Origin', value: 'Sri Lanka', sub: 'LK' },
  { icon: 'factory', label: 'Processing', value: '1 Facility', sub: 'HACCP Certified' },
  { icon: 'plane', label: 'Export', value: 'USA', sub: 'US' },
  { icon: 'shopping-cart', label: 'Purchased From', value: 'ALDI', sub: 'Chicago, IL' },
  { icon: 'clock', label: 'Farm to Shelf', value: '18 Days', sub: 'Cold Chain' },
]

const STOPS: JourneyStopDTO[] = [
  {
    id: 'farm', stage: 'Farm — Harvest', location: 'Kurunegala, Sri Lanka', date: '10 May 2026',
    icon: 'sprout', color: '#2E7D32', latlng: [7.48, 80.36],
    details: [
      { label: 'Lead Farmer', value: 'Sunil Perera' }, { label: 'Total Farmers', value: '10' },
      { label: 'Farm Size', value: '4.5 Acres (avg)' }, { label: 'Variety', value: 'Karutha Kolomban' },
      { label: 'Harvest Method', value: 'Hand-picked' }, { label: 'Quality Grade', value: 'Grade A' },
      { label: 'Sustainability', value: 'Rain-fed, no pesticides' }, { label: 'GPS', value: '7.4675°N, 80.3615°E' },
    ],
  },
  {
    id: 'factory', stage: 'Production Facility', location: 'Colombo Port District, Sri Lanka', date: '12 May 2026',
    icon: 'factory', color: '#F57F17', latlng: [6.93, 79.85],
    details: [
      { label: 'Factory', value: 'Ceylon Fresh Processing Ltd.' }, { label: 'Production Line', value: 'Line 3 — Aseptic' },
      { label: 'Batch', value: 'MP240517' }, { label: 'Pasteurization', value: '85°C / 30 sec' },
      { label: 'Food Safety', value: 'HACCP Compliant' }, { label: 'QA Result', value: 'Passed — Grade A' },
      { label: 'Operator', value: 'Chamara Fernando' }, { label: 'Lab Approval', value: 'Cert. #CF-2891' },
    ],
  },
  {
    id: 'warehouse', stage: 'Export Warehouse', location: 'Port of Colombo, Sri Lanka', date: '14 May 2026',
    icon: 'package', color: '#7B1FA2', latlng: [6.95, 79.84],
    details: [
      { label: 'Terminal', value: 'Colombo South Container Terminal' }, { label: 'Cold Storage', value: '4°C Controlled' },
      { label: 'Seal No.', value: 'SL-COL-88321' }, { label: 'Pallets', value: '12 / 1,440 units' },
      { label: 'Export Permit', value: 'EP-2026-0055-SL' }, { label: 'Customs', value: 'Cleared 14 May 2026' },
    ],
  },
  {
    id: 'port', stage: 'Shipping Port', location: 'Port of Colombo — Departure', date: '15 May 2026',
    icon: 'anchor', color: '#0277BD', latlng: [6.96, 79.83],
    details: [
      { label: 'Port', value: 'Port of Colombo' }, { label: 'Terminal', value: 'Jaya Container Terminal' },
      { label: 'Vessel', value: 'MSC AURORA' }, { label: 'Container', value: 'MSCU3847291' },
      { label: 'Departure', value: '15 May 2026, 22:00 UTC' }, { label: 'Shipping Line', value: 'MSC Mediterranean' },
    ],
  },
  {
    id: 'ocean', stage: 'Ocean Freight', location: 'Indian Ocean → Suez → Atlantic', date: '15–29 May 2026',
    icon: 'ship', color: '#0097A7', latlng: [20.0, 50.0],
    details: [
      { label: 'Route', value: 'Colombo → Suez Canal → Newark' }, { label: 'Transit', value: '14 Days' },
      { label: 'Distance', value: '5,800 km' }, { label: 'Temperature', value: '4°C (IoT)' },
      { label: 'Humidity', value: '65% RH — Stable' }, { label: 'Container Seal', value: '✓ Verified Intact' },
      { label: 'Tracking', value: 'Live GPS every 30 min' }, { label: 'Carrier', value: 'MSC Mediterranean' },
    ],
  },
  {
    id: 'import', stage: 'USA Import Warehouse', location: 'Port of Newark, New Jersey', date: '29 May 2026',
    icon: 'building-2', color: '#C62828', latlng: [40.68, -74.15],
    details: [
      { label: 'Facility', value: 'NJ Cold Storage Logistics' }, { label: 'Arrival', value: '29 May 2026' },
      { label: 'Cold Storage', value: '3.5°C' }, { label: 'FDA Inspection', value: 'Passed — 30 May 2026' },
      { label: 'Customs', value: 'CBP Cleared' }, { label: 'Distribution', value: '2 June 2026' },
    ],
  },
  {
    id: 'distribution', stage: 'Distribution Center', location: 'ALDI DC, Batavia, Illinois', date: '3 June 2026',
    icon: 'warehouse', color: '#E65100', latlng: [41.85, -88.31],
    details: [
      { label: 'Center', value: 'ALDI Distribution — Batavia, IL' }, { label: 'Arrival', value: '3 June 2026' },
      { label: 'Temperature', value: '4°C — Verified' }, { label: 'SKU', value: 'ALDI-MNG-425-MP' },
      { label: 'Pallet ID', value: 'ILL-DC-0447' }, { label: 'Dispatch', value: '4 June 2026' },
    ],
  },
  {
    id: 'aldi', stage: 'ALDI Supermarket', location: 'ALDI, Lakeview, Chicago, IL', date: '5 June 2026',
    icon: 'shopping-cart', color: '#1565C0', latlng: [41.94, -87.65],
    details: [
      { label: 'Store', value: 'ALDI — Lakeview, Chicago' }, { label: 'Shelf Date', value: '5 June 2026' },
      { label: 'Lot Code', value: 'CHI-ALD-0605-MP' }, { label: 'Freshness Score', value: '97 / 100' },
      { label: 'Price', value: '$3.49 / 425g' }, { label: 'Stock', value: 'In Stock — Refrigerated' },
    ],
  },
]

// Route coordinates: Sri Lanka → Indian Ocean → Suez → Mediterranean → Gibraltar → Atlantic → Newark → Chicago
const ROUTE_COORDS: [number, number][] = [
  [7.48, 80.36], [6.93, 79.84],
  [5.0, 75.0], [2.0, 68.0], [8.0, 58.0], [12.0, 45.0], [13.5, 43.0],
  [27.0, 34.0], [30.5, 32.5], [36.0, 14.0], [37.5, -0.5], [36.0, -5.5],
  [34.0, -16.0], [33.0, -35.0], [36.0, -55.0], [39.0, -65.0],
  [40.68, -74.15], [41.85, -88.31], [41.94, -87.65],
]

const CERTIFICATIONS: CertificationDTO[] = [
  { name: 'GlobalG.A.P.', cert: 'GGN 4053633700155', body: 'GlobalG.A.P. e.V.', valid: 'Apr 2027', icon: 'globe', color: '#2E7D32' },
  { name: 'ISO 22000', cert: 'ISO-22K-SL-9921', body: 'Bureau Veritas', valid: 'Aug 2027', icon: 'clipboard-list', color: '#0277BD' },
  { name: 'HACCP', cert: 'HACCP-2026-881', body: 'SGS Lanka', valid: 'Dec 2026', icon: 'shield-check', color: '#7B1FA2' },
  { name: 'BRCGS', cert: 'BRCGS-SL-44291', body: 'BRCGS Global', valid: 'Jun 2027', icon: 'star', color: '#E65100' },
  { name: 'Control Union', cert: 'CU-SL-2026-0331', body: 'Control Union Certifications', valid: 'Nov 2026', icon: 'badge-check', color: '#1565C0' },
]

const FARMERS: FarmerDTO[] = [
  { name: 'Sunil Perera', location: 'Kurunegala', size: '4.5 ac', years: 22, mangoes: 180, photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format' },
  { name: 'Kumari Jayawardena', location: 'Matale', size: '3.2 ac', years: 15, mangoes: 142, photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b5b4?w=120&h=120&fit=crop&auto=format' },
  { name: 'Nimal Fernando', location: 'Polonnaruwa', size: '5.1 ac', years: 30, mangoes: 165, photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&auto=format' },
  { name: 'Priya Dissanayake', location: 'Kurunegala', size: '2.8 ac', years: 18, mangoes: 128, photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&auto=format' },
  { name: 'Asanka Bandara', location: 'Dambulla', size: '3.9 ac', years: 12, mangoes: 110, photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&auto=format' },
  { name: 'Dilhani Wickrama', location: 'Anuradhapura', size: '2.5 ac', years: 9, mangoes: 95, photo: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=120&h=120&fit=crop&auto=format' },
  { name: 'Ruwan Rodrigo', location: 'Polonnaruwa', size: '4.8 ac', years: 25, mangoes: 155, photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&auto=format' },
  { name: 'Sandya Karunaratne', location: 'Matale', size: '3.1 ac', years: 14, mangoes: 120, photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&auto=format' },
  { name: 'Thilak Mendis', location: 'Kurunegala', size: '4.2 ac', years: 20, mangoes: 138, photo: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=120&h=120&fit=crop&auto=format' },
  { name: 'Lakmali Silva', location: 'Dambulla', size: '2.9 ac', years: 7, mangoes: 117, photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&auto=format' },
]

const FAQ_ITEMS: FaqItemDTO[] = [
  { q: 'Where were these mangoes grown?', a: 'Hand-harvested from 10 small family farms across the Kurunegala, Matale, Polonnaruwa, Anuradhapura, and Dambulla districts of Sri Lanka — one of the world\'s finest mango-producing regions with over 2,500 years of cultivation history.' },
  { q: 'How was freshness maintained?', a: 'A continuous cold chain at 4°C was maintained from harvest through delivery. IoT sensors monitored temperature and humidity inside the MSC AURORA shipping container every 30 minutes throughout the 14-day ocean transit.' },
  { q: 'How was the product verified?', a: 'Each batch receives a unique Digital Product Passport anchored on the TerraX blockchain. Scanning the QR code retrieves the tamper-proof record, confirming authenticity, unmodified data, and zero active recalls.' },
  { q: 'What certifications does this product have?', a: 'This product holds GlobalG.A.P., ISO 22000, HACCP, BRCGS, and Control Union certifications — all independently audited and currently valid. Certificate numbers and verifier contacts are listed in the Certifications section.' },
  { q: 'How was quality ensured?', a: 'Quality checks occurred at 7 points: farm harvest inspection, factory intake, post-processing microbiology and heavy metal lab tests, export customs, FDA import inspection, ALDI DC temperature check, and retail shelf audit.' },
]

const GALLERY_ITEMS: GalleryItemDTO[] = [
  { label: 'Farm', url: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=640&h=400&fit=crop&auto=format' },
  { label: 'Harvest', url: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=640&h=400&fit=crop&auto=format' },
  { label: 'Factory', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=640&h=400&fit=crop&auto=format' },
  { label: 'Packaging', url: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=640&h=400&fit=crop&auto=format' },
  { label: 'Shipping', url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=640&h=400&fit=crop&auto=format' },
  { label: 'Warehouse', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&h=400&fit=crop&auto=format' },
  { label: 'ALDI Shelf', url: 'https://images.unsplash.com/photo-1604719312566-8912e9667d9f?w=640&h=400&fit=crop&auto=format' },
]

const HERO_DETAILS: StopDetailDTO[] = [
  { label: 'Batch Number', value: 'MP240517' },
  { label: 'Manufacturing', value: '15 May 2026' },
  { label: 'Best Before', value: '15 May 2028' },
  { label: 'Net Weight', value: '425g' },
  { label: 'Country of Origin', value: 'Sri Lanka' },
  { label: 'Category', value: 'Fruit Puree' },
]

const FARM_DETAILS: StopDetailDTO[] = [
  { label: 'Total Farmers', value: '10' }, { label: 'Districts', value: '5' },
  { label: 'Mango Variety', value: 'Karutha Kolomban' }, { label: 'Avg Farm Size', value: '3.7 Acres' },
  { label: 'Harvest Method', value: 'Hand-picked' }, { label: 'Quality Grade', value: 'Grade A' },
  { label: 'Certification', value: 'GlobalG.A.P.' }, { label: 'Harvest Date', value: '10 May 2026' },
]

const FARM_PRACTICES = [
  'Rain-fed cultivation (no irrigation cost)', 'Zero synthetic pesticides — IPM certified',
  'Biodiversity corridors maintained on all farms', 'Farmers trained in post-harvest handling',
]

const FARM_PHOTOS = [
  'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=200&h=140&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=140&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1518185527227-5b70b6b0b3b0?w=200&h=140&fit=crop&auto=format',
]

const PRODUCTION_ROWS: StopDetailDTO[] = [
  { label: 'Factory', value: 'Ceylon Fresh Processing Ltd.' },
  { label: 'Production Date', value: '12 May 2026' },
  { label: 'Batch Number', value: 'MP240517' },
  { label: 'Production Line', value: 'Line 3 — Aseptic' },
  { label: 'Pasteurization', value: '85°C for 30 seconds' },
  { label: 'Ingredients', value: '100% Mango Puree' },
  { label: 'Additives', value: 'None' },
  { label: 'Food Safety Standard', value: 'HACCP, ISO 22000' },
  { label: 'Lab Clearance', value: 'Microbiology: Clear | Heavy Metals: Clear' },
  { label: 'Operator Sign-off', value: 'Chamara Fernando (Cert. #CF-2891)' },
]

const LOGISTICS_ROWS: StopDetailDTO[] = [
  { label: 'Export Warehouse', value: 'Colombo South Container Terminal' },
  { label: 'Shipping Company', value: 'MSC Mediterranean Shipping Co.' },
  { label: 'Vessel', value: 'MSC AURORA' },
  { label: 'Container Number', value: 'MSCU3847291' },
  { label: 'Departure Port', value: 'Port of Colombo, Sri Lanka' },
  { label: 'Arrival Port', value: 'Port of Newark, USA' },
  { label: 'Transit Duration', value: '14 Days' },
  { label: 'Distance', value: '5,800 km' },
  { label: 'Departure Date', value: '15 May 2026' },
  { label: 'Arrival Date', value: '29 May 2026' },
]

const TEMP_LOG = ['Departure: 4.0°C', 'Day 7: 3.9°C', 'Day 14: 4.1°C', 'Arrival: 4.0°C']
const HUMIDITY_LOG = ['Departure: 64% RH', 'Day 7: 65% RH', 'Day 14: 65% RH', 'Arrival: 64% RH']

const IMPORT_ROWS: StopDetailDTO[] = [
  { label: 'USA Warehouse', value: 'NJ Cold Storage Logistics, Newark' },
  { label: 'Arrival Date', value: '29 May 2026' },
  { label: 'FDA Inspection', value: 'Passed — 30 May 2026' },
  { label: 'CBP Customs', value: 'Cleared — Entry No. CBP-2026-NWK-8832' },
  { label: 'Storage Temp.', value: '3.5°C — Continuous Log' },
  { label: 'Dispatch to DC', value: '2 June 2026' },
  { label: 'Distribution Center', value: 'ALDI DC, Batavia, Illinois' },
  { label: 'ALDI Arrival', value: '3 June 2026' },
  { label: 'Retail Delivery', value: '5 June 2026 — Lakeview, Chicago' },
  { label: 'Retail Lot', value: 'CHI-ALD-0605-MP' },
]

const SUSTAINABILITY_METRICS: SustainabilityMetricDTO[] = [
  { label: 'Carbon Footprint', value: '1.2 kg CO₂e', pct: 76, note: '38% below industry avg', color: '#2E7D32' },
  { label: 'Distance Travelled', value: '5,800 km', pct: 45, note: 'Partially offset', color: '#0277BD' },
  { label: 'Water Usage', value: '42 L/kg', pct: 79, note: 'Rain-fed — low impact', color: '#00838F' },
  { label: 'Renewable Energy Used', value: '78%', pct: 78, note: 'Solar + hydro at factory', color: '#F57F17' },
  { label: 'Local Farmers Supported', value: '10 families', pct: 100, note: '350 livelihoods impacted', color: '#7B1FA2' },
  { label: 'Plastic Reduced', value: '320g / batch', pct: 64, note: 'vs. prev. packaging', color: '#C62828' },
]

const NUTRITION_FACTS: StopDetailDTO[] = [
  { label: 'Energy', value: '60 kcal' }, { label: 'Total Fat', value: '0.4g' },
  { label: 'Saturated Fat', value: '0.1g' }, { label: 'Total Carbohydrates', value: '14g' },
  { label: '— Sugars', value: '13g' }, { label: 'Dietary Fiber', value: '1.6g' },
  { label: 'Protein', value: '0.8g' }, { label: 'Sodium', value: '2mg' },
  { label: 'Vitamin C', value: '36mg (40% DV)' }, { label: 'Vitamin A', value: '765 IU (15% DV)' },
]

const QUALITY_CHECKS: QualityCheckDTO[] = [
  { label: 'Farm Harvest Inspection', date: '10 May 2026', lab: 'On-site, Kurunegala' },
  { label: 'Production Intake Check', date: '12 May 2026', lab: 'Ceylon Fresh QA Dept.' },
  { label: 'Microbiology Lab Test', date: '12 May 2026', lab: 'Ceylon Labs Ltd.' },
  { label: 'Heavy Metal Analysis', date: '12 May 2026', lab: 'Moratuwa University' },
  { label: 'Export Customs Inspection', date: '14 May 2026', lab: 'Sri Lanka Standards Bureau' },
  { label: 'FDA Import Inspection', date: '30 May 2026', lab: 'USFDA — Port of Newark' },
  { label: 'ALDI DC Temperature Check', date: '3 Jun 2026', lab: 'ALDI QA, Batavia, IL' },
]

const PASSPORT_ROWS: StopDetailDTO[] = [
  { label: 'Digital Batch ID', value: 'DPP-2026-SL-MP240517' },
  { label: 'Blockchain Hash', value: '0x4f3a...d8b2' },
  { label: 'GS1 GTIN', value: '9001234567894' },
  { label: 'Issued', value: '15 May 2026, 08:32 UTC' },
  { label: 'Network', value: 'TerraX Chain (EVM Compatible)' },
  { label: 'Status', value: 'Active — No Recalls' },
]

const PASSPORT_TIMELINE: PassportTimelineStepDTO[] = [
  { date: '10 May', event: 'Farm harvest recorded on-chain' },
  { date: '12 May', event: 'Production & lab results anchored' },
  { date: '14 May', event: 'Export customs clearance logged' },
  { date: '15 May', event: 'Shipping container seal verified' },
  { date: '29 May', event: 'FDA import clearance recorded' },
  { date: '5 Jun', event: 'Retail shelf placement confirmed' },
]

@Injectable({ providedIn: 'root' })
export class TraceabilityDataService {
  getQuickStats(): QuickStatDTO[] { return QUICK_STATS }
  getStops(): JourneyStopDTO[] { return STOPS }
  getRouteCoords(): [number, number][] { return ROUTE_COORDS }
  getCertifications(): CertificationDTO[] { return CERTIFICATIONS }
  getFarmers(): FarmerDTO[] { return FARMERS }
  getFaqItems(): FaqItemDTO[] { return FAQ_ITEMS }
  getGalleryItems(): GalleryItemDTO[] { return GALLERY_ITEMS }
  getHeroDetails(): StopDetailDTO[] { return HERO_DETAILS }
  getFarmDetails(): StopDetailDTO[] { return FARM_DETAILS }
  getFarmPractices(): string[] { return FARM_PRACTICES }
  getFarmPhotos(): string[] { return FARM_PHOTOS }
  getProductionRows(): StopDetailDTO[] { return PRODUCTION_ROWS }
  getLogisticsRows(): StopDetailDTO[] { return LOGISTICS_ROWS }
  getTempLog(): string[] { return TEMP_LOG }
  getHumidityLog(): string[] { return HUMIDITY_LOG }
  getImportRows(): StopDetailDTO[] { return IMPORT_ROWS }
  getSustainabilityMetrics(): SustainabilityMetricDTO[] { return SUSTAINABILITY_METRICS }
  getNutritionFacts(): StopDetailDTO[] { return NUTRITION_FACTS }
  getQualityChecks(): QualityCheckDTO[] { return QUALITY_CHECKS }
  getPassportRows(): StopDetailDTO[] { return PASSPORT_ROWS }
  getPassportTimeline(): PassportTimelineStepDTO[] { return PASSPORT_TIMELINE }
}
