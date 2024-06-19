<script setup lang="ts">
import { calculateProgressBar, calculateProgressBarWidth, getCharacterMini } from '@/utils/utils';
</script>

<template>
  <div class="header-bg is-flex is-justify-content-flex-end is-align-items-center">
    <div class="user-info-bg">
      <div class="user-coin">500.000</div>
      <RouterLink to="/avatar">
        <img
          :src="getCharacterMini(1)"
          alt="Character mini"
          class="user-avatar"
          v-tooltip="'Clique aqui pra trocar de avatar'"
        />
      </RouterLink>
      <div class="user-name">Test</div>
      <div class="user-level">
        <p>Nível</p>
        <h1>999</h1>
      </div>
      <div class="user-class">Espadachim</div>
      <div class="user-progress">
        <VTooltip>
          <div
            class="user-progress-bar-fill"
            :style="{ width: `${calculateProgressBarWidth(50, 100, 123)}px` }"
          >
            <div class="user-progress-bar">{{ calculateProgressBar(50, 100) }}%</div>
          </div>
          <template #popper> <b>EXPERIÊNCIA:</b> 0 de 5</template>
        </VTooltip>
      </div>
      <div class="user-credit">Créditos: <span>999.999</span></div>
    </div>
  </div>
</template>

<style scoped>
.header-bg {
  background-image: url(../assets/images/layout/header-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 161px;
}

.user-info-bg {
  background-image: url(../assets/images/layout/user-info-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 289px;
  height: 110px;
  position: relative;
}

.user-coin {
  position: absolute;
  top: 1px;
  left: 70px;
  width: 179px;
  height: 20px;
  font-family: 'yanone_kaffeesatzregular';
  color: white;
  text-align: center;
}

.user-coin:before {
  content: '';
  display: inline-block;
  width: 16px;
  height: 17px;
  margin-right: 6px;
  background-image: url('../assets/images/icons/coin.png');
  background-size: contain;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.user-avatar {
  position: absolute;
  top: 25px;
  left: 39px;
  width: 54px;
  height: 54px;
  border: 1px solid #0b4769;
  object-fit: cover;
  box-shadow: 0 0 2px 0 rgb(11, 71, 105);
  border-radius: 15px;
  cursor: pointer;
}

.user-name {
  position: absolute;
  top: 25px;
  left: 98px;
  width: 123px;
  height: 27px;
  font-family: 'yanone_kaffeesatzregular';
  color: #ffc66a;
  font-size: 24px;
  text-shadow: 0 2px 0 #0a5695;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-level {
  position: absolute;
  top: 25px;
  left: 225px;
  background: url('../assets/images/icons/user-level.png') no-repeat;
  width: 47px;
  height: 43px;
}

.user-level p {
  font-family: 'yanone_kaffeesatzregular';
  font-size: 14px;
  color: white;
  position: absolute;
  left: 13px;
}

.user-level h1 {
  font-family: 'yanone_kaffeesatzregular';
  font-size: 30px;
  color: white;
  position: absolute;
  top: -16px;
  left: 4px;
  width: 42px;
  height: 27px;
  font-weight: normal;
  text-align: center;
}

.user-class {
  position: absolute;
  top: 53px;
  left: 115px;
  width: 113px;
  height: 19px;
  font-size: 14px;
  font-family: 'yanone_kaffeesatzregular';
  color: white;
}

.user-progress {
  position: absolute;
  top: 74px;
  left: 115px;
  width: 123px;
  height: 17px;
  background-color: #ededed;
}

.user-progress-bar-fill {
  background: linear-gradient(to right, #41add2 0%, #046a8d 100%);
  width: 123px;
  height: 17px;
}

.user-progress-bar {
  width: 123px;
  height: 17px;
  background: url('../assets/images/icons/user-progress-bar.png') no-repeat;
  font-size: 11px;
  color: #fff;
  text-shadow: 1px 1px 0px #000;
  padding: 1px 0 0 8px;
}

.user-credit {
  position: absolute;
  top: 87px;
  left: 70px;
  width: 179px;
  height: 20px;
  font-family: 'yanone_kaffeesatzregular';
  color: white;
  text-align: center;
  font-size: 12px;
}

.user-credit:before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 15px;
  margin-right: 6px;
  background-image: url('../assets/images/icons/credit.png');
  background-size: contain;
  background-repeat: no-repeat;
  vertical-align: middle;
}

.user-credit span {
  font-size: 16px;
  font-family: 'yanone_kaffeesatzregular';
  color: white;
}
</style>
