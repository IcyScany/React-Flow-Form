import FormRenderer from './components/Renderer'
import { Button, Space } from 'antd'
import { useFormState } from './store/useFormState'
import { Materials } from './config/materials'
import { nanoid } from 'nanoid'

const App = () => {
    const { schema, addComponent } = useFormState()

    const handleAddMaterial = (material: any) => {
        const uniqueId = nanoid(8)
        addComponent({
            ...material,
            id: uniqueId,
            name: `${material.type}_${uniqueId}`,
        })
    }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div className={'left-panel'}>
                <h3>组件库</h3>
                <Space orientation="vertical" style={{ width: '100%' }}>
                    {Materials.map((m) => (
                        <Button
                            key={m.type}
                            block
                            onClick={() => handleAddMaterial(m)}
                        >
                            {m.title}
                        </Button>
                    ))}
                </Space>
            </div>

            <div style={{ flex: 1, padding: 40, backgroundColor: '#f5f5f5' }}>
                <div
                    style={{
                        background: '#fff',
                        padding: 20,
                        minHeight: '100%',
                    }}
                >
                    <FormRenderer items={schema.items} />
                </div>
            </div>
        </div>
    )
}

export default App
