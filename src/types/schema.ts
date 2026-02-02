import type { Rule } from 'antd/es/form';

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
  | 'grid'   // 布局组件：栅格
  | 'card';  // 布局组件：卡片

/**
 * 单个表单项的配置协议
 */
export interface FormItemSchema {
  id: string;             // 唯一标识（建议拖入时自动生成 nanoid）
  type: ComponentType;    // 组件类型
  label: string;          // 表单项标签
  name: string;           // 提交给后端的字段 Key
  placeholder?: string;   // 占位提示
  defaultValue?: any;     // 默认值
  
  // 传递给 Ant Design 原生组件的属性
  props?: {
    disabled?: boolean;
    allowClear?: boolean;
    options?: { label: string; value: any }[]; // Select, Radio 用的选项
    span?: number;                             // Grid 布局时占用的栅格数
    gutter?: number;                           // Grid 布局的间距
    [key: string]: any;                        // 扩展属性
  };

  // 校验规则（直接对应 AntD Form.Item 的 rules）
  rules?: Rule[];

  // 递归定义：支持布局组件嵌套子组件
  children?: FormItemSchema[];
}

/**
 * 整个页面的 Schema 协议
 */
export interface PageSchema {
  title: string;          // 表单标题
  description?: string;   // 表单描述
  settings: {             // 全局配置
    layout: 'horizontal' | 'vertical' | 'inline';
    labelCol: number;
    wrapperCol: number;
  };
  items: FormItemSchema[]; // 顶层组件列表
}