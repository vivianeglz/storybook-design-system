<template functional>
  <button class="btn--primary btn" @click="listeners.click">{{props.title}}</button>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    title: {
      type: String,
      default: "Primary"
    }
  }
};
</script>


