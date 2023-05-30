export const enum LabelType {
  hw = '半',
  fw = '全'
}

export const labels: { name: string, type: LabelType }[] = [
  { name: '（ ）', type: LabelType.fw },
  { name: '( )', type: LabelType.hw },
  { name: '[ ]', type: LabelType.hw },
  { name: '{ }', type: LabelType.hw },
  { name: '< >', type: LabelType.hw },
  { name: '【 】', type: LabelType.fw },
  { name: '《 》', type: LabelType.fw }
]

export const commonWords: string[] = []