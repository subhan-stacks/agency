import { useEffect } from 'react';
import { site } from '../data/site.js';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${site.name}`
      : `${site.name} | Digital Transformation & Software Agency`;
  }, [title]);
}
