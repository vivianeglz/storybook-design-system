<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <block-media :size="size" :imageUrl="item.imageUrl">
        <h3 v-if="size === 'small'">{{ item.title }}</h3>
        <h2 v-else>{{ item.title }}</h2>
        <p>{{ item.text }}</p>
      </block-media>
    </li>
  </ul>
</template>

<script>
import BlockMedia from "../components/block-media";
import ImageDefault from "../images/200x200.jpg";
export default {
  name: "SegmentListBlockMedia",
  components: {
    BlockMedia
  },
  props: {
    size: {
      type: String
    },
    items: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
