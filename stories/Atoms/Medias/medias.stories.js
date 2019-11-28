import { storiesOf } from "@storybook/vue";
import { files, text } from "@storybook/addon-knobs";

/* Components */
import ImageSquare from "../../../components/medias/ImageSquare.vue";

/* Spec */

storiesOf("Atoms/Medias", module).add(
  "Image Square",
  () => ({
    components: {
      ImageSquare
    },
    props: {
      file: {
        default: files("Image", [".jpg", ".png"], [])
      },
      alt: {
        default: text("Alt", "")
      }
    },
    template: `
        <image-square :imageUrl="file[0] ? file[0] : undefined" :altText="alt"/>
      `
  }),
  {
    notes: null
  }
);
