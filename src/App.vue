<template>
  <div class="container border">
    <div class="card border">
      <div class="card-banner border">
        결정장애를 위한 최고의 돌림판
      </div>
      <div class="card-title border">
        오늘 저녁 뭐먹지?
      </div>
      <div class="card-sub-title border">
        룰렛을 돌려 오늘의 저녁 메뉴를 골라보세요!
      </div>
      <div class="card-img border">
        <img
            :src="세계음식데이터[현재인덱스0부터끝까지순환하면서리턴].img"
            :alt="세계음식데이터[현재인덱스0부터끝까지순환하면서리턴].name"
            @click="룰렛시작종료()"
        />
      </div>
      <div class="card-text border">
        <span>{{세계음식데이터[현재인덱스0부터끝까지순환하면서리턴].name}}</span>
      </div>
    </div>
    <div class="bottom border">
<!--      여기에 만들어 보세요!-->
      <div class="filter border"></div>
      <div class="img-box border">
        <div v-for="row in 2" :key="row" class="row">
          <div v-for="col in 3" :key="col" class="box">
            <div class=""></div>
            [{{ row }},{{ col }}]
          </div>
        </div>
      </div>
      <div class="btn-box border"></div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

// 음식의 데이터 타입지정
type 음식 = {
  name: string
  national: string
  category: string
  img: string
}

@Component
export default class APP extends Vue {
  //TODO: 데이터 추가 더 해보기
  세계음식데이터: 음식[] = [
    {
      name: '찜갈비',
      national: '한식',
      category: '요리',
      img: require('../src/assets/imgs/찜갈비.jpg'),
    },
    {
      name: '불고기',
      national: '한식',
      category: '요리',
      img: require('../src/assets/imgs/불고기.jpg'),
    },
    {
      name: '비빔밥',
      national: '한식',
      category: '밥',
      img: require('../src/assets/imgs/비빔밥.jpg'),
    },
    {
      name: '잔치국수',
      national: '한식',
      category: '면',
      img: require('../src/assets/imgs/잔치국수.jpg'),
    },
    {
      name: '잡채',
      national: '한식',
      category: '면',
      img: require('../src/assets/imgs/잡채.jpg'),
    },
    {
      name: '탕수육',
      national: '중식',
      category: '요리',
      img: require('../src/assets/imgs/탕수육.jpg'),
    },
    {
      name: '깐풍기',
      national: '중식',
      category: '요리',
      img: require('../src/assets/imgs/깐풍기.jpg'),
    },
    {
      name: '볶음밥',
      national: '중식',
      category: '밥',
      img: require('../src/assets/imgs/볶음밥.jpg'),
    },
    {
      name: '짜장면',
      national: '중식',
      category: '면',
      img: require('../src/assets/imgs/짜장면.jpg'),
    },
    {
      name: '짬뽕',
      national: '중식',
      category: '면',
      img: require('../src/assets/imgs/짬뽕.jpg'),
    },
    {
      name: '나베',
      national: '일식',
      category: '요리',
      img: require('../src/assets/imgs/나베.jpg'),
    },
    {
      name: '초밥',
      national: '일식',
      category: '밥',
      img: require('../src/assets/imgs/초밥.jpg'),
    },
    {
      name: '텐동',
      national: '일식',
      category: '밥',
      img: require('../src/assets/imgs/텐동.jpg'),
    },
    {
      name: '라멘',
      national: '일식',
      category: '면',
      img: require('../src/assets/imgs/라멘.jpg'),
    },
    {
      name: '소바',
      national: '일식',
      category: '면',
      img: require('../src/assets/imgs/소바.jpg'),
    },
  ];
  룰렛시작종료스위치 = false;
  현재인덱스 = 0;

  get 현재인덱스0부터끝까지순환하면서리턴(){
    if (this.룰렛시작종료스위치) {
      setTimeout(() => {
        this.현재인덱스++;
        if (this.현재인덱스 === this.세계음식데이터.length - 1) {
          this.현재인덱스 = 0;
        }
      }, 2);
    }
    return this.현재인덱스;
  }

  룰렛시작종료() {
    this.룰렛시작종료스위치 = !this.룰렛시작종료스위치;
  }
}

export const DataMixin= {
  data() {
    return {
      boxes: [1, 2, 3, 4] // 박스에 표시될 내용을 배열로 지정
    };
  }
};

</script>
<style>
.border{
  border: 1px solid black;
}
body {
  margin: 0;
  padding: 0;
  background-color: #2B75FF
}

.container {
  padding: 2rem 0;
}

.card {
  width: 400px;
  margin: auto;
  text-align: center;
}

.card-banner {
  background-color: #2C3E50;
  color: #ffffff;
  font-size: 1.7rem;
  padding: 0.3rem 0;
}

.card-title {
  color: #F1E90C;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 1rem 0;
}

.card-sub-title {
  font-size: 1.2rem;
  color: #ffffff;
}

.card-img {
  text-align: center;
  padding: 2rem;
  cursor: pointer;

}

.card-img img {
  width: 300px;
  height: 300px;
  border-radius: 100%;
  object-fit: cover;
}

.card-img img:hover {
  opacity: 0.7;
}

.card-text {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: #ffffff;
}

.bottom{
  width: 600px;
  height: 600px;
  margin: auto;
}

.filter{
  width: 600px;
  height: 100px;
}

.img-box{
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
}

.box {
  width: 180px;
  height: 180px;
  border: 1px solid black;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-box{
  width: 600px;
  height: 100px;
}
</style>
