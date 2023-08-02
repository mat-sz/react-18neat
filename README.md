<h1 align="center">react-i18not</h1>

<p align="center">
Minimalist i18n library. (React)
</p>

<p align="center">
<a href="https://npmjs.com/package/react-i18not">
<img alt="npm" src="https://img.shields.io/npm/v/react-i18not">
<img alt="npm" src="https://img.shields.io/npm/dw/react-i18not">
<img alt="NPM" src="https://img.shields.io/npm/l/react-i18not">
</a>
</p>

## Example usage

Make sure to first initalize the library, see [i18not](https://github.com/mat-sz/i18not) for more info.

```tsx
import React from 'react';
import { useTranslation } from 'react-i18not';

export const HelloWorld: React.FC = () => {
  const { t } = useTranslation();

  return <div>{t('hello')}</div>;
};
```
