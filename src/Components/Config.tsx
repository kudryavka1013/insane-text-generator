import React, { useState } from "react"
import { RadioGroup } from '@headlessui/react'

const enum labelType {
  hw = '半',
  fw = '全'
}

const label = [
  { name: '（）', type: labelType.fw },
  { name: '()', type: labelType.hw },
  { name: '[]', type: labelType.hw },
  { name: '{}', type: labelType.hw },
  { name: '<>', type: labelType.hw },
  { name: '【】', type: labelType.fw },
  { name: '《》', type: labelType.fw }]

export const Config = () => {
  const [selected, setSelected] = useState(label[0])
  return (
    <div>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">括号设置</RadioGroup.Label>
        {label.map(item => (
          <RadioGroup.Option
            key={item.name}
            value={item.name}
            className="">
            <span className="block truncate">{item.name}</span>
            <span className="">
              {item.type}
            </span>
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </div >
  )
}