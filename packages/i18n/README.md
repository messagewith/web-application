# `@messagewith/i18n`

Messagewith internationalization library

## Example of usage

For first wrap parent in `I18nProvider`.

```tsx
import React from 'react';
import {I18nProvider} from "@messagewith/i18n";
import AnotherComponent from './AnotherComponent';

const Parent: FC = () => (
    <I18nProvider>
        <AnotherComponent />
    </I18nProvider>
);

export default Parent;

```

You can then use hook `useTranslation()` in any component that is lower in the tree.

```tsx
/* AnotherComponent.tsx */

import React, { FC } from 'react';
import { useTranslation } from "@messagewith/i18n";

const AnotherComponent: FC = () => {
    const { text, changeLanguage, isoCode } = useTranslation();
    
    return (
        <div>
            {text("headings.slogan")}
        </div>
    )
}
```

## API

> TODO

## License
This package is distributed under the [GPL-3.0 License](https://github.com/messagewith/messagewith/blob/main/LICENSE).