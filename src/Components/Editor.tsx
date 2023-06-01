import React, { useState } from "react"
import { Card } from "./Card"
import { Config } from "./Config"

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

  const onCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textarea);
    }
  }

  return (
    <Card>
      <Config config={config} setConfig={setConfig} />
      <div className="flex mt-8 mb-4">
        <input
          value={input}
          onChange={onInputChange}
          type="text"
          onKeyDown={onKeyUp}
          placeholder="输入文本，按下回车"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out selection:bg-sky-900/75 selection:text-white" />
        <button className="inline-block w-16" onClick={onEnter}>生成</button>
      </div>
      <div className="flex">
        <textarea
          value={textarea}
          onChange={onTextareaChange}
          placeholder="输出内容"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out selection:bg-sky-900/75 selection:text-white"></textarea>
        <div className="flex-col">
          <button className="block w-16" onClick={onCopy}>复制</button>
          <button className="block w-16" onClick={onClear}>清空</button>
          {/* <button className="block">替换</button> */}
        </div>
      </div>
    </Card>
  )
}