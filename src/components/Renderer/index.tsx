import React from 'react'
import { Form } from 'antd'
import { ComponentMap } from './componentMap'
import type { FormItemSchema } from '../../types/schema'

interface Props {
    items: FormItemSchema[]
}

const FormRenderer: React.FC<Props> = ({ items }) => {
    return (
        <Form layout="vertical">
            {items.map((item) => {
                // 1. 从映射表中找到对应的 AntD 组件
                const Component = ComponentMap[item.type]

                if (!Component) return <div key={item.id}>未知的组件类型: {item.type}</div>

                // 2. 渲染 Form.Item 包装器（处理 Label 和 校验）
                return (
                    <Form.Item key={item.id} label={item.label} name={item.name} rules={item.rules}>
                        {/* 3. 渲染具体的 AntD 组件，并将 props 透传进去 */}
                        <Component {...item.props} placeholder={item.placeholder} />
                    </Form.Item>
                )
            })}
        </Form>
    )
}

export default FormRenderer
