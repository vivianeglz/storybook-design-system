import { configure, addDecorator, addParameters } from "@storybook/vue";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

addDecorator(withA11y);
addDecorator(withKnobs);

const scssReq = require.context("!!raw-loader!../css/scss", true, /.\.scss$/);
const scssTokenFiles = scssReq
  .keys()
  .map(filename => ({ filename, content: scssReq(filename).default }));

addParameters({
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS
    }
  },
  designToken: {
    files: {
      scss: scssTokenFiles
    }
  }
});

require(`../css/scss/style.scss`);

function loadStories() {
  const req = require.context("../stories", true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
