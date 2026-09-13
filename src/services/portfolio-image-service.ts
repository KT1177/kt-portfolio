import sharpService from 'astro/assets/services/sharp';
import type { LocalImageService } from 'astro';

// This document-only exception does not change any photographic encoder settings.
const certificateSource = 'https://pub-e185fd1db9bf4dd59d2b99be455217bd.r2.dev/smart-city/ada-sapolin.png';
const service: LocalImageService = {
  ...sharpService,
  async transform(input, options, config, logger) {
    if (options.src === certificateSource && options.format === 'webp') {
      return sharpService.transform(input, options, {
        ...config,
        service: { ...config.service, config: {
          ...config.service.config,
          webp: { ...config.service.config.webp, lossless: true, effort: 6 },
        } },
      }, logger);
    }
    return sharpService.transform(input, options, config, logger);
  },
};
export default service;
