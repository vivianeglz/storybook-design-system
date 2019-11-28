<template functional>
  <img class="img--square" :src="props.imageUrl" :alt="props.altText" />
</template>

<script>
import imageDefault from "../../images/200x200.jpg";
export default {
  name: "ImageSquare",
  props: {
    imageUrl: {
      type: String,
      default() {
        return imageDefault;
      }
    },
    altText: {
      type: String,
      default: ""
    }
  }
};
</script>
