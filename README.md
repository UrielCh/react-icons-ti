# Typicons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/ti)](https://jsr.io/@preact-icons/ti)

**License** [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

**Project** [http://s-ings.com/typicons/](http://s-ings.com/typicons/)

[See available icons here](https://react-icons.deno.dev/ti)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/ti": "jsr:@preact-icons/ti@^1.0.11/mod.ts",
    "react-icons/ti/": "jsr:@preact-icons/ti@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib ti

```ts
import { TiAdjustBrightness } from "jsr:preact-icons/ti@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { TiAdjustBrightness } from "react-icons/ti"
```

## import a single icon, downloading just one icon

```ts
import { TiAdjustBrightness } from "react-icons/ti/TiAdjustBrightness.ts"
```

or using default export

```ts
import TiAdjustBrightness from "react-icons/ti/TiAdjustBrightness.ts"
```

