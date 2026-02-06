import { useState } from 'react'
import FormRenderer from './components/Renderer'
import type { FormItemSchema } from './types/schema'
import { Button } from 'antd'

const App = () => {
    // 模拟 Store 中的数据
    const [schemaItems, setSchemaItems] = useState<FormItemSchema[]>([
        {
            id: '1',
            type: 'input',
            label: '用户名',
            name: 'username',
            placeholder: '请输入用户名',
        },
    ])

    // 模拟“拖拽添加”动作
    const addField = () => {
        const newItem: FormItemSchema = {
            id: Date.now().toString(), // 临时用时间戳做 ID
            type: 'select',
            label: '性别',
            name: 'gender',
            props: {
                options: [
                    { label: '男', value: 'male' },
                    { label: '女', value: 'female' },
                ],
                style: { width: '100%' },
            },
        }
        setSchemaItems([...schemaItems, newItem])
    }

    return (
        <div style={{ padding: 40, display: 'flex', gap: 40 }}>
            {/* 左侧：模拟物料区 */}
            <div style={{ width: 200, borderRight: '1px solid #eee' }}>
                <Button onClick={addField}>模拟：添加性别下拉框</Button>
            </div>

            {/* 中间：画布区域（渲染引擎展示处） */}
            <div style={{ flex: 1 }}>
                <h2>表单预览区域</h2>
                <FormRenderer items={schemaItems} />
            </div>
        </div>
    )
}

export default App
