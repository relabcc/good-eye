<template>
  <div>
    <h2 class="title" :style="{ color: colors.blue }">{{question.title}}</h2>
    <div class="choices">
      <div
        class="choice"
        v-for="choice in question.choices"
        @click="choice.onClick"
      >
        <img :src="choice.img" />
      </div>
    </div>
  </div>
</template>

<script>
import colors from '../config/colors';
import questions from '../config/questions';
const questionLength = questions.length;

export default {
  data() {
    return {
      colors,
    };
  },
  computed: {
    question() {
      const {
        $route,
        $router,
        $store,
      } = this;
      const index = parseInt($route.params.id, 10);
      const question = questions[index - 1];
      return {
        title: question.title,
        choices: question.choices.map(choice => ({
          ...choice,
          onClick: () => {
            $store.commit('answer', {
              index,
              answer: choice.tour,
            });
            $router.push(index === questionLength ?
              '/result' : `/question/${index + 1}`);
          },
          img: `static/${choice.tour}/${choice.item}.png`,
        })),
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title {
    font-weight: bold;
    margin-top: 24px;
  }

  .choice {
    width: 50%;
    padding: 14px;
    display: inline-block;
    cursor: pointer;
    transform: scale(1);
    transition: transform 100ms ease-in-out;
    box-sizing: border-box;
  }

  .choice:hover {
    transform: scale(1.1);
    transition: transform 100ms ease-in-out;
  }

  .choice img {
    width: 100%;
  }
</style>
