export function getClassNames(styles: Record<string, string>, ...classNames: string[]) {
  /*
  Returns a string of class names separated by a space.

  @param styles - object with class names as keys and values as class names.
    Example: { 'class-firstName': 'class-name__hash' }
    This is usually the result of importing a css module from file like this: fileName.module.css
  @param classNames - array of class names, where each class firstName is a key from the styles object.
   */
  return classNames.map((name) => styles[name]).join(' ');
}
