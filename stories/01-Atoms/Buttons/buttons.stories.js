import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";

/* Components */
import ButtonPrimary from "../../../components/buttons/ButtonPrimary.vue";

/* Spec */
import SpecButton from "./spec.buttons.md";

storiesOf("Atoms/Buttons", module).add(
  "Primary",
  () => ({
    components: {
      ButtonPrimary
    },
    props: {
      title: {
        default: text("Text", "Primary")
      }
    },
    methods: {
      handleClick: action("click")
    },
    template: `
        <button-primary @click="handleClick" :title="title"/>
      `
  }),
  {
    notes: SpecButton
  }
);
