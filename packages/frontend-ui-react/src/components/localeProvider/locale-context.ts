import React from 'react';

const LocaleContext = React.createContext<{ locale: string }>({ locale: 'en' });
LocaleContext.displayName = 'LocaleContext';

export const useLocale = () => {
  const context = React.useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

export const useTranslation = (translations: Record<string, Record<string, string>>) => {
  const { locale } = useLocale();
  return {
    t: (key: string) => translations[locale][key] || key,
    locale,
  };
};

export default LocaleContext;
