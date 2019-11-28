import { storiesOf } from "@storybook/vue";
import { withKnobs, select, object } from "@storybook/addon-knobs";

/* Components */
import SegmentListBlockMedia from "../../../segments/SegmentListBlockMedia.vue";

/* Spec */

storiesOf("Templates", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "Blog",
    () => ({
      components: {
        SegmentListBlockMedia
      },
      data() {
        return {
          items: [
            {
              title: "I'm a H2",
              text:
                "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph"
            },
            {
              title: "I'm a H2",
              text:
                "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph"
            },
            {
              title: "I'm a H2",
              text:
                "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph"
            },
            {
              title: "I'm a H2",
              text:
                "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph"
            }
          ],
          itemsSmall: [
            {
              title: "I'm a H3",
              text: "I'm a short paragraph"
            },
            {
              title: "I'm a H3",
              text: "I'm a short paragraph"
            },
            {
              title: "I'm a H3",
              text: "I'm a short paragraph"
            },
            {
              title: "I'm a H3",
              text: "I'm a short paragraph"
            }
          ]
        };
      },
      template: `
      <section>
      <header>
        <h1>I'm a H1</h1>
      </header>
      <segment-list-block-media :items="items" />
      <segment-list-block-media :items="itemsSmall" size="small" />
    </section>
      `
    }),
    {
      notes: null
    }
  );
