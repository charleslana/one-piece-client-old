<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ContextComponent from '@/components/ContextComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderTitleComponent from '@/components/HeaderTitleComponent.vue';
</script>

<template>
  <div class="bg">
    <div class="content">
      <div class="container">
        <HeaderComponent />
        <NavBarComponent />
        <div class="columns menu-columns">
          <div class="column is-3 mb-2">
            <MenuComponent />
          </div>
          <div class="column">
            <ContextComponent>
              <template #pd>
                <HeaderTitleComponent title="Vantagens VIP" />
                <table class="table mx-auto">
                  <thead>
                    <tr class="has-text-centered">
                      <th>BENEFÍCIO</th>
                      <th>Conta Comum</th>
                      <th>Conta VIP</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr class="has-text-centered">
                      <th>BENEFÍCIO</th>
                      <th>Conta Comum</th>
                      <th>Conta VIP</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr class="has-text-centered">
                      <td>Desconto nos Hospitais</td>
                      <td><img src="../assets/images/icons/remove.png" alt="Icon image" /></td>
                      <td><img src="../assets/images/icons/checkmark.png" alt="Icon image" /></td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Limite de Personagens</td>
                      <td>6</td>
                      <td>12</td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Bônus de Experiencia</td>
                      <td><img src="../assets/images/icons/remove.png" alt="Icon image" /></td>
                      <td><img src="../assets/images/icons/checkmark.png" alt="Icon image" /></td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Bônus de Berries</td>
                      <td><img src="../assets/images/icons/remove.png" alt="Icon image" /></td>
                      <td><img src="../assets/images/icons/checkmark.png" alt="Icon image" /></td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Avatares por Personagem</td>
                      <td>2</td>
                      <td>Min. 10</td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Regeneração de Stamina</td>
                      <td>1 a cada 4 min.</td>
                      <td>2 a cada 4 min.</td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Treinamento Avançado</td>
                      <td>Max. de 4 horas</td>
                      <td>Max. de 24 horas</td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Mochila Compartilhada</td>
                      <td><img src="../assets/images/icons/remove.png" alt="Icon image" /></td>
                      <td><img src="../assets/images/icons/checkmark.png" alt="Icon image" /></td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Cor Especial no Chat</td>
                      <td><img src="../assets/images/icons/remove.png" alt="Icon image" /></td>
                      <td><img src="../assets/images/icons/checkmark.png" alt="Icon image" /></td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Espaço na Mochila</td>
                      <td>90</td>
                      <td>120</td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Imposto no Mercado</td>
                      <td>10%</td>
                      <td>7%</td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Máximo de Stamina</td>
                      <td>40</td>
                      <td>60</td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Raça Especial</td>
                      <td><img src="../assets/images/icons/remove.png" alt="Icon image" /></td>
                      <td><img src="../assets/images/icons/checkmark.png" alt="Icon image" /></td>
                    </tr>
                    <tr class="has-text-centered">
                      <td>Lutas no Mar Aberto</td>
                      <td>20 por dia</td>
                      <td>30 por dia</td>
                    </tr>
                  </tbody>
                </table>
              </template>
            </ContextComponent>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>

<style scoped>
.table {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
}

.table thead tr {
  color: #666;
  background: #eee;
}
</style>
