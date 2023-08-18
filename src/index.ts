import {
  TranslationFn,
  getDir,
  getLanguage,
  getNamespace,
  getOptions,
  load,
  t,
} from 'i18not';

export function useTranslation(ns?: string | string[]): {
  t: TranslationFn;
  language: string;
  dir: 'ltr' | 'rtl';
} {
  const options = getOptions();
  const promises: Promise<void>[] = [];
  const namespaces = ns ? (Array.isArray(ns) ? [...ns] : [ns]) : [];
  namespaces.push(options.defaultNS);

  for (const namespace of namespaces) {
    if (typeof getNamespace(namespace) === 'undefined') {
      promises.push(load(namespace));
    }
  }

  if (promises.length > 0) {
    throw Promise.all(promises);
  }

  return {
    t,
    language: getLanguage(),
    dir: getDir(),
  };
}
