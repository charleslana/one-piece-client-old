<script setup lang="ts">
import images from '@/data/image';
import type { CrewRanking, UserRanking } from '@/interfaces/home-ranking';
import router from '@/router';
import type { OrganizationType } from '@/types/organization-type';
import { computed, onMounted, ref } from 'vue';

const crewRanking = ref<CrewRanking[]>([
  {
    name: 'Pirate One',
    level: 999,
    organization: 'pirate',
    leaderName: 'Leader One',
    memberQuantity: 9999
  },
  {
    name: 'Marine One',
    level: 888,
    organization: 'marine',
    leaderName: 'Leader Two',
    memberQuantity: 8888
  },
  {
    name: 'Revolutionary One',
    level: 777,
    organization: 'revolutionary',
    leaderName: 'Leader Three',
    memberQuantity: 7777
  },
  {
    name: 'Pirate Two',
    level: 666,
    organization: 'pirate',
    leaderName: 'Leader Four',
    memberQuantity: 6666
  },
  {
    name: 'Marine Two',
    level: 555,
    organization: 'marine',
    leaderName: 'Leader Five',
    memberQuantity: 5555
  }
]);
const userRanking = ref<UserRanking[]>([
  {
    name: 'User One',
    level: 999,
    organization: 'pirate',
    crewName: 'Pirate One',
    reputation: 9999999
  },
  {
    name: 'User Two',
    level: 888,
    organization: 'marine',
    crewName: 'Marine One',
    reputation: 8888888
  },
  {
    name: 'User Three',
    level: 777,
    organization: 'revolutionary',
    crewName: 'Revolutionary One',
    reputation: 7777777
  },
  {
    name: 'User Four',
    level: 666,
    organization: 'pirate',
    crewName: 'Pirate Two',
    reputation: 6666666
  },
  {
    name: 'User Five',
    level: 555,
    organization: 'marine',
    crewName: 'Marine Two',
    reputation: 5555555
  }
]);
const isCrew = ref(true);
const imagesArray: string[] = [
  images.homeCaesarClownImage,
  images.homeLawImage,
  images.homeLuffyImage,
  images.homeLuffy2Image,
  images.homeNeptuneImage,
  images.homeSmokerImage
];
const randomCharacter = ref('');
const isLoading = ref(false);
const errorMessage = ref('');
const username = ref('');
const password = ref('');
let notificationTimeout: ReturnType<typeof setTimeout> | undefined = undefined;

onMounted(() => {
  randomCharacter.value = getRandomCharacter();
});

const isLoginDisabled = computed(() => {
  return username.value === '' || password.value === '';
});

function getRandomCharacter(): string {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
}

function getBackgroundClass(organization: OrganizationType): string {
  switch (organization) {
    case 'pirate':
      return 'pirate-bg-ranking';
    case 'marine':
      return 'marine-bg-ranking';
    case 'revolutionary':
      return 'revolutionary-bg-ranking';
    default:
      return 'default-bg-ranking';
  }
}

function login(): void {
  isLoading.value = true;
  errorMessage.value = '';
  clearTimeout(notificationTimeout);
  setTimeout(() => {
    const error = false;
    if (error) {
      isLoading.value = false;
      showError('Usuário ou senha inválida, tente novamente.');
      return;
    }
    router.push({ name: 'select-character' });
  }, 2000);
}

function showError(message: string): void {
  errorMessage.value = message;
  notificationTimeout = setTimeout(() => {
    errorMessage.value = '';
  }, 4000);
}
</script>

<template>
  <div class="home">
    <div class="content">
      <div class="container pt-5">
        <div class="columns">
          <div class="column is-flex is-justify-content-center">
            <div>
              <div v-if="isCrew">
                <figure>
                  <img src="../assets/images/home/crew-ranking.png" alt="Crew image" />
                </figure>
                <div
                  class="pirate-bg-ranking"
                  v-for="(crew, index) in crewRanking"
                  :key="index"
                  :class="getBackgroundClass(crew.organization)"
                >
                  <div class="ranking-position">{{ index + 1 }}</div>
                  <div class="name">{{ crew.name }}</div>
                  <div class="leader-name">Cap: {{ crew.leaderName }}</div>
                  <div class="crew-level">Nv. {{ crew.level }}</div>
                  <div class="crew-members">{{ crew.memberQuantity }}<br />Membros</div>
                </div>
              </div>
              <div v-else>
                <figure>
                  <img src="../assets/images/home/player-ranking.png" alt="Player image" />
                </figure>
                <div
                  class="pirate-bg-ranking"
                  v-for="(user, index) in userRanking"
                  :key="index"
                  :class="getBackgroundClass(user.organization)"
                >
                  <div class="ranking-position">{{ index + 1 }}</div>
                  <div class="name">{{ user.name }}</div>
                  <div class="leader-name">Trip: {{ user.crewName }}</div>
                  <div class="crew-level">Nv. {{ user.level }}</div>
                  <div class="user-reputation">Rep: {{ user.reputation }}</div>
                </div>
              </div>
              <button class="toggle-button" @click="isCrew = !isCrew">
                {{ isCrew ? 'Players' : 'Tripulações' }}
              </button>
            </div>
          </div>
          <div class="column is-flex is-justify-content-center is-hidden-mobile">
            <figure>
              <img :src="randomCharacter" alt="Random image" />
            </figure>
          </div>
          <div class="column is-flex is-justify-content-center">
            <div class="is-relative">
              <RouterLink to="/register">
                <figure>
                  <img src="../assets/images/home/register.png" alt="Register image" />
                </figure>
              </RouterLink>
              <div class="notification is-danger is-light" v-if="errorMessage !== ''">
                {{ errorMessage }}
              </div>
              <div class="login-box" v-if="!isLoading">
                <form @submit.prevent="login">
                  <input
                    type="text"
                    placeholder="nome do usuário"
                    class="input-login"
                    v-model.trim="username"
                  />
                  <input
                    type="password"
                    placeholder="senha"
                    class="input-password"
                    v-model.trim="password"
                  />
                  <button class="login-button" :disabled="isLoginDisabled"></button>
                </form>
                <button class="recovery-password-button"></button>
              </div>
              <div class="home-box is-flex is-justify-content-center" v-else>
                <img src="../assets/images/home/loading.gif" alt="Loading image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-home"></footer>
  </div>
