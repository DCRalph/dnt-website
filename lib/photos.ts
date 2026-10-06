/**
 * Site photography. Every file in /public/photos is a PLACEHOLDER (free
 * black-and-white stock via picsum.photos) until D&T supply real site and
 * team photography. Replace the file, keep the name, and the site updates.
 */

import type { services as serviceList } from "@/lib/content";
import about from "@/public/photos/about.jpg";
import alliance from "@/public/photos/alliance.jpg";
import community from "@/public/photos/community.jpg";
import contact from "@/public/photos/contact.jpg";
import government from "@/public/photos/government.jpg";
import hero from "@/public/photos/hero.jpg";
import journey from "@/public/photos/journey.jpg";
import maintenance from "@/public/photos/maintenance.jpg";
import reinstatement from "@/public/photos/reinstatement.jpg";
import emergency from "@/public/photos/residential.jpg";
import services from "@/public/photos/services.jpg";

export const photos = {
  hero,
  journey,
  community,
  about,
  alliance,
  government,
  services,
  contact,
};

/* One photo per service, keyed by slug. */
export const servicePhotos: Record<
  (typeof serviceList)[number]["slug"],
  typeof hero
> = { emergency, reinstatement, maintenance };
