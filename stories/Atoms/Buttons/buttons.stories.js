import { storiesOf } from "@storybook/vue";
import { text } from "@storybook/addon-knobs";

/* Components */
import ButtonPrimary from "../../../components/buttons/ButtonPrimary.vue";

/* Spec */

storiesOf("Atoms/Buttons", module).add(
  "Primary",
  () => ({
    components: {
      ButtonPrimary
    },
    props: {
      text: {
        default: text("Text", "Primary")
      }
    },
    template: `
        <button-primary>
          {{ text }}
        </button-primary>
      `
  }),
  {
    notes: null
  }
);
