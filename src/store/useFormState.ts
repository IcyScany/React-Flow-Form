import type { FormItemSchema, PageSchema } from '../types/schema'

interface FormState {
    schema: PageSchema
    selectedId: string | null

    addComponent: (item: FormItemSchema) => void
    removeComponent: (id: string) => void
    selectComponent: (id: string | null) => void
    updateComponentProps: (id: string, props: any) => void
}
