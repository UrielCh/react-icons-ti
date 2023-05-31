# Typicons icons for deno / Preact

**License** [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

**Project** [http://s-ings.com/typicons/](http://s-ings.com/typicons/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=ti)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/ti":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-ti@1.0.1/mod.ts",
    "react-icons/ti/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-ti/ico/",
  }
}
```

## Direct import sample

`import { TiAdjustBrightness } from "https://deno.land/x/react_icons_ti@1.0.1/mod.ts"`

## import_map import sample

`import { TiAdjustBrightness } from "react-icons/ti"`

## minimal import

`import { TiAdjustBrightness } from "react-icons/ti/TiAdjustBrightness.ts"`

## minimal import default

`import TiAdjustBrightness from "react-icons/ti/TiAdjustBrightness.ts"`

