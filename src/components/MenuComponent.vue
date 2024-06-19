<script setup lang="ts">
import { calculateProgressBar, calculateProgressBarWidth } from '@/utils/utils';
import router from '@/router';
import { ref } from 'vue';

const playerName = ref('');

function logout(): void {
  router.push({ name: 'home' });
}

function searchPlayer(): void {
  alert(playerName.value);
}
</script>

<template>
  <div class="side-bar-menu">
    <div class="side-bar-title">Estatísticas</div>
    <div class="side-bar-statistics">
      <VTooltip>
        <div
          class="statistics-column is-flex is-justify-content-space-between is-align-items-center mb-1"
        >
          <div class="size-123">
            <div
              class="user-hp-bar-fill"
              :style="{ width: `${calculateProgressBarWidth(50, 100, 123)}px` }"
            >
              <div class="user-statistics-bar"></div>
            </div>
          </div>
          <img src="../assets/images/icons/side-bar-menu/hp.png" alt="Statistics icon" />
          <span>{{ calculateProgressBar(50, 100) }}%</span>
        </div>
        <template #popper> <b>HP:</b> 50 de 100</template>
      </VTooltip>
      <VTooltip>
        <div
          class="statistics-column is-flex is-justify-content-space-between is-align-items-center mb-1"
        >
          <div class="size-123">
            <div
              class="user-mp-bar-fill"
              :style="{ width: `${calculateProgressBarWidth(50, 100, 123)}px` }"
            >
              <div class="user-statistics-bar"></div>
            </div>
          </div>
          <img src="../assets/images/icons/side-bar-menu/mp.png" alt="Statistics icon" />
          <span>{{ calculateProgressBar(50, 100) }}%</span>
        </div>
        <template #popper> <b>MP:</b> 50 de 100</template>
      </VTooltip>
      <VTooltip>
        <div
          class="statistics-column is-flex is-justify-content-space-between is-align-items-center"
        >
          <div class="size-123">
            <div
              class="user-stamina-bar-fill"
              :style="{ width: `${calculateProgressBarWidth(100, 100, 123)}px` }"
            >
              <div class="user-statistics-bar"></div>
            </div>
          </div>
          <img src="../assets/images/icons/side-bar-menu/stamina.png" alt="Statistics icon" />
          <span>{{ calculateProgressBar(100, 100) }}%</span>
        </div>
        <template #popper> <b>Stamina:</b> 100 de 100</template>
      </VTooltip>
    </div>
    <div class="side-bar-title">Principal</div>
    <div class="side-bar-menu-bg">
      <RouterLink to="/newspaper">Início</RouterLink>
      <RouterLink to="/newspaper">Chat</RouterLink>
      <RouterLink to="/newspaper">Comprar Créditos</RouterLink>
      <RouterLink to="/newspaper">Shopping</RouterLink>
      <RouterLink to="/select-character">Trocar de personagem</RouterLink>
      <RouterLink to="/vip-benefits">Vantagens VIP</RouterLink>
      <a @click="logout">Desconectar</a>
    </div>
    <div class="side-bar-title">Personagem</div>
    <div class="side-bar-menu-bg">
      <RouterLink to="/nicknames"
        >Alcunhas <img src="../assets/images/icons/new.gif" alt="New icon"
      /></RouterLink>
      <RouterLink to="/newspaper">Akuma no Mi</RouterLink>
      <RouterLink to="/newspaper">Aprender Golpes</RouterLink>
      <RouterLink to="/newspaper">Aprimorar Golpes</RouterLink>
      <RouterLink to="/newspaper">Buffs</RouterLink>
      <RouterLink to="/newspaper">Haki</RouterLink>
      <RouterLink to="/newspaper">Maestrias</RouterLink>
      <RouterLink to="/newspaper">Metas</RouterLink>
      <RouterLink to="/newspaper">Mochila</RouterLink>
      <RouterLink to="/newspaper">Modo História</RouterLink>
      <RouterLink to="/newspaper">Passe VIP</RouterLink>
      <RouterLink to="/newspaper">Status</RouterLink>
      <RouterLink to="/newspaper">Stickers</RouterLink>
      <RouterLink to="/newspaper">Tarefas Diárias</RouterLink>
      <RouterLink to="/newspaper">Transformar</RouterLink>
      <RouterLink to="/newspaper">Treinamento</RouterLink>
      <RouterLink to="/newspaper">Tripulação</RouterLink>
    </div>
    <div class="side-bar-title">Batalhas</div>
    <div class="side-bar-menu-bg">
      <RouterLink to="/newspaper">Ilha (NPCs)</RouterLink>
      <RouterLink to="/newspaper">Battlesea (PvP)</RouterLink>
      <RouterLink to="/newspaper">Boss</RouterLink>
      <RouterLink to="/newspaper">Duelo</RouterLink>
      <RouterLink to="/newspaper">Mapa Mundi</RouterLink>
      <RouterLink to="/newspaper">Mar Aberto (PvP)</RouterLink>
      <RouterLink to="/newspaper">Trabalhos</RouterLink>
    </div>
    <div class="side-bar-title">Cidade</div>
    <div class="side-bar-menu-bg">
      <RouterLink to="/newspaper">Andarilho</RouterLink>
      <RouterLink to="/newspaper">Base</RouterLink>
      <RouterLink to="/newspaper">Coliseu</RouterLink>
      <RouterLink to="/newspaper">Conquista de Ilha</RouterLink>
      <RouterLink to="/newspaper">Fábrica</RouterLink>
      <RouterLink to="/newspaper">Hospital</RouterLink>
      <RouterLink to="/newspaper">Usopp Factory</RouterLink>
      <RouterLink to="/newspaper">Loja</RouterLink>
      <RouterLink to="/newspaper">Mercado</RouterLink>
      <RouterLink to="/newspaper">Mercador</RouterLink>
    </div>
    <div class="side-bar-title">Conta</div>
    <div class="side-bar-menu-bg">
      <RouterLink to="/newspaper">Achados e Perdidos</RouterLink>
      <RouterLink to="/newspaper">Administração de Conta</RouterLink>
      <RouterLink to="/newspaper">Controle de Golpes</RouterLink>
      <RouterLink to="/newspaper">Correio</RouterLink>
      <RouterLink to="/newspaper">Meus Tickets</RouterLink>
      <RouterLink to="/newspaper">Segurança</RouterLink>
      <RouterLink to="/newspaper">Troca de Tickets</RouterLink>
    </div>
    <div class="side-bar-title">Infos e Ajuda</div>
    <div class="side-bar-menu-bg">
      <RouterLink to="/newspaper">Blog</RouterLink>
      <RouterLink to="/newspaper">Discord</RouterLink>
      <RouterLink to="/newspaper">Lista de Itens</RouterLink>
      <RouterLink to="/newspaper">Lista de Drops</RouterLink>
      <RouterLink to="/newspaper">Lista de Drops do Passe</RouterLink>
      <RouterLink to="/newspaper">Livro das Akumas</RouterLink>
      <RouterLink to="/newspaper">Regras</RouterLink>
      <RouterLink to="/newspaper">Relatório de Drops</RouterLink>
      <RouterLink to="/newspaper">Relatório de Mar Aberto</RouterLink>
      <RouterLink to="/newspaper">Relatório de Metas</RouterLink>
      <RouterLink to="/newspaper">Relatório de PvPs</RouterLink>
      <RouterLink to="/newspaper">Relatório de Trip</RouterLink>
    </div>
    <div class="side-bar-title">Ranking</div>
    <div class="side-bar-menu-bg">
      <RouterLink to="/newspaper">Avançados</RouterLink>
      <RouterLink to="/newspaper">Jogadores</RouterLink>
      <RouterLink to="/newspaper">Maestria</RouterLink>
      <RouterLink to="/newspaper">Treinos</RouterLink>
      <RouterLink to="/newspaper">Tripulação</RouterLink>
      <form @submit.prevent="searchPlayer">
        <div class="is-flex mt-2">
          <input
            type="text"
            placeholder="Buscar jogador"
            class="input is-shadowless is-borderless mr-2 search-input"
            v-model.trim="playerName"
          />
          <button class="menu-button">OK</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.side-bar-menu {
  background: url(../assets/images/layout/sidebar-content.png) repeat;
  width: 100%;
  height: 100%;
  min-height: 4px;
  color: black;
  border-radius: 0 0 10px 10px;
}

