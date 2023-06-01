import React from "react"
import { RadioGroup } from '@headlessui/react'
import { labels } from "../Config/types"


export const Config = (props: any) => {
  const { config, setConfig } = props

  return (
    <div>
      <RadioGroup value={config} onChange={setConfig}>
        <div className="flex flex-wrap gap-4">
          {labels.map(item => (
            <RadioGroup.Option
              key={item.left + item.right}
              value={item}
              className={({ checked }) => `${checked ? 'bg-indigo-500 text-white' : 'bg-white'} basis-16 relative cursor-pointer rounded-lg px-2 py-2 shadow-md`}>
              {({ checked }) => (
                <>
                  <span className="block text-center">{`${item.left} ${item.right}`}</span>
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