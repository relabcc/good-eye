<template>
  <div>
    <h2 :style="{ color: colors.blue }">{{question.title}}</h2>
    <div class="choices">
      <div
        class="choice"
        v-for="choice in question.choices"
        @click="choice.onClick"
      >
        <div class="choice-image">
          <img :src="choice.img" />
        </div>
        <div class="choice-text">
          <p :style="{ color: colors.grey }">{{choice.text}}</p>
        </div>
      </div>
    </div>
    <div class="status">
      <status-bar
        :total="questionLength"
        :current="parseInt($route.params.id, 10)"
        :goTo="goTo"
      ></status-bar>
    </div>
  </div>
</template>

<script>
import StatusBar from '../components/StatusBar';
import colors from '../config/colors';
import questions from '../config/questions';

export default {
  components: { StatusBar },
  data() {
    return {
      colors,
      questionLength: questions.length,
    };
  },
  computed: {
    question() {
      const {
        $route,
        $router,
        $store,
        questionLength,
      } = this;
      const index = parseInt($route.params.id, 10);
      const question = questions[index - 1];
      const isMobile = $store.state.isMobile.any ? '/mobile' : '';
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
          img: `static${isMobile}/${choice.tour}/${choice.item}.png`,
        })),
      };
    },
  },
  methods: {
    goTo(target) {
      const index = parseInt(this.$route.params.id, 10);
      if (target < index) this.$router.push(`/question/${target}`);
    },
  },
};
</script>

<style scoped>
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

.choice-image {
  margin: -32px 0;
}
</style>
