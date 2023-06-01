import React, { useState } from "react"
import { Card } from "./Card"
import { Config } from "./Config"
import { CheckIcon } from '@heroicons/react/20/solid'

export const Editor = (props: any) => {
  const [input, setInput] = useState<string>('')
  const [textarea, setTextarea] = useState<string>('')
  const { config, setConfig } = props
  const onEnter = () => {
    setTextarea(textarea + input)
    setInput('')
  }

  const onKeyUp = (e: any) => {
    if (e.code === 'Enter' || e.key === 'Enter' || e.keyCode === 13) {
      setTextarea(textarea + config.left + input + config.right)
      setInput('')
    }
  }

  const onInputChange = (e: any) => {
    setInput(e.target.value)
  }

  const onTextareaChange = (e: any) => {
    setTextarea(e.target.value)
  }

  const onClear = () => {
    setTextarea('')
  }

  const onCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(textarea);
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Card>
      <Config config={config} setConfig={setConfig} />
      <div className="flex mt-8 mb-4 gap-4">
        <input
          value={input}
          onChange={onInputChange}
          type="text"
          onKeyDown={onKeyUp}
          autoFocus
          placeholder="输入文本，按下回车"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out selection:bg-sky-900/75 selection:text-white" />
        <button className="shrink-0 inline-block w-16 py-2 px-3 hover:bg-indigo-600 bg-indigo-500 text-white text-sm font-semibold rounded-md transition-colors duration-100 ease-in-out shadow focus:outline-none" onClick={onEnter}>生成</button>
      </div>
      <div className="flex gap-4">
        <textarea
          value={textarea}
          onChange={onTextareaChange}
          placeholder="输出内容"
          rows={4}
          className="min-h-[6rem] w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out selection:bg-sky-900/75 selection:text-white"></textarea>
        <div className="flex-col shrink-0">
          <button className="relative group hover:bg-indigo-600 mb-4 block w-16 py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none transition-colors duration-100 ease-in-out" onClick={onCopy}>
            <div className="group-active:duration-0 group-active:delay-0 group-active:opacity-0 opacity-100 duration-500 delay-1000 ease-in" >
              复制
            </div>
            <CheckIcon className="absolute m-auto w-8 left-0 right-0 top-0 bottom-0 group-active:duration-0 group-active:delay-0 group-active:opacity-100 opacity-0 duration-500 delay-1000 ease-in" />
          </button>
          <button className="hover:bg-indigo-600 block w-16 py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow transition-colors duration-100 ease-in-out focus:outline-none" onClick={onClear}>清空</button>
          {/* <button className="block">替换</button> */}
        </div>
      </div>
    </Card>
  )
}