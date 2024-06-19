<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';
import MenuComponent from '@/components/MenuComponent.vue';
import ContextComponent from '@/components/ContextComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { ModelSelect } from 'vue-search-select';
import { ref } from 'vue';
import type { SearchSelect } from '@/interfaces/search-select';

const options: SearchSelect[] = [
  { value: '1', text: 'Axe-Hand' },
  { value: '2', text: 'Beheader' },
  { value: '3', text: 'Berserker' },
  { value: '4', text: 'Big Eater' },
  { value: '5', text: 'Big Knife' },
  { value: '6', text: 'Big News' },
  { value: '7', text: 'Black Leg' },
  { value: '8', text: 'Blood Letter' },
  { value: '9', text: 'Blue Pheasant' },
  { value: '10', text: 'Bohemian Knight' },
  { value: '11', text: 'Boss' },
  { value: '12', text: 'Broken Hat' },
  { value: '13', text: 'Brutal Bull' },
  { value: '14', text: 'Cannibal' },
  { value: '15', text: 'Captain' },
  { value: '16', text: 'Cat Burglar' },
  { value: '17', text: 'Catcher-Killing' },
  { value: '18', text: 'Champion' },
  { value: '19', text: 'Chaser' },
  { value: '20', text: 'Colossal Battleship' },
  { value: '21', text: 'Corrupt King' },
  { value: '22', text: 'Cotton Candy Lover' },
  { value: '23', text: 'Courier' },
  { value: '24', text: 'Crab-Hand' },
  { value: '25', text: 'Crane Rider' },
  { value: '26', text: 'Crescent Moon Hunter' },
  { value: '27', text: 'Cyborg' },
  { value: '28', text: 'Dark King' },
  { value: '29', text: 'Death God' },
  { value: '30', text: 'Demon Bamboo' },
  { value: '31', text: 'Demon Lady' },
  { value: '32', text: 'Demon Sheriff' },
  { value: '33', text: 'Desert King' },
  { value: '34', text: 'Destruction Cannon' },
  { value: '35', text: 'Devil Child' },
  { value: '36', text: 'Diva' },
  { value: '37', text: 'Doctrine' },
  { value: '38', text: 'Don' },
  { value: '39', text: 'Double Iron Fist' },
  { value: '40', text: 'Duke' },
  { value: '41', text: 'Evening Shower' },
  { value: '42', text: 'Evil Spirit' },
  { value: '43', text: 'Fake Straw Hat' },
  { value: '44', text: 'Fighting King' },
  { value: '45', text: 'Fire Fist' },
  { value: '46', text: 'Flag-Bearer of Freedom' },
  { value: '47', text: 'Flame Emperor' },
  { value: '48', text: 'Flaming' },
  { value: '49', text: 'Flower Sword' },
  { value: '50', text: 'Foul Play' },
  { value: '51', text: 'Foxfire' },
  { value: '52', text: 'Full Power' },
  { value: '53', text: 'Full-Dash' },
  { value: '54', text: 'Gang' },
  { value: '55', text: 'Garuda' },
  { value: '56', text: 'Ghost Princess' },
  { value: '57', text: 'Golden Lion' },
  { value: '58', text: 'Gourmet Knight' },
  { value: '59', text: 'Great Knight of the Sea' },
  { value: '60', text: 'Great Staff' },
  { value: '61', text: 'Green Bull' },
  { value: '62', text: 'Hanger-on' },
  { value: '63', text: 'Hawk Eyes' },
  { value: '64', text: 'Heavy Drinker' },
  { value: '65', text: 'Hero of Slaves' },
  { value: '66', text: 'Hero of the Colosseum' },
  { value: '67', text: 'Hero of the Marines' },
  { value: '68', text: 'Ice Witch' },
  { value: '69', text: 'Iron Boy' },
  { value: '70', text: 'Iron Fist' },
  { value: '71', text: 'Iron Man' },
  { value: '72', text: 'Iron Mask' },
  { value: '73', text: 'Jr.' },
  { value: '74', text: 'Killers of the Snowy Mountain' },
  { value: '75', text: 'King of Miracles' },
  { value: '76', text: 'King of the Snipers' },
  { value: '77', text: 'King the Conflagration' },
  { value: '78', text: 'Knight of the Sea' },
  { value: '79', text: 'Large Monk' },
  { value: '80', text: 'Liar' },
  { value: '81', text: 'Light of the Revolution' },
  { value: '82', text: 'Loan Shark' },
  { value: '83', text: 'Machete' },
  { value: '84', text: 'Mad Monk' },
  { value: '85', text: 'Maelstrom Spider' },
  { value: '86', text: 'Man-Demon' },
  { value: '87', text: 'Marine Hunter' },
  { value: '88', text: 'Massacre Ruler' },
  { value: '89', text: 'Massacre Soldier' },
  { value: '90', text: 'Massacre Weapon' },
  { value: '91', text: 'Master' },
  { value: '92', text: 'Master of the Sky' },
  { value: '93', text: 'Mermaid Princess' },
  { value: '94', text: 'Miracle Person' },
  { value: '95', text: 'Miss Universe' },
  { value: '96', text: 'Missionary' },
  { value: '97', text: 'Monster Gun' },
  { value: '98', text: 'Moonflower' },
  { value: '99', text: 'Mountain Beard' },
  { value: '100', text: 'Mountain Wind' },
  { value: '101', text: 'Mugiwara' },
  { value: '102', text: 'Nailing' },
  { value: '103', text: 'Noble of Fish-Man District' },
  { value: '104', text: 'of a Hundred Plans' },
  { value: '105', text: 'of Fur' },
  { value: '106', text: 'of the Beasts' },
  { value: '107', text: 'of the Border' },
  { value: '108', text: 'of the Crescent-Moon' },
  { value: '109', text: 'of the Flower' },
  { value: '110', text: 'of the Forest' },
  { value: '111', text: 'Pirate Empress' },
  { value: '112', text: 'Pirate Hunter' },
  { value: '113', text: 'Pirate King' },
  { value: '114', text: 'Pirate Prince' },
  { value: '115', text: 'Poison Pink' },
  { value: '116', text: 'Poison Spider' },
  { value: '117', text: 'Pretended Sleep' },
  { value: '118', text: 'Prometheus the Sun' },
  { value: '119', text: 'Rebar' },
  { value: '120', text: 'Rebellious Dragon' },
  { value: '121', text: 'Red Dog' },
  { value: '122', text: 'Red Flag' },
  { value: '123', text: 'Red-Haired' },
  { value: '124', text: 'Red-Leg' },
  { value: '125', text: 'Right Hand of the Pirate King' },
  { value: '126', text: 'Roar of the Sea' },
  { value: '127', text: 'Rope-Tugging' },
  { value: '128', text: 'Ruler of Day' },
  { value: '129', text: 'Ruler of Night' },
  { value: '130', text: 'Salvage King' },
  { value: '131', text: 'Shandoras Demon' },
  { value: '132', text: 'Shark Cutter' },
  { value: '133', text: 'Ship Cutter' },
  { value: '134', text: 'Silver Axe' },
  { value: '135', text: 'Sir' },
  { value: '136', text: 'Six-Sword Style' },
  { value: '137', text: 'Sky Boss' },
  { value: '138', text: 'Sky Breeder' },
  { value: '139', text: 'Sky Knight' },
  { value: '140', text: 'Sky Rider' },
  { value: '141', text: 'Snake Princess' },
  { value: '142', text: 'Snake-Eyes' },
  { value: '143', text: 'Snow Woman' },
  { value: '144', text: 'Sonar King' },
  { value: '145', text: 'Soul King' },
  { value: '146', text: 'Spanda' },
  { value: '147', text: 'Sparking Red' },
  { value: '148', text: 'Square Sisters' },
  { value: '149', text: 'Straw Hat' },
  { value: '150', text: 'Strongest Swordsman in the World' },
  { value: '151', text: 'Surgeon of Death' },
  { value: '152', text: 'Sweeper' },
  { value: '153', text: 'Sword God' },
  { value: '154', text: 'Tackle Machine' },
  { value: '155', text: 'The Acrobat' },
  { value: '156', text: 'The Adventurer' },
  { value: '157', text: 'The Bandit' },
  { value: '158', text: 'The Beast Tamer' },
  { value: '159', text: 'The Big-Time Rookie' },
  { value: '160', text: 'The Black Cage' },
  { value: '161', text: 'The Blue Ogre' },
  { value: '162', text: 'The Buddha' },
  { value: '163', text: 'The Clown' },
  { value: '164', text: 'The Concealer' },
  { value: '165', text: 'The Continent-Puller' },
  { value: '166', text: 'The Devil' },
  { value: '167', text: 'The Drill' },
  { value: '168', text: 'The Drought' },
  { value: '169', text: 'The Executioner' },
  { value: '170', text: 'The Falcon' },
  { value: '171', text: 'The Fist' },
  { value: '172', text: 'The Hedgehog' },
  { value: '173', text: 'The Hero' },
  { value: '174', text: 'The Hexagon' },
  { value: '175', text: 'The Hyena' },
  { value: '176', text: 'The Iron Wall' },
  { value: '177', text: 'The Jackal' },
  { value: '178', text: 'The Kappa' },
  { value: '179', text: 'The Killer' },
  { value: '180', text: 'The Lingering Snow' },
  { value: '181', text: 'The Magician' },
  { value: '182', text: 'The Man Closest to One Piece' },
  { value: '183', text: 'The Man-Killer' },
  { value: '184', text: 'The Manslayer' },
  { value: '185', text: 'The Phantom Princess' },
  { value: '186', text: 'The Phoenix' },
  { value: '187', text: 'The Plague' },
  { value: '188', text: 'The Pursuer' },
  { value: '189', text: 'The Red Ogre' },
  { value: '190', text: 'The Resourceful General' },
  { value: '191', text: 'The Saw' },
  { value: '192', text: 'The Sea Weasel' },
  { value: '193', text: 'The Silent' },
  { value: '194', text: 'The Silver Fox' },
  { value: '195', text: 'The Star Clown' },
  { value: '196', text: 'The Strongest Creature' },
  { value: '197', text: 'The Strongest Man in the World' },
  { value: '198', text: 'The Supersonic' },
  { value: '199', text: 'The Thundercloud' },
  { value: '200', text: 'The Turncoat' },
  { value: '201', text: 'The Undefeated Woman' },
  { value: '202', text: 'The White Hunter' },
  { value: '203', text: 'Thousand Arms' },
  { value: '204', text: 'Three Tongued' },
  { value: '205', text: 'Three-headed' },
  { value: '206', text: 'Thunder Lord' },
  { value: '207', text: 'Tin-Plate' },
  { value: '208', text: 'Town-Dropper' },
  { value: '209', text: 'Tyrant' },
  { value: '210', text: 'Underworld' },
  { value: '211', text: 'Warrior' },
  { value: '212', text: 'Water Buffalo' },
  { value: '213', text: 'Waterfall Beard' },
  { value: '214', text: 'Wet-Haired' },
  { value: '215', text: 'White Horse' },
  { value: '216', text: 'Who of the Droplets' },
  { value: '217', text: 'Winch Green' },
  { value: '218', text: 'Wise King' },
  { value: '219', text: 'Wisteria Tiger' },
  { value: '220', text: 'Witch' },
  { value: '221', text: 'Worlds Worst Criminal' }
];
const item = ref('');
const searchText = ref('');
const isDisabled = ref(false);

