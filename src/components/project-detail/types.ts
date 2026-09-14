import type { NavigationSection } from '../../data/navigation';
/** Shared editorial data; independent of landing pages and viewport composition. */
export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Omit to retain the original, especially for logos, text, and documents. */
  delivery?: {
    widths: number[];
    webpQuality: number;
    /** Supply only after visual approval. */
    avifQuality?: number;
  };
}
export interface ProjectDetailData {
  /** Set when the URL does not sit beneath its owning section. */
  navigationSection?: NavigationSection;
  /** A real internal page URL, not a modal or hash action. */
  href: string;
  client: string;
  logo?: ProjectImage;
  title: string;
  description: string;
  story: string[];
  information: {
    role: string;
    organization: { label: 'Agency' | 'Client' | 'Agency / Client'; value: string };
    recognition: string;
    discipline: string;
  };
  images: ProjectImage[];
  next: {
    href: string;
    title: string;
    image: ProjectImage;
  };
}
