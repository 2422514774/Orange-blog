<template>
  <div class="about">
    <ul class="aboutNav">
      <li
        v-for="item in nav"
        @click="showNav(item.code)"
        :style="cur === item.code ? 'background:#FF66CC;color:#fff;' : ''"
        class="aboutNavItem">
        {{item.title}}
      </li>
    </ul>
    <div class="aboutContent">
      <div v-show="cur === 'me'">
        <ul class="colors">
          <li class="midnightblue">midnightblue</li>
          <li class="blue">blue</li>
          <li class="deepskyblue">deepskyblue</li>
          <li class="cornflowerblues">cornflowerblue</li>
          <li class="lightskyblue">lightskyblue</li>
        </ul>      
      </div>
      <div v-show="cur === 'tech'">
        <ul>
          <li><img src="../public/star.png"><span>html</span></li>
          <li><img src="../public/star.png"><span>css</span></li>
          <li><img src="../public/star.png"><span>javascript</span></li>
          <li><img src="../public/star.png"><span>vue.js</span></li>
        </ul>
      </div>
      <div v-show="cur === 'work'">
        <ul>
          <li><img src="../public/star.png"><span>2019.06 ~ now：work at jiesi</span></li>
        </ul>
      </div>
      <div v-show="cur === 'orange'">
        橘子不是那种性格很好的宠物狗<br><br>
        这反而让他更像个没有烦恼的孩子<br><br>
        面对陌生环境胆小无助<br><br>
        渴望外面的世界<br><br>
        我没能给他足够的关怀<br><br>
        然而他终究还是习惯了家的温暖<br><br>
        橘子和大多数家狗一样都向往外面的自由<br><br>
        喜欢看着窗外和天空<br><br>
        也曾偷偷跑出去闯荡<br><br>
        我也理解了大部分家长的想法<br><br>
        有时候过于牢固的保护不是对孩子的溺爱和禁锢<br><br>
        而是害怕孩子在外面不能好好生活的揪心<br><br>
        <a href="https://photo.smallsunnyfox.com/" target="_blank" style="text-decoration:none;">🍊🍊🍊</a>
      </div>
      <div v-show="cur === 'book'">
        我在看的
        <ul>
          <li><img src="../public/star.png"><span>十宗罪</span></li>
        </ul>
        我喜欢的
        <ul>
          <li><img src="../public/star.png"><span>推理</span></li>
          <li><img src="../public/star.png"><span>动漫</span></li>
          <li><img src="../public/star.png"><span>爱情</span></li>
        </ul>
        2020书单
        <ul>
          <li><img src="../public/star.png"><span>十宗罪</span></li>
          <li><img src="../public/star.png"><span>藏海花</span></li>
          <li><img src="../public/star.png"><span>盗墓笔记</span></li>
          <li><img src="../public/star.png"><span>老子</span></li>
          <li><img src="../public/star.png"><span>龙 一种未明的动物</span></li>
          <li><img src="../public/star.png"><span>死灵之书</span></li>
          <li><img src="../public/star.png"><span>活着</span></li>
          <li><img src="../public/star.png"><span>CODEX塞拉菲尼抄本</span></li>
        </ul>
      </div>
      <div v-show="cur === 'tv'">
        我在追的
        <ul>
          <li><img src="../public/star.png"><span>幸福 触手可及</span></li>
          <li><img src="../public/star.png"><span>沙海</span></li>
          <li><img src="../public/star.png"><span>以家人之名</span></li>
          <li><img src="../public/star.png"><span>人间失格</span></li>
          <li><img src="../public/star.png"><span>古一</span></li>
        </ul>
      </div>
      <div v-show="cur === 'movie'">
        我喜欢的
        <ul>
          <li><img src="../public/star.png"><span>非自然死亡</span></li>
          <li><img src="../public/star.png"><span>与神同行</span></li>
          <li><img src="../public/star.png"><span>犬夜叉</span></li>
        </ul>
      </div>
      <div v-show="cur === 'game'">
        游戏只有和朋友一起玩时才存在意义
        <ul>
          <li><img src="../public/star.png"><span>LOL</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav: [
          { title: '关于我', code: 'me' },
          { title: '技能', code: 'tech' },
          { title: '工作', code: 'work' },
          { title: '橘子', code: 'orange' },
          { title: '书', code: 'book' },
          { title: '剧', code: 'tv' },
          { title: '电影', code: 'movie' },
          { title: '游戏', code: 'game' }
        ],
        cur: 'me'
      }
    },
    methods: {
      showNav(code) {
        this.cur = code
      } 
    }
  }
</script>
