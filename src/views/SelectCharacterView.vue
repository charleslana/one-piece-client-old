<script setup lang="ts">
import images from '@/data/image';
import type { User } from '@/interfaces/user';
import router from '@/router';
import type { BreedType } from '@/types/breed-type';
import type { ClassType } from '@/types/class-type';
import type { OrganizationType } from '@/types/organization-type';
import type { SeaType } from '@/types/sea-type';
import { getCharacterMini } from '@/utils/utils';
import { computed, onMounted, ref } from 'vue';

const imagesArray: string[] = [
  images.homeCaesarClownImage,
  images.homeLawImage,
  images.homeLuffyImage,
  images.homeLuffy2Image,
  images.homeNeptuneImage,
  images.homeSmokerImage
];
const randomCharacter = ref('');
const totalAvailable = ref(12);
const step = ref(1);
const totalCharacters = 50;
const selectedFaction = ref<OrganizationType>();
const selectedCharacter = ref<number>();
const name = ref('');
const selectedSea = ref<SeaType>('north-blue');
const selectedBreed = ref<BreedType>('human');
const selectedClass = ref<ClassType>('swordsman');
const isLoading = ref(false);
const errorMessage = ref('');
const successMessage = ref('');
let notificationTimeout: ReturnType<typeof setTimeout> | undefined = undefined;
const user = ref<User>({
  id: 1,
  name: 'Test',
  userCharacters: [
    {
      id: 1,
      name: 'Test',
      level: 1,
      faction: 'pirate',
      character: {
        id: 1,
        name: 'Monkey D. Luffy'
      }
    },
    {
      id: 2,
      name: 'Test2',
      level: 2,
      faction: 'marine',
      character: {
        id: 2,
        name: 'Roronoa Zoro'
      }
    },
    {
      id: 3,
      name: 'Test3',
      level: 3,
      faction: 'revolutionary',
      character: {
        id: 3,
        name: 'Usopp'
      }
    }
  ]
});
const characterId = ref(0);
const password = ref('');

onMounted(() => {
  randomCharacter.value = getRandomCharacter();
  getCharacters();
});

const isCreateCharacterDisabled = computed(() => {
  return name.value === '';
});

function getRandomCharacter(): string {
  const randomIndex = Math.floor(Math.random() * imagesArray.length);
  return imagesArray[randomIndex];
}

function selectFaction(faction: OrganizationType): void {
  selectedFaction.value = faction;
  step.value = 3;
}

function selectCharacter(characterId: number): void {
  selectedCharacter.value = characterId;
  step.value = 4;
}

function createCharacter(): void {
  isLoading.value = true;
  errorMessage.value = '';
  clearTimeout(notificationTimeout);
  setTimeout(() => {
    const error = false;
    isLoading.value = false;
    if (error) {
      showError('Nome do usuário já existe, tente novamente');
      return;
    }
    step.value = 1;
    name.value = '';
    selectedSea.value = 'north-blue';
    selectedBreed.value = 'human';
    selectedClass.value = 'swordsman';
  }, 2000);
}

function showError(message: string): void {
  errorMessage.value = message;
  notificationTimeout = setTimeout(() => {
    errorMessage.value = '';
  }, 4000);
}

function showSuccess(message: string): void {
  successMessage.value = message;
  notificationTimeout = setTimeout(() => {
    successMessage.value = '';
  }, 4000);
}

async function getCharacters(): Promise<void> {
  totalAvailable.value = 12 - user.value.userCharacters.length;
}

function loginCharacter(id: number): void {
  console.log(id);
  isLoading.value = true;
  setTimeout(() => {
    const error = false;
    if (error) {
      isLoading.value = false;
      return;
    }
    router.push({ name: 'newspaper' });
  }, 1000);
}

function confirmDeleteCharacter(id: number): void {
  const isConfirmed = confirm(
    'Você tem certeza de que deseja deletar este personagem?\nO processo é irreversível!'
  );
  if (isConfirmed) {
    characterId.value = id;
    step.value = 0;
  }
}

function deleteCharacter(): void {
  successMessage.value = '';
  isLoading.value = true;
  clearTimeout(notificationTimeout);
  setTimeout(() => {
    isLoading.value = false;
    cancelDelete();
    showSuccess(`Seu personagem foi deletado com sucesso ${characterId.value}`);
  }, 2000);
}

function cancelDelete(): void {
  password.value = '';
  step.value = 1;
}

function getCharacterNameFaction(faction: OrganizationType): string {
  switch (faction) {
    case 'pirate':
      return 'character-name-pirate';
    case 'marine':
      return 'character-name-marine';
    case 'revolutionary':
      return 'character-name-revolutionary';
    default:
      return '';
  }
}

