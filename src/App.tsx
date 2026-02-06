import FormRenderer from './components/Renderer'
import { Button } from 'antd'
import { useFormState } from './store/useFormState'

const App = () => {
    const { schema, addComponent } = useFormState()

    const handleAdd = () => {
        addComponent({
            id: `input_${Date.now()}`,
            type: 'input',
            label: '新输入框',
            name: `field_${Date.now()}`,
        })
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: 250, borderRight: '1px solid #ddd', padding: 20 }}>
                <Button block onClick={handleAdd}>
                    添加输入框
                </Button>
            </div>

            <div style={{ flex: 1, padding: 40, backgroundColor: '#f5f5f5' }}>
                <div style={{ background: '#fff', padding: 20, minHeight: '100%' }}>
                    <FormRenderer items={schema.items} />
                </div>
            </div>
        </div>
    )
}

export default App
