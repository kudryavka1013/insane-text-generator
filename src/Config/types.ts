export const enum labelType {
  hw = '半',
  fw = '全'
}

export const labels = [
  { name: '（ ）', type: labelType.fw },
  { name: '( )', type: labelType.hw },
  { name: '[ ]', type: labelType.hw },
  { name: '{ }', type: labelType.hw },
  { name: '< >', type: labelType.hw },
  { name: '【 】', type: labelType.fw },
  { name: '《 》', type: labelType.fw }]