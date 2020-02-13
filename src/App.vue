<template>
  <div>
    <svg width="0" height="0" class="hidden">
      <symbol viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" id="fb">
        <path
          d="M20.096 8h-9.192C9.854 8 9 8.854 9 9.904v9.192C9 20.146 9.854 21 10.904 21h9.192c1.05 0 1.904-.854 1.904-1.904V9.904C22 8.854 21.146 8 20.096 8zm-4.57 9.902a3.432 3.432 0 0 1-3.428-3.427 3.432 3.432 0 0 1 3.427-3.428 3.432 3.432 0 0 1 3.428 3.428 3.432 3.432 0 0 1-3.428 3.427zm3.808-6.093a1.144 1.144 0 0 1 0-2.285c.63 0 1.143.512 1.143 1.142 0 .63-.513 1.143-1.143 1.143z"
          fill="#2F80ED"
        />
        <path
          d="M19.324 10.294a.383.383 0 1 0 0 .765.383.383 0 0 0 0-.765zM15.5 12a2.503 2.503 0 0 0-2.5 2.5c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z"
          fill="#2F80ED"
        />
      </symbol>
      <symbol viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" id="ig">
        <path
          d="M22.32 11.06c-.434-.772-.905-.914-1.864-.968-.958-.065-3.367-.092-5.454-.092-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C7.23 11.831 7 13.159 7 15.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM13 18.5v-6l5 3-5 3z"
          fill="#2F80ED"
        />
      </symbol>
    </svg>

    <header class="page-header">
      <div class="page-header__inner">
        <a href="index.html" class="page-header__logo">
          <span>#</span>Иду
          <span>Куда</span>Хочу
        </a>

        <nav class="page-header__nav">
          <a href="#" class="active">Экскурсии</a>
          <a href="#">Концерты</a>
          <a href="#">Кино</a>
          <a href="#">Театр</a>
        </nav>

        <div class="page-header__socials">
          <a href="#">
            <svg viewBox="0 0 30 30">
              <use xlink:href="#youtube" />
            </svg>
          </a>
          <a href="#">
            <svg viewBox="0 0 30 30">
              <use xlink:href="#fb" />
            </svg>
          </a>
          <a href="#">
            <svg viewBox="0 0 30 30">
              <use xlink:href="#vk" />
            </svg>
          </a>
          <a href="#">
            <svg viewBox="0 0 30 30">
              <use xlink:href="#ig" />
            </svg>
          </a>
        </div>

        <div class="page-header__menu"></div>
      </div>
    </header>

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
          <article 
            v-for="event in events"
            :key="event.id"
            class="card page-main__card"
          >
            <div class="card__inner">
              <div class="card__img">
                <img 
                  :src="event.images[0].image" 
                  :alt="event.title" 
                />
              </div>

              <div class="card__info">
                <span class="card__info-date">
                  {{ event.dates[0].start | prettyDate }}
                </span>

                <h3 class="card__title">
                  <a href="page.html">
                    {{ event.title }}
                  </a>
                </h3>
              </div>
              <div class="card__meta">
                <span v-for="(tag, index) in event.tags" :key="index">
                  {{ tag }}
                </span>
              </div>
            </div>
          </article>
        </div>


        <!-- <div class="page-main__end">
          <button class="page-main__end-btn">показать еще</button>
        </div> -->
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
import moment from 'moment';

export default {
  name: "App",
  components: {},
  data() {
    return {
      events: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const result = await axios.get("/events.json")
        .catch(e => console.log(e));

      this.events = result.data.results;

      console.log(this.events);
    }
  },
  filters: {
    prettyDate(value) {
      return moment(value).format('Do MMMM');
    }
  },
};
</script>

<style src="@/assets/main.css"></style>