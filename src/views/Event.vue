<template>
  <div>
    <section class="hero">
      <div class="hero__inner">
        <h1
          class="hero__title hero__title--small"
        >
          {{ event.title }}
        </h1>
      </div>
    </section>

    <main class="page-main">
      <div class="page-main__inner">
        <div class="filter">
          <div class="filter__block"></div>

          <button class="filter__btn">записаться на экскурсию</button>
        </div>

        <div class="page-main__content">
          <div class="page-main__content-inner">
            <blockquote v-html="event.description"></blockquote>

            <div v-html="event.body_text"></div>

            <div 
              v-if="'images' in event"
              class="poster"
            >
              <img 
                :src="event.images[0].image" 
                alt="page_poster.jpg" 
              />
            </div>

            <div class="page-main__content-footer">
              <div class="page-main__content-select">
                Дата и время экскурсии
                <span>13 ноября, 13:00</span>
              </div>

              <div class="page-main__content-price">
                Стоимость
                <span>670 руб.</span>
              </div>

              <button class="page-main__content-btn">записаться на экскурсию</button>
            </div>
          </div>

          <div class="page-main__side">
            <h2 class="page-main__side-title">Рекомендации</h2>

            <article class="card">
              <div class="card__inner">
                <div class="card__img">
                  <img src="img/poster.jpg" alt="Poster" />
                </div>

                <div class="card__info">
                  <span class="card__info-date">12, 13, 14 ноября</span>
                  <h3 class="card__title">
                    <a href="#">
                      Экскурсия по Дому Зингера «Дом, который построил
                      Сюзор»
                      (с посещением крыши)
                    </a>
                  </h3>
                </div>
                <div class="card__meta">
                  <span>автобусная</span>
                </div>
              </div>
            </article>
            <article class="card">
              <div class="card__inner">
                <div class="card__img">
                  <img src="img/poster.jpg" alt="Poster" />
                </div>

                <div class="card__info">
                  <span class="card__info-date">12, 13, 14 ноября</span>
                  <h3 class="card__title">
                    <a href="#">
                      Экскурсия по Дому Зингера «Дом, который построил
                      Сюзор»
                      (с посещением крыши)
                    </a>
                  </h3>
                </div>
                <div class="card__meta">
                  <span>автобусная</span>
                </div>
              </div>
            </article>
            <article class="card">
              <div class="card__inner">
                <div class="card__img">
                  <img src="img/poster.jpg" alt="Poster" />
                </div>

                <div class="card__info">
                  <span class="card__info-date">12, 13, 14 ноября</span>
                  <h3 class="card__title">
                    <a href="#">
                      Экскурсия по Дому Зингера «Дом, который построил
                      Сюзор»
                      (с посещением крыши)
                    </a>
                  </h3>
                </div>
                <div class="card__meta">
                  <span>автобусная</span>
                </div>
              </div>
            </article>
            <article class="card">
              <div class="card__inner">
                <div class="card__img">
                  <img src="img/poster.jpg" alt="Poster" />
                </div>

                <div class="card__info">
                  <span class="card__info-date">12, 13, 14 ноября</span>
                  <h3 class="card__title">
                    <a href="#">
                      Экскурсия по Дому Зингера «Дом, который построил
                      Сюзор»
                      (с посещением крыши)
                    </a>
                  </h3>
                </div>
                <div class="card__meta">
                  <span>автобусная</span>
                </div>
              </div>
            </article>
          </div>
        </div>
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

export default {
  name: "Event",
  data() {
    return {
      event: {},
    }
  },
  created() {
    // console.log(this.$route.params.id);
    // console.log(this.$route);

    this.getData();
  },
  methods: {
    async getData() {
      const { data } = await axios.get('/178324.json');

      this.event = data;

      console.log(data);
      
    }
  }
};
</script>