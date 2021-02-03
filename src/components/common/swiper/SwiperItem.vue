<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    count: 0
  },
};
</script>
<style>
.slide {
  width: 100%;
  flex-shrink: 0;
}
.slide img {
  width: 100%;
}
</style>
