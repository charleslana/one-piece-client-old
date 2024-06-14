<script setup lang="ts">
// import router from '@/router';
import { computed, ref } from 'vue';
import AlertComponent from '@/components/AlertComponent.vue';

const username = ref('');
const password = ref('');
const email = ref('');
const fullName = ref('');
const gender = ref<'m' | 'f'>('m');
const termsAgreed = ref(true);
const usernameRequired = ref(false);
const passwordRequired = ref(false);
const emailRequired = ref(false);
const fullNameRequired = ref(false);
const isDisabled = ref(false);
const alertMessage = ref('');
const isSuccess = ref(false);

const isRegisterDisabled = computed(() => {
  return termsAgreed.value === false || isDisabled.value === true;
});

function register(): void {
  usernameRequired.value = true;
  passwordRequired.value = true;
  emailRequired.value = true;
  fullNameRequired.value = true;
  if (!username.value || !password.value || !email.value || !fullName.value) {
    return;
  }
  isDisabled.value = true;
  setTimeout(() => {
    const error = false;
    if (error) {
      isDisabled.value = false;
      alertMessage.value = 'Error';
      return;
    }
    isSuccess.value = true;
    // router.push({ name: 'register-success' });
  }, 1000);
}

console.log('%c Warning', 'font-size: 2em; color: yellow;');
console.log('%c Error', 'font-size: 2em; color: red;');
console.log('%c All good!', 'font-size: 2em; color: green;');
</script>

<template>
  <div class="register">
    <div class="content">
      <div class="container">
        <div class="box register-box">
          <div class="register-background pt-3" v-if="!isSuccess">
            <div class="columns is-centered">
              <div class="column is-one-third">
                <form @submit.prevent="register">
                  <div class="box">
                    <div class="is-size-4 is-uppercase fy co">Informações de Login</div>
                    <div class="field">
                      <label class="label">Usuário</label>
                      <div class="control">
                        <input
                          class="input is-shadowless is-borderless"
                          type="text"
                          placeholder="username"
                          v-model.trim="username"
                          :class="{ 'is-danger': usernameRequired && !username }"
                        />
                      </div>
                      <p class="help is-danger" v-if="usernameRequired && !username">
                        O nome do usuário é obrigatório
                      </p>
                    </div>
                    <div class="field">
                      <label class="label">Senha</label>
                      <div class="control">
                        <input
                          class="input is-shadowless is-borderless"
                          type="password"
                          placeholder="senha"
                          v-model.trim="password"
                          :class="{ 'is-danger': passwordRequired && !password }"
                        />
                      </div>
                      <p class="help is-danger" v-if="passwordRequired && !password">
                        A senha é obrigatória
                      </p>
                    </div>
                    <div class="field">
                      <label class="label">E-mail</label>
                      <div class="control">
                        <input
                          class="input is-shadowless is-borderless"
                          type="email"
                          placeholder="e-mail"
                          v-model.trim="email"
                          :class="{ 'is-danger': emailRequired && !email }"
                        />
                      </div>
                      <p class="help is-danger" v-if="emailRequired && !email">
                        O email é obrigatório
                      </p>
                    </div>
                  </div>
                  <div class="box">
                    <div class="is-size-4 is-uppercase fy cb">Informações adicionais</div>
                    <div class="field">
                      <label class="label">Nome completo</label>
                      <div class="control">
                        <input
                          class="input is-shadowless is-borderless"
                          type="text"
                          placeholder="nome completo"
                          v-model.trim="fullName"
                          :class="{ 'is-danger': fullNameRequired && !fullName }"
                        />
                      </div>
                      <p class="help is-danger" v-if="fullNameRequired && !fullName">
                        O nome completo é obrigatório
                      </p>
                    </div>
                    <div class="field">
                      <label class="label">Gênero</label>
                      <div class="control">
                        <label class="radio">
                          <input type="radio" value="m" v-model="gender" />
                          Masculino
                        </label>
                        <label class="radio">
                          <input type="radio" value="f" v-model="gender" />
                          Feminino
                        </label>
                      </div>
                    </div>
                    <div class="field">
                      <label class="checkbox">
                        <input type="checkbox" v-model="termsAgreed" />
                        Li e concordo com os Termos de Uso do jogo.
                      </label>
                    </div>
                    <button
                      class="button is-primary"
                      :class="{ 'is-loading': isRegisterDisabled }"
                      :disabled="isRegisterDisabled"
                    >
                      Continuar registro
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="pt-3 mt-5" v-else>
            <div class="box register-box-success">
              <div class="columns">
                <div class="column">
                  <figure>
                    <img
                      src="../assets/images/register/register-nami.png"
                      alt="Register nami image"
                    />
                  </figure>
                </div>
                <div class="column">
                  <h1>Registrar</h1>
                  <p>
                    Seu cadastro foi realizado no com sucesso. Entre agora e crie seu personagem.
                  </p>
                  <button class="button is-warning" @click="$router.push({ name: 'home' })">
                    Fazer login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container is-flex is-flex-direction-column is-align-items-flex-end">
        <a href="#" target="_blank" class="has-text-white">Politica de Privacidade</a>
        <a href="#" target="_blank" class="has-text-white">Termos de uso</a>
      </div>
    </footer>
  </div>
  <AlertComponent :message="alertMessage" @close="alertMessage = ''" />
</template>

<style scoped>
.register {
  background-image: url(../assets/images/layout/grain.png),
    url(../assets/images/layout/background.png),
    linear-gradient(
      180deg,
      rgba(15, 23, 42, 1) 0%,
      rgba(30, 41, 59, 1) 35%,
      rgba(51, 65, 85, 1) 100%
    );
  background-repeat: repeat, no-repeat;
  background-position: top center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.register-box {
  background-image: url(../assets/images/layout/content-top.png);
  background-repeat: no-repeat;
  background-size: 100% 56px;
  box-shadow: 0px 4px 0px #008af3;
}

.register-background {
  width: 100%;
  min-height: 331px;
  background: url(../assets/images/register/register.jpg) top center no-repeat;
  background-size: cover;
  margin-top: 35px;
}

.button {
  font-family: 'yanone_kaffeesatzregular';
}

.footer {
  background: url(../assets/images/layout/footer.png) no-repeat;
  background-position: center;
  width: 100%;
  height: 175px;
}

.register-box-success {
  background-image: url(../assets/images/register/register-pattern.png);
  background-repeat: repeat;
  background-size: 6px 39px;
}
</style>
