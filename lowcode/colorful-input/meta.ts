
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const ColorfulInputMeta: IPublicTypeComponentMetadata = {
  "componentName": "ColorfulInput",
  "title": "ColorfulInput",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group":"精选组件",
  "category":"自定义组件",
  "npm": {
    "package": "fan-democom",
    "version": "0.1.2",
    "exportName": "ColorfulInput",
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
            "en-US": "color",
            "zh-CN": "背景色"
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
            "en-US": "value",
            "zh-CN": "value"
          }
        },
        "name": "value",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "style",
            "zh-CN": "style"
          }
        },
        "name": "style",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "StringSetter",
                "isRequired": false,
                "initialValue": ""
              }
            }
          },
          "initialValue": {}
        }
      }
    ],
    "supports": {},
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "ColorfulInput",
    "screenshot": "https://tianshu.alicdn.com/19307bb5-2881-44ad-82d3-f92e2f44aabb.png",
    "schema": {
      "componentName": "ColorfulInput",
      "props": {}
    }
  }
];

export default {
  ...ColorfulInputMeta,
  snippets
};
