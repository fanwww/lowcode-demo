
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const TextDemoMeta: IPublicTypeComponentMetadata = {
  "componentName": "TextDemo",
  "title": "TextDemo",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "group":"精选组件",
  "category":"自定义组件",
  "npm": {
    "package": "fan-democom",
    "version": "0.1.2",
    "exportName": "TextDemo",
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
            "en-US": "text",
            "zh-CN": "文本"
          }
        },
        "name": "text",
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
    "title": "TextDemo",
    "screenshot": "https://tianshu.alicdn.com/ee09d9f7-9628-44fb-8927-b318d9a61cf5.png",
    "schema": {
      "componentName": "TextDemo",
      "props": {}
    }
  }
];

export default {
  ...TextDemoMeta,
  snippets
};