function getCharacterLevelFaction(faction: OrganizationType): string {
  switch (faction) {
    case 'pirate':
      return 'character-level-pirate';
    case 'marine':
      return 'character-level-marine';
    case 'revolutionary':
      return 'character-level-revolutionary';
    default:
      return '';
  }
}

function getCharacterButton(faction: OrganizationType): string {
  switch (faction) {
    case 'pirate':
      return 'red-button';
    case 'marine':
      return 'blue-button';
    case 'revolutionary':
      return 'green-button';
    default:
      return '';
  }
}
</script>

<template>
  <div class="select-character">
    <div class="content">
      <div class="container pt-5">
        <div class="columns">
          <div class="column is-flex is-justify-content-center is-hidden-mobile">
            <figure>
              <img :src="randomCharacter" alt="Random image" />
            </figure>
          </div>
          <div
            class="column is-flex is-justify-content-center animate__animated animate__slideInDown"
            v-if="step === 1"
          >
            <div class="is-relative">
              <div class="notification is-success is-light" v-if="successMessage !== ''">
                {{ successMessage }}
              </div>
            </div>
            <div class="character-box p-4 pb-5" v-if="!isLoading">
              <div class="columns is-multiline is-mobile is-pulled-left">
                <div
                  class="column is-4"
                  v-for="(userCharacter, index) in user.userCharacters"
                  :key="index"
                >
                  <div class="create-box is-flex is-justify-content-center is-align-items-center">
                    <div
                      class="pirate-button is-relative"
                      @click="loginCharacter(userCharacter.id)"
                    >
                      <img
                        :src="getCharacterMini(userCharacter.character.id)"
                        alt="Character mini"
                      />
                      <div
                        class="is-flex is-justify-content-space-evenly character-name-pirate"
                        :class="getCharacterNameFaction(userCharacter.faction)"
                      >
                        <div class="red-button" :class="getCharacterButton(userCharacter.faction)">
                          {{ userCharacter.name }}
                        </div>
                      </div>
                      <div :class="getCharacterLevelFaction(userCharacter.faction)">
                        Nível {{ userCharacter.level }}
                      </div>
                      <button
                        class="delete-button"
                        @click.stop="confirmDeleteCharacter(userCharacter.id)"
                      >
                        deletar
                      </button>
                    </div>
                  </div>
                </div>
                <div class="column is-4" v-for="index in totalAvailable" :key="index">
                  <div class="create-box is-flex is-justify-content-center is-align-items-center">
                    <div
                      class="create-button"
                      :class="{ 'create-vip-button': user.userCharacters.length + index > 9 }"
                      @click="step = 2"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="home-box is-flex is-justify-content-center" v-else>
              <img src="../assets/images/home/loading.gif" alt="Loading image" />
            </div>
          </div>
          <div class="column is-flex is-justify-content-center" v-if="step === 2">
            <div class="character-box p-4 pb-5">
              <h1 class="faction-title">Escolha sua facção</h1>
              <div class="columns is-multiline is-mobile is-pulled-left pt-5">
                <div class="column is-4">
                  <div class="pirate-faction" @click="selectFaction('pirate')"></div>
                </div>
                <div class="column is-4">
                  <div class="marine-faction" @click="selectFaction('marine')"></div>
                </div>
                <div class="column is-4">
                  <div class="revolutionary-faction" @click="selectFaction('revolutionary')"></div>
                </div>
              </div>
              <div class="columns is-centered is-mobile">
                <div class="column is-half is-flex is-justify-content-center">
                  <div class="red-button" @click="step = 1">Cancelar</div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-flex is-justify-content-center" v-if="step === 3">
            <div class="character-box p-4 pb-5">
              <h1 class="faction-title">Escolha seu personagem</h1>
              <div class="columns is-multiline is-mobile is-pulled-left max-size">
                <div class="column is-one-quarter" v-for="index in totalCharacters" :key="index">
                  <div
                    class="select-mini-character is-flex is-justify-content-center is-align-items-center"
                    @click="selectCharacter(index + 1)"
                  >
                    <img :src="images.luffy1MiniImage" alt="Mini character image" />
                  </div>
                </div>
              </div>
              <div class="columns is-centered is-mobile">
                <div class="column is-half is-flex is-justify-content-center">
                  <div class="red-button" @click="step = 2">Cancelar</div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-flex is-justify-content-center" v-if="step === 4">
            <div class="is-relative">
              <div class="notification is-danger is-light" v-if="errorMessage !== ''">
                {{ errorMessage }}
              </div>
            </div>
            <div class="character-box p-4 pb-5" v-if="!isLoading">
              <h1 class="faction-title">Preencha os dados</h1>
              <form @submit.prevent="createCharacter">
                <div class="field">
                  <label class="label">Nome do personagem</label>
                  <div class="control">
                    <input
                      class="input is-borderless"
                      type="text"
                      placeholder="nome"
                      v-model.trim="name"
                    />
                  </div>
                </div>
                <div class="field mb-5">
                  <label class="label">Mar</label>
                  <div class="control">
                    <div class="select is-borderless is-fullwidth">
                      <select v-model="selectedSea">
                        <option value="north-blue">North Blue</option>
                        <option value="east-blue">East Blue</option>
                        <option value="south-blue">South Blue</option>
                        <option value="west-blue">West Blue</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field mb-5">
                  <label class="label">Raça</label>
                  <div class="control">
                    <div class="select is-borderless is-fullwidth">
                      <select v-model="selectedBreed">
                        <option value="human">Humano</option>
                        <option value="dwarf">Anão</option>
                        <option value="giant">Gigante</option>
                        <option value="merman">Tritão (VIP)</option>
                        <option value="cyborg">Ciborgue (VIP)</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="field mb-5">
                  <label class="label">Classe</label>
                  <div class="control">
                    <div class="select is-borderless is-fullwidth">
                      <select v-model="selectedClass">
                        <option value="swordsman">Espadachim</option>
                        <option value="shooter">Atirador</option>
                        <option value="fighter">Lutador</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="is-flex is-justify-content-space-evenly pt-5 mt-5">
                  <div class="red-button" @click="step = 3">Cancelar</div>
                  <button class="red-button green-button" :disabled="isCreateCharacterDisabled">
                    Criar
                  </button>
                </div>
              </form>
            </div>
            <div class="home-box is-flex is-justify-content-center" v-else>
              <img src="../assets/images/home/loading.gif" alt="Loading image" />
            </div>
          </div>
          <div class="column is-flex is-justify-content-center" v-if="step === 0">
            <div class="character-box p-4 pb-5" v-if="!isLoading">
              <h1 class="faction-title">Confirme a sua senha</h1>
              <h2 class="character-alert">
                Lembre-se de que este processo é irreversível. Para confirmar a exclusão de seu
                personagem, confirme sua senha.
              </h2>
              <form @submit.prevent="deleteCharacter">
                <div class="field">
                  <label class="label character-password">Senha</label>
                  <div class="control">
                    <input
                      class="input is-borderless"
                      type="password"
                      placeholder="senha"
                      v-model.trim="password"
                    />
                  </div>
                </div>
                <div class="is-flex is-justify-content-space-evenly pt-5 mt-5">
                  <div class="red-button" @click="cancelDelete">Cancelar</div>
                  <button class="red-button green-button" :disabled="password === ''">
                    Deletar
                  </button>
                </div>
              </form>
            </div>
            <div class="home-box is-flex is-justify-content-center" v-else>
              <img src="../assets/images/home/loading.gif" alt="Loading image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-home"></footer>
  </div>