.side-bar-menu:before {
  content: '';
  display: inline-block;
  width: 100%;
  height: 29px;
  margin-right: 6px;
  background-image: url('../assets/images/layout/sidebar-top.png');
  background-size: cover;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.side-bar-menu:after {
  content: '';
  display: inline-block;
  width: 100%;
  height: 29px;
  margin-right: 6px;
  background-image: url(/src/assets/images/layout/sidebar-bottom.png);
  background-size: cover;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.side-bar-title {
  font-family: 'Jolly Lodger', cursive;
  color: #303431;
  font-size: 30px;
  padding: 6px;
  box-shadow: inset 0px 7px 15px 0px rgba(0, 0, 0, 0.3);
}

.side-bar-title:before {
  content: '';
  display: inline-block;
  width: 35px;
  height: 35px;
  margin-right: 18px;
  background-image: url('../assets/images/layout/sidebar-title.png');
  background-size: cover;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.side-bar-statistics {
  background: url(../assets/images/layout/sidebar-statistics.png) repeat;
  width: 100%;
  height: auto;
  min-height: 4px;
  color: black;
  box-shadow: inset 0px 0px 11px 5px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid white;
  padding: 10px;
}

.statistics-column {
  border-radius: 6px;
  background: #f7f7f7;
  -webkit-box-shadow: 0px 1px 0px 0px #a8a6a6;
  box-shadow: 0px 1px 0px 0px #a8a6a6;
  padding: 4px 5px 4px;
}

.user-hp-bar-fill {
  background: #b94248;
  width: 123px;
  height: 17px;
}

.user-mp-bar-fill {
  background: #06c2d5;
  width: 123px;
  height: 17px;
}

.user-stamina-bar-fill {
  background: #efd351;
  width: 123px;
  height: 17px;
}

.user-statistics-bar {
  width: 123px;
  height: 17px;
  background: url('../assets/images/layout/statistics-bar.png') no-repeat;
}

.statistics-column img {
  object-fit: contain;
}

.statistics-column span {
  font-family: 'yanone_kaffeesatzregular';
  color: #5d5e5d;
  font-size: 16px;
}

.size-123 {
  width: 123px;
}

.side-bar-menu-bg {
  background: url(../assets/images/layout/sidebar-menu-bg.png) repeat;
  width: 100%;
  height: auto;
  min-height: 4px;
  padding: 6px 6px;
}

.side-bar-menu-bg a {
  font-size: 13px;
  border-radius: 8px;
  padding: 1px 10px;
  color: #f8f8f8;
  text-shadow: 1px 1px 0px #075985;
  width: 100%;
  display: block;
}

.side-bar-menu-bg a:before {
  content: 'x';
  display: inline-block;
  width: 7px;
  height: 15px;
  margin-right: 5px;
  color: #d3d3d3;
  font-size: 10px;
  text-shadow: 1px 1px 0px #0369a1;
  vertical-align: middle;
}

.side-bar-menu-bg a:hover:before {
  color: #06b6d4;
  font-size: 11px;
  text-shadow: 1px 1px 0px #d3d3d3;
}

.side-bar-menu-bg a:hover {
  background: linear-gradient(to bottom, #dedede 0%, #f7f7f7 100%);
  box-shadow: 0px 1px 0px 1px #06b6d4;
  color: #1f1f1f;
  text-shadow: 1px 1px 0px #c6c6c6;
  font-weight: bold;
}

.search-input {
  height: 21px;
  font-size: 11px;
}

.menu-button {
  background: url(../assets/images/icons/blue-button.png) center top no-repeat;
  width: 40px;
  height: 21px;
  font-family: 'yanone_kaffeesatzregular';
  color: #fff;
  text-shadow: 1px 1px 0px #2d460c;
  text-align: center;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
}

.search-input::placeholder {
  color: #5b5958;
}
</style>
