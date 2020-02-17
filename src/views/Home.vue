<template>
  <div>
    
    <section class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Санкт-Петербург</h1>

        <h2 class="hero__subtitle">Экскурсии</h2>
      </div>
    </section>

    <main class="page-main">
      <div class="page-main__inner">
        <div class="filter">
          <div class="filter__block"></div>

          <button class="filter__btn">Найти экскурсию</button>
        </div>

        <div class="page-main__catalog">
          <article v-for="event in events" :key="event.id" class="card page-main__card">
            <div class="card__inner">
              <div class="card__img">
                <img :src="event.images[0].image" :alt="event.title" />
              </div>

              <div class="card__info">
                <span class="card__info-date">{{ event.dates[0].start | prettyDate }}</span>

                <h3 class="card__title">
                  <router-link :to="'tour/' + event.id">
                    {{ event.title }}
                  </router-link>
                </h3>
              </div>

              <div class="card__meta">
                <span v-for="(tag, index) in event.tags" :key="index">{{ tag }}</span>
              </div>
            </div>
          </article>
        </div>

        <!-- <div class="page-main__end">
          <button class="page-main__end-btn">показать еще</button>
        </div>-->
      </div>
    </main>

    <footer class="page-footer">
      <div class="page-footer__inner">
        <div class="page-footer__logo">Идукудахочу, 2020</div>

        <div
          class="page-footer__right"
        >© Все права защищены. Использование материалов сайта только с письменного согласия авторов.</div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      events: []
    };
  },
  created() {
    this.getData();
    
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {
    async getData() {
      const result = await axios.get("/events.json").catch(e => console.log(e));

      this.events = result.data.results;

      // console.log(this.events);
    }
  },
  filters: {
    prettyDate(value) {
      return moment(value).format("Do MMMM");
    }
  }
};
</script>
