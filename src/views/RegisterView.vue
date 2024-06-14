<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const email = ref('');
const fullName = ref('');
const gender = ref<'m' | 'f'>('m');
const termsAgreed = ref(true);

function register(): void {
  alert(username.value);
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
          <div class="register-background pt-3">
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
                        />
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">Senha</label>
                      <div class="control">
                        <input
                          class="input is-shadowless is-borderless"
                          type="password"
                          placeholder="senha"
                          v-model.trim="password"
                        />
                      </div>
                    </div>
                    <div class="field">
                      <label class="label">E-mail</label>
                      <div class="control">
                        <input
                          class="input is-shadowless is-borderless"
                          type="email"
                          placeholder="e-mail"
                          v-model.trim="email"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="box">
                    <div class="is-size-4 is-uppercase fy cb">Informações adicionais</div>
                    <div class="field">
                      <label class="label">Nome completo</label>
                      <div class="control">
                        <input
                          class="input is-shadowless is-borderless"
                          type="email"
                          placeholder="nome completo"
                          v-model.trim="fullName"
                        />
                      </div>
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
                    <button class="button is-primary">Continuar registro</button>
                  </div>
                </form>
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
</style>
