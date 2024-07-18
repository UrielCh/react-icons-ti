# Typicons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/ti)](https://jsr.io/@preact-icons/ti)

**License** [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

**Project** [http://s-ings.com/typicons/](http://s-ings.com/typicons/)

[See available icons here](https://react-icons.deno.dev/ti)

## install the module

```bash
deno add @preact-icons/ti
dnpx jsr add @preact-icons/ti
pnpm dlx jsr add @preact-icons/ti
bunx jsr add @preact-icons/ti
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { TiAdjustBrightness } from "@preact-icons/ti"
```

## import a single icon, downloading just one icon

```ts
import { TiAdjustBrightness } from "react-icons/ti/TiAdjustBrightness"
```

or using default export

```ts
import TiAdjustBrightness from "react-icons/ti/TiAdjustBrightness.ts"
```
