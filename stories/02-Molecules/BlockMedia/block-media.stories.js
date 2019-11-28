import { storiesOf } from "@storybook/vue";
import { withKnobs, select, text, files } from "@storybook/addon-knobs";

/* Components */
import BlockMedia from "../../../components/block-media/index.vue";

/* Spec */
import SpecBlock from "./spec.block-media.md";

storiesOf("Molecules", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "BlockMedia",
    () => ({
      components: {
        BlockMedia
      },
      props: {
        size: {
          default: select("Size", { Default: "", Small: "small" })
        },
        title: {
          default: text("Title", "I'm a H2")
        },
        alt: {
          default: text("Alt Image text", "")
        },
        file: {
          default: files("Image", [".jpg", ".png"], [])
        },
        href: {
          default: text("Lien", "#")
        },
        text: {
          default: text(
            "Text",
            "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph"
          )
        }
      },
      template: `
        <block-media :size="size" :imageUrl="file[0] ? file[0] : undefined" :altText="alt" :href="href">
          <h3 v-if="size === 'small'">{{ title }}</h3>
          <h2 v-else>{{ title }}</h2>
          <p>{{text}}</p>
        </block-media>
      `
    }),
    {
      notes: SpecBlock
    }
  );
