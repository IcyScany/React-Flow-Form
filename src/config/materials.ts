import type { FormItemSchema } from '../types/schema'

export interface MaterialItem extends Omit<FormItemSchema, 'id'> {
    title: string
}

export const Materials: MaterialItem[] = [
    {
        title: '文本输入',
        type: 'input',
        label: '文本输入',
        name: 'input_field',
        placeholder: '请输入内容',
        props: {
            allowClear: true,
        },
    },
    {
        title: '数字输入',
        type: 'number',
        label: '数字输入',
        name: 'number_field',
        props: {
            style: { width: '100%' },
        },
    },
    {
        title: '下拉选择',
        type: 'select',
        label: '下拉选择',
        name: 'select_field',
        props: {
            options: [
                { label: '选项一', value: 'opt1' },
                { label: '选项二', value: 'opt2' },
            ],
            placeholder: '请选择',
            style: { width: '100%' },
        },
    },
    {
        title: '多选框',
        type: 'checkbox',
        label: '多选框',
        name: 'checkbox_field',
        defaultValue: [],
    },
]
