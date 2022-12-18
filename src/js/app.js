export const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export const sortingRules = ['name', 'level'];

export default function orderByProps(object, rule) {
  let objectKeys = [];

  for (const item in object) {
    if (object.hasOwnProperty.call(object, item)) {
      if (rule.includes(item) === false) {
        objectKeys.push(item);
      }
    }
  }

  objectKeys = [...rule, ...objectKeys.sort()];

  const result = [];

  for (const key of objectKeys) {
    result.push({ key, value: object[key] });
  }
  return result;
}
