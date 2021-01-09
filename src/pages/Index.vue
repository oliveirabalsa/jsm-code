<template>
  <q-page class="page">
    <header class="header__bar">
      <figure>
        <img
          src="https://github.com/juntossomosmais/frontend-challenge/raw/master/logo.svg"
          alt="Logo da Juntos Somos Mais"
        />
      </figure>
      <article class="input__container">
        <input type="text" placeholder="Buscar aqui" />
      </article>
      <span>teste</span>
      <span>teste</span>
    </header>
    <main class="main__container">
      <aside class="side__search__list">
        <article >
          <h6>Filtro por usuario:</h6>
          <ul>
            <li>Especial</li>
            <li>Normal</li>
            <li>Trabalhoso</li>
          </ul>
        </article>
      </aside>
      <section class="cards__container">
        <article class="card">
          <img src="" alt="" />
          <h2>Joselino</h2>
          <h6>Rua</h6>
          <p>Sao jose de ribaram</p>
          <p>Parana - cep:96895</p>
        </article>
        <article class="card">
          <img src="" alt="" />
          <h2>Joselino</h2>
          <h6>Rua</h6>
          <p>Sao jose de ribaram</p>
          <p>Parana - cep:96895</p>
        </article>
        <article class="card">
          <img src="" alt="" />
          <h2>Joselino</h2>
          <h6>Rua</h6>
          <p>Sao jose de ribaram</p>
          <p>Parana - cep:96895</p>
        </article>
        <article class="card">
          <img src="" alt="" />
          <h2>Joselino</h2>
          <h6>Rua</h6>
          <p>Sao jose de ribaram</p>
          <p>Parana - cep:96895</p>
        </article>
        <article class="card">
          <img src="" alt="" />
          <h2>Joselino</h2>
          <h6>Rua</h6>
          <p>Sao jose de ribaram</p>
          <p>Parana - cep:96895</p>
        </article>
        <article class="card">
          <img src="" alt="" />
          <h2>Joselino</h2>
          <h6>Rua</h6>
          <p>Sao jose de ribaram</p>
          <p>Parana - cep:96895</p>
        </article>
      </section>
    </main>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
};
</script>
<style lang="scss" scoped>
.page {
  padding: 50px;
  margin-top: 10px;
  background: darkblue;
  .header__bar {
    background-color: yellow;
    display: grid;
    grid-template-columns: 21% 50% 2% 5%;
    align-items: center;
    grid-gap: 4.3%;
    margin-bottom: 5%;

    figure > img {
      width: 70%;
    }

    .input__container input {
      width: 100%;
    }
  }
  .main__container {
    display: grid;
    grid-template-columns: 25% 75%;
    grid-gap: 5%;
    background-color: purple;

    .side__search__list {
      background-color: blue;
      width: 100%;
      article {
        margin: 0 30px;
        background: green;
        h6 {
          margin: 0;
        }
      }
    }
    .cards__container {
      display: grid;
      grid-template-columns: 30% 30% 30%;
      grid-gap: 0 14px;

      .card {
        text-align: center;
        padding: 30px;
        background-color: red;
        margin-top: 15%;
      }
    }
  }
}
</style>