</template>

<style scoped>
.select-character {
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

.character-box {
  background: url(../assets/images/manage-account/box.png) no-repeat;
  background-size: cover;
  width: 411px;
  height: 672px;
}

@media screen and (max-width: 768px) {
  .character-box {
    width: 100%;
    height: 100%;
  }
}

.create-button {
  background: url(../assets/images/manage-account/create-button.png) no-repeat;
  width: 113px;
  height: 114px;
  cursor: pointer;
}

.create-vip-button {
  background: url(../assets/images/manage-account/character-vip.png) no-repeat;
  width: 113px;
  height: 114px;
  cursor: pointer;
}

.pirate-button {
  background: url(../assets/images/manage-account/character-select-pirate.png) no-repeat;
  width: 113px;
  height: 114px;
  cursor: pointer;
}

.marine-button {
  background: url(../assets/images/manage-account/character-select-marine.png) no-repeat;
  width: 113px;
  height: 114px;
  cursor: pointer;
}

.revolutionary-button {
  background: url(../assets/images/manage-account/character-select-revolutionary.png) no-repeat;
  width: 113px;
  height: 114px;
  cursor: pointer;
}

.pirate-button img,
.marine-button img,
.revolutionary-button img {
  width: 103px;
  height: 104px;
  position: absolute;
  top: 5px;
  left: 5px;
}

.character-name-pirate {
  position: absolute;
  opacity: 0.8;
  top: 80px;
  left: 5px;
}

.character-name-pirate .red-button {
  width: 103px;
  background-size: contain;
}

.character-level-pirate {
  background: #c61316;
  box-shadow: 0 1px 0 #970303;
  border-radius: 3px;
  width: 100px;
  color: #fff;
  text-shadow: 0px 1px 0 #000;
  position: absolute;
  font-size: 12px;
  top: 115px;
  left: 7px;
  font-family: 'Arial';
  text-align: center;
}

.character-level-marine {
  background: #688ba2;
  box-shadow: 0 1px 0 #335374;
  border-radius: 3px;
  width: 100px;
  color: #fff;
  text-shadow: 0px 1px 0 #000;
  position: absolute;
  font-size: 12px;
  top: 115px;
  left: 7px;
  font-family: 'Arial';
  text-align: center;
}

.character-level-revolutionary {
  background: #56ad56;
  box-shadow: 0 1px 0 #117a11;
  border-radius: 3px;
  width: 100px;
  color: #fff;
  text-shadow: 0px 1px 0 #000;
  position: absolute;
  font-size: 12px;
  top: 115px;
  left: 7px;
  font-family: 'Arial';
  text-align: center;
}

.delete-button {
  background-color: #b22426;
  box-shadow: 0 1px 0 #756040;
  font-family: yanone_kaffeesatzregular;
  font-size: 11px;
  color: #fff;
  text-shadow: 0 1px 1px #000;
  border-radius: 4px;
  position: absolute;
  top: 135px;
  left: 37px;
  padding: 2px 8px 1px;
}

.create-box {
  width: 125px;
  height: 135px;
  opacity: 0.6;
}

.create-box:hover {
  background-color: #c9b695;
  border-radius: 5px;
  box-shadow: 5px 5px 10px #ccc;
  opacity: 1;
}

.faction-title {
  font-family: yanone_kaffeesatzregular;
  font-size: 32px;
  color: #928470;
  text-transform: uppercase;
  text-align: center;
}

.pirate-faction {
  background: url(../assets/images/manage-account/luffy-unselected.png) no-repeat;
  width: 114px;
  height: 355px;
  cursor: pointer;
}

.pirate-faction:hover {
  background: url(../assets/images/manage-account/luffy-selected.png) no-repeat;
}

.marine-faction {
  background: url(../assets/images/manage-account/akainu-unselected.png) no-repeat;
  width: 116px;
  height: 355px;
  cursor: pointer;
}

.marine-faction:hover {
  background: url(../assets/images/manage-account/akainu-selected.png) no-repeat;
}

.revolutionary-faction {
  background: url(../assets/images/manage-account/dragon-unselected.png) no-repeat;
  width: 116px;
  height: 355px;
  cursor: pointer;
}

.revolutionary-faction:hover {
  background: url(../assets/images/manage-account/dragon-selected.png) no-repeat;
}

.red-button {
  background: url(../assets/images/manage-account/red-button.png) no-repeat;
  width: 105px;
  height: 31px;
  cursor: pointer;
  font-family: yanone_kaffeesatzregular;
  font-size: 22px;
  text-transform: uppercase;
  text-align: center;
  color: white;
  text-shadow: 0px 2px #111;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}

.green-button {
  background: url(../assets/images/manage-account/green-button.png) no-repeat;
}

.blue-button {
  background: url(../assets/images/manage-account/blue-button.png) no-repeat;
}

.max-size {
  max-height: 530px;
  overflow-y: scroll;
}

.select-mini-character {
  width: 80px;
  height: 80px;
  opacity: 0.5;
  cursor: pointer;
  border-radius: 2px;
  border: 2px solid #dedede;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.3);
}

.select-mini-character img {
  width: 70px;
  height: 70px;
}

.select-mini-character:hover {
  opacity: 1;
}

.input,
.input:focus,
.select select,
.select select:focus {
  box-shadow: -1px 2px 5px #c1a985 !important;
  border-bottom: 1px solid #c1a985;
  border: none;
  font-size: 22px;
  color: #8d7a66;
  background: #f2ebe0;
  font-family: yanone_kaffeesatzregular;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #8d7a66;
  margin-top: 0px;
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

.character-alert {
  font-family: 'yanone_kaffeesatzregular';
  font-size: 20px;
  text-shadow: 0px 1px #572d2c;
  color: #b94a48;
  text-transform: uppercase;
}

.character-password {
  font-family: yanone_kaffeesatzregular;
  font-size: 32px;
  color: #928470;
  text-transform: uppercase;
  text-shadow: 0px 2px #b3a898;
}
</style>
