
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ColorfulButtonMeta: IPublicTypeComponentMetadata = {
  "componentName": "ColorfulButton",
  "title": "ColorfulButton",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group":"精选组件",
  "category":"自定义组件",
  "npm": {
    "package": "fan-democom",
    "version": "0.1.3",
    "exportName": "ColorfulButton",
    "main": "src\\index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "type",
            "zh-CN": "类型"
          },
          "tip": "type | 类型"
        },
        "name": "type",
        "description": "类型",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "dataSource": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ],
            "options": [
              {
                "label": "primary",
                "value": "primary"
              },
              {
                "label": "secondary",
                "value": "secondary"
              },
              {
                "label": "normal",
                "value": "normal"
              }
            ]
          },
          "initialValue": "primary"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "颜色"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "ColorSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "size",
            "zh-CN": "尺寸"
          }
        },
        "name": "size",
        "setter": {
          "componentName": "RadioGroupSetter",
          "props": {
            "options": [
              {
                "label": "normal",
                "value": "normal"
              },
              {
                "label": "medium",
                "value": "medium"
              },
              {
                "label": "small",
                "value": "small"
              }
            ]
          },
          "initialValue": "normal"
        }
      },{
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "content",
            "zh-CN": "内容"
          }
        },
        "name": "content",
        "setter": {
          "componentName": 'ContentSetter',
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ColorfulButton",
    "screenshot": "https://tianshu.alicdn.com/19307bb5-2881-44ad-82d3-f92e2f44aabb.png",
    "schema": {
      "componentName": "ColorfulButton",
      "props": {
        color:"#f0f",
        content:'默认文本'
      }
    }
  }
];

export default {
  ...ColorfulButtonMeta,
  snippets
};
