type Mods = Record<string, boolean | string>;
// Record is a special typescript object that will have the key as a string
// and as a value a String or a Boolean value

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}

//example classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg'])
