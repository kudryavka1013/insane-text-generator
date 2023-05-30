import React, { useEffect, useState } from "react"
import { RadioGroup } from '@headlessui/react'
import { labels } from "../Config/types"


export const Config = () => {
  const [selected, setSelected] = useState(labels[0])

  useEffect(() => {
    // set global state 
  }, [selected])

  return (
    <div>
      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">括号设置</RadioGroup.Label>
        <div className="flex flex-wrap gap-4">
          {labels.map(item => (
            <RadioGroup.Option
              key={item.name}
              value={item}
              className={({ checked }) => `${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'} basis-16 relative cursor-pointer rounded-lg px-2 py-2 shadow-md`}>
              {({ checked }) => (
                <>
                  <span className="block text-center">{item.name}</span>
                  <div className={`${checked ? 'text-slate-50' : 'text-slate-400'} absolute right-0.5 bottom-0.5 text-xs font-light`}>
                    {item.type}
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}