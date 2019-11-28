<template functional>
  <div>
    <span class="sg-swatch" :style="`background: ${props.colorHex}`"></span>
    <span class="sg-label">
      {{ props.colorName }} <br />
      {{ props.colorHex }}
    </span>
  </div>
</template>

<script>
export default {
  name: "ColorItem",
  props: {
    colorHex: {
      type: String
    },
    colorName: {
      type: String
    }
  }
};
</script>
