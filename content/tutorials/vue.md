---
title: Vue
description: vue.js and nuxt
img: image1.jpg
alt: Vue and nuxt
updatedAt: 2021-10-25
status: draft

author:
    name: Chrisurf
    bio: All about Chrisurf
    image: avatar.png
---

# 🚀 Vue3 Tutorial

*Following along the [Vue Mastery repo](https://github.com/Code-Pop/Intro-to-Vue-3).*

## Create Vue App

*Folder structure*

```

├── assets
│    └── images
│       └── socks-blue.jpg
├── index.html
└── main.js
```

*Create a vue instance*

```js
// main.js
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks-blue.jpg',
            inStock: true,
        }
    },
    methods: {
        ...
    },
    computed: {
        ...
    },
    components: {
        ...
    },
    created() {}, // lifecycle hook
})
```

*Mount the app with the app id dom element and display the app data.*

```html
<!-- index.html -->
<div id="app">
    <h1>{{ product }}</h1>
</div>

<script src="./main.js"></script>
<script>
    const mountedApp = app.mount("#app");
</script>
```

## Atribute Binding

```html
<img v-bind:src="image" />
```

*equivalent to*

```html
<img :src="image" />
```

## Conditional Rendering

```html
<!-- index.html -->
<p v-if="inventory > 10">In stock</p>
<p v-else-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
<p v-else>Out of stock</p>
```

## List Rendering

```html
<!-- index.html -->
<ul>
    <li v-for="variant in variants" :key="variant.id">{{ variant }}</li>
</ul>
```

```js
// main.js
variants: [
    { id: 2234, color: "green", image: "./assets/images/socks-green.jpg" },
    { id: 2235, color: "blue", image: "./assets/images/socks-blue.jpg" },
];
```

## Event Handling

***Events***

-   `@click`
-   `@mouseover`
-   `@submit`
-   `@keyup`

```js
// main.js
methods: {
    addToCart() {
        this.cart += 1;
    }
}
```

```html
<button class="button" v-on:click="addToCart">Add to Cart</button>
```

*equivalent to*

```html
<button class="button" @click="addToCart">Add to Cart</button>
```

## Class & Style Binding

```html
<!-- index.html -->
<div
    v-for="variant in variants"
    :key="variant.id"
    @mouseover="updateImage(variant.image)"
    class="color-circle"
    :style="{ backgroundColor: variant.color }"
></div>
```

*Ternary Operators*

```html
<div :class="[isActive ? activeClass : '']"></div>
```

*Scoped applies style to component only*

```html
<style scoped>
    .activeClass {
        font-size: 16px;
    }
</style>
```

## Computed Properties

```html
<!-- index.html -->
<h1>{{ title }}</h1>
```

```js
// main.js
computed: {
    title() {
        return this.brand + ' ' + this.product
    }
}
```

## Components & Properties

*Single File Component*

```
├── components
│   └── ProductDisplay.js
```

*Import components*

```html
<!-- index.html -->
<script src="./components/ProductDisplay.js"></script>
```

```js
// ProductDisplay.js
app.component('product-display', {
    props: {
    }
    template:
        /*html*/
        `<H1>Product</H1>`,
    data() {
        return {
        }
    },
    methods: {
    },
    computed: {
    }
})
```

**Properties can be used in the template**

```html
<!-- index.html -->
<product-display :premium="premium"></product-display>
```

```js
// ProductDisplay.js
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
```

## Communicating Events

*Emmitting and event*

```html
<!-- index.html -->
<product-display @add-to-cart="updateCart"></product-display>
```

```js
// ProductDisplay.js
  methods: {
addToCart() {
    this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
},
```

```js
// main.js
data() {
    return {
        cart: [],
    }
},
methods: {
    updateCart(id) {
        this.cart.push(id)
    }
}
```

## Forms & v-model

```
├── components
│   └── ReviewForm.js
```

*Data binding to the model*

```html
<!-- ReviewForm.js -->
<form class="review-form" @submit.prevent="onSubmit">
    <input id="name" v-model="name" />
    <input class="button" type="submit" value="Submit" />
</form>
```

*Emmitting the event*

```js
// ReviewForm.js
data() {
    return {
      name: '',
    }
},
methods: {
    onSubmit() {
        if (this.name === '') {
            alert('Please fill out every field.')
        return
        }
        let productReview = {
            name: this.name,
        }
        this.$emit('review-submitted', productReview)

    }
}
```

## API Calls with Axios

```
├── services
│   └── EventService.js
```

*API service layer*

```js
// EventService.js
import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getEvents() {
        return apiClient.get("/events");
    },
    getEvent(id) {
        return apiClient.get("/events/" + id);
    },
};
```

# Vue Router

```
├── router
│   └── index.js
```

***Receiving the URL parameters***
`https://localhost:80/events/?page=2`

```html
<h1>This is page {{ $route.query.page }}</h1>
<!-- Output: This is page 2 -->
```

`https://localhost:80/events/2`

```js
const routes = [{ path: "/events/:page", component: Events, props: true }];
```

```js
<template>
<h1>This is page {{ page }} </h1>
</template>
// Output: This is page 2

<script>
export default {
    props: ['page']
}
</script>
```

## Nested Routes
*Map actiosn to URLs with a single resource*

# Vuex 
*State Management*

```
├── store
│   └── index.js
├── main.js
```

*Global State*

```js
// main.js
import store from './store';

new Vue({
  ...
  store,
  render: h => h(App)
}).$mount('#app')

```

```js
// index.js
import Vue  from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: "Test data...",
  },
  mutations: {},  // synchronous
  actions: {},    // asynchronous
  getters: {},    // returns data
  modules: {} 
})
```

```html
<!-- Display.vue -->
<template>
<div>
    <h1>{{ data }}</h1>
</div>
</template>
```

```js
// Display.vue
<script>
export default {    
    computed: {
        data() {
          return this.$store.state.data;
        }
    }
  },
<script>
```

*equivalent to*

```js
// Display.vue
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    data: state => state.data
  }),
};
</script>
```

*equivalent to a simpler way*

```js
// Display.vue
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    data: state => `data`
  }),
};
</script>
```

*equivalent to an even simpler way*

```js
// Display.vue
<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['data'])
};
</script>
```

*javascript spread operator*

```js
export default {
  computed: 
    localComputed: {
        return somthing
    },
    ...mapState(['data'])
};
```

```js
export default {
  created() {
    const data = store.state.data;
  }
}
```

# Nuxt
*Meta-framework*

## Lifecycle Hooks

Vue components come with a bunch of stages or lifecycles they can run through.

-   Created
-   Mounted
-   Updated
-   Destroyed

```js
export default {
    created() {
        console.log("Runs when component was created!");
    },
};
```

```js
export default {
    destroyed() {
        console.log("Runs when component was destroyed!");
    },
};
```

## Vue3 Animations

Define the transition name in the component
```html
<div id="animation">
    <button @click="show = !show">Toggle animation</button>

    <transition name="fade">
        <p v-if="show">Fade in and out</p>
    </transition>
</div>
```

A bolean variable to manipulate displaying the element
```js
export default {
    data() {
        return {
            show: true,
        };
    },
};
```

Use the transition name as prefix for the transition class
```css
.fade-item {
    display: inline-block;
    margin-right: 10px;
}
.fade-enter-from {
    opacity: 0;
}
.fade-enter-active {
    transition: all 2s ease;
}
.fade-enter-to {
    opacity: 1;
}
.fade-leave-from {
    opacity: 1;
}
.fade-leave-active {
    transition: all 2s ease;
}
.fade-leave-to {
    opacity: 0;
}
```
