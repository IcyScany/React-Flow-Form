import FormRenderer from './components/Renderer'
import SettingsPanel from './components/Settings'
import { Button, Layout, Space } from 'antd'
import { useFormStore } from './store/useFormStore'
import { Materials } from './config/materials'
import { nanoid } from 'nanoid'

const App = () => {
    const { schema, addComponent, selectComponent } = useFormStore()

    const handleAddMaterial = (material: any) => {
        const uniqueId = nanoid(8)
        addComponent({
            ...material,
            id: uniqueId,
            name: `${material.type}_${uniqueId}`,
        })
    }

    return (
        <Layout style={{ height: '100vh' }}>
            <Layout.Sider
                width={250}
                theme="light"
                style={{ borderRight: '1px solid #eee', padding: 16 }}
            >
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
            </Layout.Sider>

            <Layout.Content
                style={{
                    padding: 24,
                    backgroundColor: '#f0f2f5',
                    overflowY: 'auto',
                }}
                onClick={() => selectComponent(null)}
            >
                <div
                    style={{
                        background: '#fff',
                        padding: 24,
                        minHeight: '100%',
                        borderRadius: 4,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}
                >
                    <FormRenderer items={schema.items} />
                </div>
            </Layout.Content>

            <Layout.Sider
                width={300}
                theme="light"
                style={{ borderLeft: '1px solid #eee' }}
            >
                <SettingsPanel />
            </Layout.Sider>
        </Layout>
    )
}

export default App
