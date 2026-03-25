import React from 'react'
import { Form } from 'antd'
import { ComponentMap } from './componentMap'
import type { FormItemSchema } from '@/types/schema'
import { useFormStore } from '@/store/useFormStore'

interface Props {
    items: FormItemSchema[]
}

const FormRenderer: React.FC<Props> = ({ items }) => {
    const { schema, selectedId, selectComponent } = useFormStore()

    return (
        <Form layout={schema.settings.layout}>
            {items.map((item) => {
                const Component = ComponentMap[item.type]
                if (!Component)
                    return <div key={item.id}>未知的组件类型: {item.type}</div>

                const isSelected = selectedId === item.id

                return (
                    <div
                        key={item.id}
                        onClick={(e) => {
                            e.stopPropagation() // 防止点击事件冒泡到画布背景
                            selectComponent(item.id)
                        }}
                        style={{
                            padding: '10px',
                            marginBottom: '8px',
                            border: isSelected
                                ? '2px solid #1677ff'
                                : '1px dashed transparent',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            backgroundColor: isSelected
                                ? '#e6f4ff'
                                : 'transparent',
                            transition: 'all 0.2s',
                        }}
                    >
                        <Form.Item
                            label={item.label}
                            rules={item.rules}
                            required={item.rules?.some(
                                (r) => (r as any).required,
                            )}
                        >
                            <Component
                                {...item.props}
                                placeholder={item.placeholder}
                                disabled
                            />
                        </Form.Item>
                    </div>
                )
            })}
        </Form>
    )
}

export default FormRenderer
