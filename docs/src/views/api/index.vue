<template>
  <div class="page">
    <aside :class="showMenu ? 'is-show' : ''">
      <nav>
        <ul>
          <template v-for="(item, i) in navItems">
            <li v-if="!item.redirect" :key="i">
              <router-link
                v-if="item.path && item.component"
                :to="'/api/' + item.path"
              >{{ item.title.replace(/^(\w)/, $1 => $1.toUpperCase()) }}</router-link>
              <h3 v-else>{{ item.title.replace(/^(\w)/, $1 => $1.toUpperCase()) }}</h3>
            </li>
          </template>
        </ul>
      </nav>
      <button @click="toggleShowMenu">
        <svg
          viewBox="0 0 1024 1024"
          class
          data-icon="bars"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0zm0 284a56 56 0 1 0 112 0 56 56 0 1 0-112 0z"
          ></path>
        </svg>
      </button>
    </aside>

    <article class="container">
      <router-view class="markdown-body"></router-view>
    </article>
  </div>
</template>


<script>
import navItems from './routes.js';

export default {
  data() {
    return {
      navItems,
      showMenu: false
    };
  },

  methods: {
    toggleShowMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

