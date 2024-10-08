import React from 'react';

const LocaleContext = React.createContext<{ locale: string }>({ locale: 'en' });
LocaleContext.displayName = 'LocaleContext';

export default LocaleContext;
