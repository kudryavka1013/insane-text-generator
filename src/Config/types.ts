export const enum LabelType {
  hw = '半',
  fw = '全'
}

export interface Label {
  left: string
  right: string
  type?: LabelType
}

export const labels: Label[] = [
  { left: '（', right: '）', type: LabelType.fw },
  { left: '(', right: ')', type: LabelType.hw },
  { left: '[', right: ']', type: LabelType.hw },
  { left: '{', right: '}', type: LabelType.hw },
  { left: '<', right: '>', type: LabelType.hw },
  { left: '【', right: '】', type: LabelType.fw },
  { left: '《', right: '》', type: LabelType.fw },
  { left: '“', right: '”', type: LabelType.fw },
  { left: '"', right: '"', type: LabelType.hw },
  { left: '†', right: '†' },
  { left: '⏚', right: '⏚' }
]

export const commonWords: string[] = []