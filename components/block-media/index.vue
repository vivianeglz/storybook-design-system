<template>
  <a :href="href" class="block-media" :class="className">
    <image-square
      :imageUrl="imageUrl ? imageUrl : undefined"
      :altText="altText"
    />
    <div class="block-media__content">
      <slot />
    </div>
  </a>
</template>

<script>
import ImageSquare from "../medias/ImageSquare";

export default {
  name: "BlockMedia",
  components: {
    ImageSquare
  },
  props: {
    imageUrl: {
      type: String
    },
    altText: {
      type: String
    },
    size: {
      type: String
    },
    href: {
      type: String,
      default: "#"
    }
  },
  computed: {
    className() {
      return this.size === "small" ? "block-media--s" : "";
    }
  }
};
</script>
