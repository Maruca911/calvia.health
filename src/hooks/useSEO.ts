import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
  image?: string;
  ogType?: 'website' | 'article';
}

export function useSEO({
  title,
  description,
  canonical,
  noindex,
  jsonLd,
  image,
  ogType = 'website',
}: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Calvia Health`;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const removeMeta = (name: string, property = false) => {
      const attr = property ? 'property' : 'name';
      const el = document.querySelector(`meta[${attr}="${name}"]`);
      el?.remove();
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('twitter:card', image ? 'summary_large_image' : 'summary');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow');

    const existingCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      let link = existingCanonical;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
      setMeta('og:url', canonical, true);
    } else {
      existingCanonical?.remove();
      removeMeta('og:url', true);
    }

    if (image) {
      setMeta('og:image', image, true);
      setMeta('twitter:image', image);
    } else {
      removeMeta('og:image', true);
      removeMeta('twitter:image');
    }

    const jsonLdId = 'json-ld-seo';
    let script: HTMLScriptElement | null = null;

    if (jsonLd) {
      script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = jsonLdId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else {
      document.getElementById(jsonLdId)?.remove();
    }

    return () => {
      script?.remove();
    };
  }, [title, description, canonical, noindex, jsonLd, image, ogType]);
}
