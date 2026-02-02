import { Input, InputNumber, Select, Checkbox } from 'antd';

// 这里将你的 Schema 类型映射到 AntD 组件
export const ComponentMap: Record<string, any> = {
  input: Input,
  textarea: Input.TextArea,
  number: InputNumber,
  select: Select,
  checkbox: Checkbox,
};