# cs-components

> A Vue components

## Build Setup

``` bash
# install dependencies
npm install cs-components
npm install cs-components

# use components
```html
    <wheel :awardLists="awards" @getWard="getWard" :mode="2"></wheel>
```
```Javascript
import {wheel} from 'cs-components'
import 'cs-components/dist/cs-components.min.css'
```
# register
```Javascript
components:{
    wheel
}
```


# parameter
```Javascript
      awards: [
        { 'index': 0, 'name': '小雨' },
        { 'index': 1, 'name': '大雨' },
        { 'index': 2, 'name': '中雨' },
        { 'index': 3, 'name': '阵雨' },
        { 'index': 4, 'name': '阴天' },
        { 'index': 5, 'name': '多云' },
        { 'index': 6, 'name': '晴天' },
        { 'index': 7, 'name': '雷阵雨' }
      ],
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
