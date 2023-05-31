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
        <input value={input} onChange={onInputChange} type="text" onKeyDown={onKeyUp} placeholder="输入文本，按下回车" />
        <button onClick={onEnter}>生成</button>
      </div>
      <div className="flex">
        <textarea value={textarea} onChange={onTextareaChange} placeholder="输出内容"></textarea>
        <div className="flex-col">
          <button className="block" onClick={onCopy}>复制</button>
          <button className="block" onClick={onClear}>清空</button>
          {/* <button className="block">替换</button> */}
        </div>
      </div>
    </Card>
  )
}