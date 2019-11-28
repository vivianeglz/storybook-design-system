import { storiesOf } from "@storybook/vue";
import { withKnobs, select, object } from "@storybook/addon-knobs";

/* Components */
import SegmentListBlockMedia from "../../../segments/SegmentListBlockMedia.vue";

/* Spec */

storiesOf("Organisms", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "List BlockMedia",
    () => ({
      components: {
        SegmentListBlockMedia
      },
      props: {
        size: {
          default: select("Size", { Default: "", Small: "small" })
        },
        items: {
          default: object("Items", [
            {
              title: "I'm a H2",
              text:
                "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph",
              imageUrl: ""
            },
            {
              title: "I'm a H2",
              text:
                "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph",
              imageUrl: ""
            },
            {
              title: "I'm a H2",
              text:
                "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph",
              imageUrl: ""
            },
            {
              title: "I'm a H2",
              text:
                "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph",
              imageUrl: ""
            }
          ])
        }
      },
      template: `
        <segment-list-block-media :size="size" :items="items"/>
      `
    }),
    {
      notes: null
    }
  );
