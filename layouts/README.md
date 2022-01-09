# React Component Builder > JSON Data Structure

JSON data structure is used to render components in the app. `Content` and `Children` are two main properties in the JSON objects. `Children` property is optional whereas `Content` is required.

- `Content` property has JSON object as the value. It should have the following properties.

    - `type` - Required property
    - `props` - Optional property
&nbsp;\
&nbsp;

- `Children` property has JSON object as the value. It should have the component object as a value that consists of `Content` and `Children`.

## type

Following are the supported values for `type` property:

- [H1Component](#h1component)
- [H2Component](#h2component)
- [ParagraphComponent](#paragraphcomponent)
- [ListComponent](#listcomponent)
- [ButtonComponent](#buttoncomponent)
- [LinkComponent](#linkcomponent)
- [BoxComponent](#boxcomponent)
- [ModalComponent](#modalcomponent)

Continue reading to know about the component and supported JSON data structure.

### H1Component

```
"Content": {
    "type": "H1Component",
    "props": {
        "text": "---text goes here---"
    }
}

```
`text` property is required for H1Component to be rendered. It accepts a non-empty string as a value.

### H2Component

```
"Content": {
    "type": "H2Component",
    "props": {
        "text": "---text goes here---"
    }
}

```
`text` property is required for H2Component to be rendered. It accepts a non-empty string as a value.

### ParagraphComponent

```
"Content": {
    "type": "ParagraphComponent",
    "props": {
        "text": "---text goes here---"
    }
}

```
`text` property is required for ParagraphComponent to be rendered. It accepts a non-empty string as a value.

### ListComponent

```
"Content": {
    "type": "ListComponent",
    "props": {
        "li": "[---text1---, ---text2---]"
    }
}

```
`li` property is required for ListComponent to be rendered. It accepts an array of non-empty strings as a value.

### ButtonComponent

```
"Content": {
    "type": "ButtonComponent",
    "props": {
        "text": "---text goes here---",
        "onClickModal": "---ID OF MODAL---"
    }
}

```
`text` property is required for ButtonComponent to be rendered. It accepts a non-empty string as a value.\
`onClickModal` property is optional for ButtonComponent. It accepts a non-empty string as a value. It has a reference to the modal which will be opened when the button is clicked. 

### LinkComponent

```
"Content": {
    "type": "LinkComponent",
    "props": {
        "url": "---valid HTTP or HTTPS url---",
        "text": "---text goes here---",
        "onClickModal": "---ID OF MODAL---"
    }
}

```
`url` property is optional for LinkComponent to be rendered. It accepts a non-empty string as a value. This should be a valid URL containing HTTP or HTTPS.\
`text` property is required for LinkComponent to be rendered. It accepts a non-empty string as a value.\
`onClickModal` property is optional for LinkComponent. It accepts a non-empty string as a value. It has a reference to the modal which will be opened when the link is clicked.

### BoxComponent

```
"Content": {
    "type": "BoxComponent",
    "props": {
        "borderSize": "2px"
    }
},
"Children": {
    "Headline": {
        "Content": {
            "type": "H1Component",
            "props": {
                "text": "---text goes here---"
            }
        }
    },
    "SecondHeadline": {
        "Content": {
            "type": "H2Component",
            "props": {
                "text": "---text goes here---"
            }
        }
    }
}
```

`borderSize` property is optional for BoxComponent to be rendered. It has default value is 1px. It accepts a non-empty string as a value.\
`Children` property should have a valid component object as a value. The above example will have `H1Component` and `H2Component` as children.

### ModalComponent

```
"Content": {
    "type": "ModalComponent",
    "props": {
        "isOpen": true,
        "width": "500px",
        "height": "400px"
    }
},
"Children": {
    "Headline": {
        "Content": {
            "type": "H1Component",
            "props": {
                "text": "---text goes here---"
            }
        }
    },
    "SecondHeadline": {
        "Content": {
            "type": "H2Component",
            "props": {
                "text": "---text goes here---"
            }
        }
    }
}
```

`isOpen` property is required for ModalComponent to be rendered. It accepts a true or false as a value.\
`width` property is optional for ModalComponent to be rendered. It has a default value is 500px. It accepts non-empty string as a value.\
`height` property is optional for ModalComponent to be rendered. It has a default value is 500px. It accepts non-empty string as a value.\
`Children` property should have a valid component object as a value. The above example will have `H1Component` and `H2Component` as children.

## JSON Examples

- [data.json](data.json)
- [data2.json](data2.json)
- [data3.json](data3.json)
- [data4.json](data4.json)