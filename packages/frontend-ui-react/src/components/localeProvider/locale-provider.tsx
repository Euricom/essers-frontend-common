import type React from 'react';

import LocaleContext from './locale-context';

export interface Props {
  locale: string;
  children?: React.ReactNode;
}

export const LocaleProvider = ({ locale, children }: Props) => {
  return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>;
};

LocaleProvider.displayName = 'LocaleProvider';

export default LocaleProvider;
