import { create } from 'zustand'
import type { FormItemSchema, PageSchema } from '../types/schema'

interface FormState {
    schema: PageSchema
    selectedId: string | null

    addComponent: (item: FormItemSchema) => void
    removeComponent: (id: string) => void
    selectComponent: (id: string | null) => void
    updateComponentProps: (id: string, props: any) => void
}

export const useFormStore = create<FormState>((set) => ({
    schema: {
        title: '',
        description: '',
        settings: {
            layout: 'vertical',
            labelCol: 6,
            wrapperCol: 18,
        },
        items: [],
    },
    selectedId: '',

    addComponent: (item) =>
        set((state) => ({
            schema: {
                ...state.schema,
                items: [...state.schema.items, item],
            },
        })),

    removeComponent: (id) => {
        set((state) => ({
            schema: {
                ...state.schema,
                items: state.schema.items.filter((item) => item.id !== id),
            },
            selectedId: state.selectedId === id ? null : state.selectedId,
        }))
    },

    selectComponent: (id) => {
        set({ selectedId: id })
    },

    updateComponentProps: (id, newProps) => {
        set((state) => ({
            schema: {
                ...state.schema,
                items: state.schema.items.map((item) =>
                    item.id === id ? { ...item, ...newProps } : item,
                ),
            },
        }))
    },
}))
