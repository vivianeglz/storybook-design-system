import { storiesOf } from "@storybook/vue";
import { withKnobs, select, object } from "@storybook/addon-knobs";

/* Components */
import Blog from "../../../pages/Blog.vue";

/* Spec */

storiesOf("Pages", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "Blog",
    () => ({
      components: {
        Blog
      },
      template: `
        <blog/>
      `
    }),
    {
      notes: null
    }
  );
