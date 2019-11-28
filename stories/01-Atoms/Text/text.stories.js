import { storiesOf } from "@storybook/vue";
import { withKnobs, text } from "@storybook/addon-knobs";

/* Spec */

storiesOf("Atoms/Text", module)
  .addDecorator(
    withKnobs({
      escapeHTML: false
    })
  )
  .add(
    "Titles",
    () => ({
      props: {
        title1: {
          default: text("H1", "I'm a H1")
        },
        title2: {
          default: text("H2", "I'm a H2")
        },
        title3: {
          default: text("H3", "I'm a H3")
        },
        title4: {
          default: text("H4", "I'm a H4")
        }
      },
      template: `
    <div>
      <h1>{{title1}}</h1>
      <h2>{{title2}}</h2>
      <h3>{{title3}}</h3>
      <h4>{{title4}}</h4>
    </div>
    `
    }),
    {
      notes: null
    }
  )
  .add(
    "Paragraph",
    () => ({
      props: {
        text: {
          default: text(
            "Text",
            "I'm a long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long paragraph"
          )
        }
      },
      template: `
      <div>
        <p>{{text}}</p>
      </div>
    `
    }),
    {
      notes: null
    }
  );
