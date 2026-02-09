import { Form, Input, Switch, Empty, message } from 'antd'
import { useFormStore } from '../../store/useFormStore'
import { useEffect } from 'react'

const SettingsPanel: React.FC = () => {
    const { schema, selectedId, updateComponentProps } = useFormStore()
    const [form] = Form.useForm()

    const selectedComponent = schema.items.find(
        (item) => item.id === selectedId,
    )

    useEffect(() => {
        if (selectedComponent) {
            form.setFieldsValue({
                label: selectedComponent.label,
                name: selectedComponent.name,
                placeholder: selectedComponent.placeholder,
                required:
                    selectedComponent.rules?.some((r: any) => r.required) ||
                    false,
            })
        }
    }, [selectedId, selectedComponent, form])

    if (!selectedId || !selectedComponent) {
        return (
            <div style={{ padding: 20 }}>
                <Empty description="请先在画布中选择组件" />
            </div>
        )
    }

    const handleValuesChange = (_: any, allValues: any) => {
        const { required, ...rest } = allValues

        const updatedData = {
            ...rest,
            rules: required
                ? [
                      {
                          required: true,
                          message: `${rest.label || '此项'}是必填项`,
                      },
                  ]
                : [],
        }

        updateComponentProps(selectedId, updatedData)
    }

    return (
        <div style={{ padding: 20 }}>
            <h3>组件配置</h3>
            <Form
                form={form}
                layout="vertical"
                onValuesChange={handleValuesChange}
            >
                <Form.Item label="字段标签 (Label)" name="label">
                    <Input />
                </Form.Item>
                <Form.Item label="变量名 (Name)" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="占位提示 (Placeholder)" name="placeholder">
                    <Input />
                </Form.Item>
                <Form.Item
                    label="是否必填"
                    name="required"
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>
            </Form>
        </div>
    )
}

export default SettingsPanel
