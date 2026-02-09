import type { Rule } from 'antd/es/form'

/**
 * 组件类型定义
 * 包含：基础输入类、选择类、以及复杂的布局类
 */
export type ComponentType =
    | 'input'
    | 'textarea'
    | 'number'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'datepicker'
    | 'grid'
    | 'card'

/**
 * 单个表单项的配置协议
 */
export interface FormItemSchema {
    id: string
    type: ComponentType
    label: string
    name: string
    placeholder?: string
    defaultValue?: any

    // 传递给 Ant Design 原生组件的属性
    props?: {
        disabled?: boolean
        allowClear?: boolean
        options?: { label: string; value: any }[]
        span?: number // Grid 布局时占用的栅格数
        gutter?: number // Grid 布局的间距
        [key: string]: any // 扩展属性
    }

    rules?: Rule[]

    // 递归定义：支持布局组件嵌套子组件
    children?: FormItemSchema[]
}

/**
 * 整个页面的 Schema 协议
 */
export interface PageSchema {
    title: string
    description?: string
    settings: {
        // 全局配置
        layout: 'horizontal' | 'vertical' | 'inline'
        labelCol: number
        wrapperCol: number
    }
    items: FormItemSchema[] // 顶层组件列表
}
