<template>
  <div>
    <transition-manager>
      <div
        v-for="(question, id) in questions"
        v-if="$route.params.id - 1 === id"
      >
        <div class="question">
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
        </div>
      </div >
    </transition-manager>
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
import TransitionManager from '../components/TransitionManager';
import colors from '../config/colors';
import questions from '../config/questions';

export default {
  components: {
    StatusBar,
    TransitionManager,
  },
  data() {
    return {
      colors,
      questionLength: questions.length,
    };
  },
  computed: {
    questions() {
      const {
        $router,
        $store,
        questionLength,
      } = this;
      return questions.map((question, index) => ({
        title: question.title,
        choices: question.choices.map(choice => ({
          ...choice,
          onClick: () => {
            const qIndex = index + 1;
            $store.commit('answer', {
              index: qIndex,
              answer: choice.tour,
            });
            $router.push(qIndex === questionLength ?
              '/result' : `/question/${qIndex + 1}`);
            if (qIndex === questionLength) $store.commit('doneQuiz');
          },
          img: `static/${choice.tour}/${choice.item}.png`,
        })),
      }));
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
.question {
  position: absolute;
  top: 0;
  left: 0;
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

.choice-image {
  margin: -32px 0;
}

.status {
  margin-top: 60px;
  padding-top: 100%;
}
</style>
