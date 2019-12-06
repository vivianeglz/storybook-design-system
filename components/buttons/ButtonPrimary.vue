<template functional>
  <button class="btn--primary btn" @click="listeners.click">
    <slot />
  </button>
</template>

<script>
export default {
  name: "ButtonPrimary"
};
</script>


