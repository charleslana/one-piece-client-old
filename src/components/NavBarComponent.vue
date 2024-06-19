<script setup lang="ts">
import router from '@/router';

function logout(): void {
  router.push({ name: 'home' });
}
</script>

<template>
  <div class="nav-bar-bg">
    <div class="columns is-multiline">
      <div class="column is-3">
        <div class="nav-bar-logo is-hidden-mobile"></div>
      </div>
      <div class="column">
        <div class="is-flex is-justify-content-flex-start is-flex-wrap-wrap">
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/chat.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Chat</div>
            </div>
          </RouterLink>
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/island.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Ilha</div>
            </div>
          </RouterLink>
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/hospital.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Hospital</div>
            </div>
          </RouterLink>
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/sea.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Mar</div>
            </div>
          </RouterLink>
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/market.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Mercado</div>
            </div>
          </RouterLink>
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/bag.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Mochila</div>
            </div>
          </RouterLink>
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/shop.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Shop</div>
            </div>
          </RouterLink>
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/work.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Trabalhos</div>
            </div>
          </RouterLink>
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/workout.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Treino</div>
            </div>
          </RouterLink>
          <RouterLink to="/newspaper">
            <div class="nab-bar-top">
              <div><img src="../assets/images/icons/nav-bar/trip.png" alt="Menu icon" /></div>
              <div class="nav-bar-menu">Tripulação</div>
            </div>
          </RouterLink>
        </div>
      </div>
      <div class="column is-3">
        <div class="nav-bar-menu-end">
          <div class="is-flex is-justify-content-center mt-3">
            <div class="mr-2" v-tooltip="'Trocar de personagem'">
              <RouterLink to="/select-character">
                <img src="../assets/images/icons/nav-bar/change-character.png" alt="Menu icon" />
              </RouterLink>
            </div>
            <div v-tooltip="'Vip permanentemente'">
              <img src="../assets/images/icons/nav-bar/vip.png" alt="Menu icon" />
            </div>
          </div>
          <div class="nav-bar-menu-link">
            <RouterLink to="/newspaper">Suporte</RouterLink>
            <RouterLink to="/newspaper">Perfil</RouterLink>
            <a @click="logout">Desconectar</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-bar-bg {
  background-image: url(../assets/images/layout/nav-bar.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  min-height: 73px;
  position: relative;
}

.nav-bar-logo {
  background-image: url(../assets/images/layout/nav-bar-logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 150px;
  height: 150px;
  position: absolute;
  bottom: 5px;
  left: 53px;
}

.nav-bar-menu {
  text-shadow: 1px 1px 0px #0b4769;
  font-family: 'Mouse Memoirs';
  color: #ffc66a;
  font-size: 18px;
}

.nab-bar-top {
  margin-top: 5px;
  text-align: center;
  width: 56px;
}

.nab-bar-top:hover {
  background-image: url(../assets/images/icons/nav-bar/nav-bar-border.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 56px;
  height: 100%;
  min-height: 56px;
  box-shadow: inset 0px 0px 18px 10px rgba(0, 0, 0, 0.3);
}

.nav-bar-menu-end {
  background-image: url(../assets/images/layout/nav-bar-menu.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 260px;
  height: 84px;
  position: absolute;
  right: -15px;
  bottom: 0px;
}

.nav-bar-menu-link {
  position: absolute;
  top: 63px;
  left: 47px;
  width: 191px;
  height: 19px;
  text-align: center;
  font-size: 12px;
}

.nav-bar-menu-link a {
  color: #1e1e1e;
  text-shadow: 1px 1px 0px #dcdcdc;
  margin-left: 10px;
}

.nav-bar-menu-link a:hover {
  text-decoration: underline;
}
</style>