function search(text: string): void {
  searchText.value = text;
  console.log('searchText', searchText.value);
  console.log('item', item.value);
}

function handleSelectItem(selectedItem: SearchSelect): void {
  console.log('Selected item:', selectedItem);
}
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
                <div class="nicknames-bg">
                  <div class="columns is-multiline is-vcentered">
                    <div class="column is-6">
                      <img
                        src="../assets/images/nicknames/sanjuan-wolf.png"
                        alt="Character image"
                      />
                    </div>
                    <div class="column is-6">
                      <div class="nicknames-box">
                        <h2>Alcunhas</h2>
                        <p>Você não tem nenhuma alcunha.</p>
                        <ModelSelect
                          :options="options"
                          v-model="item"
                          placeholder="Pesquise a Alcunha"
                          @searchchange="search"
                          @update:modelValue="handleSelectItem"
                          :is-disabled="isDisabled"
                        />
                      </div>
                    </div>
                  </div>
                </div>
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
.nicknames-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 600px;
  border-radius: 10px;
  border: 3px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  background-image: url(../assets/images/nicknames/background.jpg);
  align-items: center;
  display: flex;
  justify-content: center;
}

.nicknames-bg img {
  object-fit: none;
}

.nicknames-box {
  background-color: rgba(249, 251, 255, 0.85);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  min-width: 270px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nicknames-box h2 {
  background-color: rgba(27, 137, 183, 0.6);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
}
</style>
