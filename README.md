# Typicons icons for deno / Preact

**License** [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

**Project** [http://s-ings.com/typicons/](http://s-ings.com/typicons/)

[See available icons here](https://react-icons.deno.dev/ti)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/ti":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-ti@1.0.9/mod.ts",
    "react-icons/ti/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-ti@1.0.9/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib ti

```ts
import { TiAdjustBrightness } from "https://deno.land/x/react_icons_ti@1.0.9/mod.ts"
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