</template>

<style scoped>
.home {
  background: url(../assets/images/home/clouds.png) top center no-repeat #1eb5f0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer-home {
  background: url(../assets/images/home/sea-pattern.png) repeat-x;
  width: 100%;
  height: 295px;
}

.pirate-bg-ranking {
  position: relative;
  background: url(../assets/images/home/pirate-bg-ranking.png) no-repeat;
  width: 313px;
  height: 44px;
  margin-bottom: 5px;
}

.marine-bg-ranking {
  background: url(../assets/images/home/marine-bg-ranking.png) no-repeat;
}

.revolutionary-bg-ranking {
  background: url(../assets/images/home/revolutionary-bg-ranking.png) no-repeat;
}

.ranking-position {
  position: absolute;
  top: 2px;
  left: 21px;
  width: 36px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 34px;
  text-shadow: 0px 1px 1px #000;
  font-family: 'yanone_kaffeesatzregular';
}

.name {
  position: absolute;
  top: 2px;
  left: 65px;
  width: 115px;
  height: 22px;
  color: #cb1b03;
  font-size: 24px;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'yanone_kaffeesatzregular';
}

.leader-name {
  position: absolute;
  top: 26px;
  left: 65px;
  width: 116px;
  height: 16px;
  color: white;
  font-size: 13px;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'yanone_kaffeesatzregular';
}

.crew-level {
  position: absolute;
  top: 8px;
  left: 200px;
  width: 36px;
  height: 16px;
  color: #988f43;
  font-size: 15px;
  line-height: 1;
  font-family: 'yanone_kaffeesatzregular';
}

.crew-members {
  position: absolute;
  top: 3px;
  left: 259px;
  width: 42px;
  height: 16px;
  color: #988f43;
  font-size: 15px;
  line-height: 1;
  font-family: 'yanone_kaffeesatzregular';
}

.user-reputation {
  position: absolute;
  top: 8px;
  left: 242px;
  width: 70px;
  height: 16px;
  color: #988f43;
  font-size: 15px;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: 'yanone_kaffeesatzregular';
}

.toggle-button {
  border-radius: 5px;
  background: #d4830f;
  box-shadow: 0px 1px #90590a;
  cursor: pointer;
  font-family: yanone_kaffeesatzregular;
  color: #fff;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  padding: 4px 9px 1px;
  font-family: 'yanone_kaffeesatzregular';
}

.toggle-button:hover {
  background: #c07811;
}

.login-box {
  position: relative;
  background: url(../assets/images/home/login-box.png) no-repeat;
  width: 290px;
  height: 181px;
}

.input-login {
  position: absolute;
  top: 34px;
  left: 19px;
  width: 256px;
  height: 39px;
  background: transparent;
  border: none;
  outline: none;
  color: #8d7a66;
  font-family: 'yanone_kaffeesatzregular';
  font-size: 24px;
}

.input-password {
  position: absolute;
  top: 96px;
  left: 19px;
  width: 256px;
  height: 39px;
  background: transparent;
  border: none;
  outline: none;
  color: #8d7a66;
  font-family: 'yanone_kaffeesatzregular';
  font-size: 24px;
}

.input-login::placeholder,
.input-password::placeholder {
  color: #8d7a66;
}

.login-button {
  position: absolute;
  background: url(../assets/images/home/login-button.png) no-repeat;
  width: 122px;
  height: 40px;
  top: 157px;
  left: 25px;
}

.login-button:hover {
  background-position: 0 -40px;
}

.recovery-password-button {
  position: absolute;
  background: url(../assets/images/home/recovery-password-button.png) no-repeat;
  width: 121px;
  height: 40px;
  top: 157px;
  left: 146px;
}

.recovery-password-button:hover {
  background-position: 0 -40px;
}

.home-box {
  background: url(../assets/images/home/home-box.png) no-repeat;
  width: 282px;
  height: 173px;
}

.notification {
  position: absolute;
  z-index: 2;
  top: 0px;
  left: 13px;
  width: 264px;
}
</style>
