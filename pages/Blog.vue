<template>
  <section>
    <header>
      <h1>Blog</h1>
    </header>
    <segment-list-block-media :items="items" />
    <segment-list-block-media :items="itemsSmall" size="small" />
  </section>
</template>

<script>
import Leprechaun from "../images/leprechaun.jpg";
import LeprechaunSmall from "../images/leprechaun-small.jpg";
import SegmentListBlockMedia from "../segments/SegmentListBlockMedia";
export default {
  name: "BlogPage",
  components: {
    SegmentListBlockMedia
  },
  data() {
    return {
      items: [
        {
          title: "Le Leprechaun",
          text:
            "Un leprechaun est une petite créature humanoïde imaginaire issue du folklore irlandais. Il est souvent représenté sous forme d'un vieil homme de petite taille avec une barbe, coiffé d'un chapeau et vêtu de rouge ou de vert. Le leprechaun passerait son temps à fabriquer des chaussures, commettre des farces et compter ses pièces d'or qu'il conserve dans un chaudron caché au pied d'un arc-en-ciel.",
          imageUrl: Leprechaun
        },
        {
          title: "Le Leprechaun",
          text:
            "Un leprechaun est une petite créature humanoïde imaginaire issue du folklore irlandais. Il est souvent représenté sous forme d'un vieil homme de petite taille avec une barbe, coiffé d'un chapeau et vêtu de rouge ou de vert. Le leprechaun passerait son temps à fabriquer des chaussures, commettre des farces et compter ses pièces d'or qu'il conserve dans un chaudron caché au pied d'un arc-en-ciel.",
          imageUrl: Leprechaun
        },
        {
          title: "Le Leprechaun",
          text:
            "Un leprechaun est une petite créature humanoïde imaginaire issue du folklore irlandais. Il est souvent représenté sous forme d'un vieil homme de petite taille avec une barbe, coiffé d'un chapeau et vêtu de rouge ou de vert. Le leprechaun passerait son temps à fabriquer des chaussures, commettre des farces et compter ses pièces d'or qu'il conserve dans un chaudron caché au pied d'un arc-en-ciel.",
          imageUrl: Leprechaun
        },
        {
          title: "Le Leprechaun",
          text:
            "Un leprechaun est une petite créature humanoïde imaginaire issue du folklore irlandais. Il est souvent représenté sous forme d'un vieil homme de petite taille avec une barbe, coiffé d'un chapeau et vêtu de rouge ou de vert. Le leprechaun passerait son temps à fabriquer des chaussures, commettre des farces et compter ses pièces d'or qu'il conserve dans un chaudron caché au pied d'un arc-en-ciel.",
          imageUrl: Leprechaun
        }
      ],
      itemsSmall: [
        {
          title: "Attrapez-les tous !",
          text:
            "Si jamais il se fait capturer, il peut exaucer trois vœux en échange de sa libération.",
          imageUrl: LeprechaunSmall
        },
        {
          title: "Attrapez-les tous !",
          text:
            "Si jamais il se fait capturer, il peut exaucer trois vœux en échange de sa libération.",
          imageUrl: LeprechaunSmall
        },
        {
          title: "Attrapez-les tous !",
          text:
            "Si jamais il se fait capturer, il peut exaucer trois vœux en échange de sa libération.",
          imageUrl: LeprechaunSmall
        },
        {
          title: "Attrapez-les tous !",
          text:
            "Si jamais il se fait capturer, il peut exaucer trois vœux en échange de sa libération.",
          imageUrl: LeprechaunSmall
        }
      ]
    };
  }
};
</script>
