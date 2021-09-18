<template>
  <section class="container">
    <div class="wrapper" id="wrapper">
      <router-view v-slot="{ Component }" :key="$route.fullPath">
        <transition appear name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
}
</script>

<style lang="scss" scoped>
.container {
  overflow: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  .wrapper {
    width: 100%;
    height: 100%;
    text-align: left;
  }
}
</style>
