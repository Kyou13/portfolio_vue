import Vue from 'vue'
import Vuex from 'Vuex'
import router from '../router'

Vue.use(Vuex)
const PageTitle = {
  namespaced: true,
  state: {
    title: ["Home", "About", "Works", "Contact"]
  },
  mutations: {},
  actions: {},
  getters: {
    getTitle (state, getters, rootState){
      return state.title[rootState.pageNum]
    }
  }
}

const About = {
  namespaced: true,
  state: {
    biography:[
      {
        year: "2016",
        month: "03",
        title: "鶴岡工業高等専門学校(山形) 制御情報工学科 卒業",
      },
      {
        year: "2016",
        month: "04",
        title: "千葉大学 工学部 情報画像学科 入学",
      },
      {
        year: "2018",
        month: "03",
        title: "千葉大学 工学部 情報画像学科 卒業",
      },
      {
        year: "2018",
        month: "04",
        title: '千葉大学大学院 融合理工学府 数学情報科学専攻 入学',
      }
    ],
    skills:{
      Backend:{
        title: "Backend",
        skill:[
          {
            name: "Django",
            year: true,
            date: 1,
            rate: 3
          },
          {
            name: "Ruby on Rails",
            year: true,
            date: 1,
            rate: 2
          },
          {
            name: "Scala",
            year: false,
            date: 2,
            rate: 1
          },
        ]
      },
      Frontend:{
        title: "Frontend",
        skill:[
          {
          name: "HTML",
          year: true,
          date: 1,
          rate: 20
          },
          {
            name: "CSS",
            year: true,
            date: 1,
            rate: 20
          },
          {
            name: "Javascript",
            year: true,
            date: 1,
            rate: 2.5
          },
          {
            name: "Vue.js",
            year: false,
            date: 1,
            rate: 1
          },
        ]
      },
      MachineLearning:{
        title: "ML・DL",
        skill:[
          {
            name: "Python",
            year: true,
            date: 2,
            rate: 4
          },
          {
            name: "Keras",
            year: true,
            date: 1,
            rate: 3
          },
          {
            name: "Scikit-learn",
            year: false,
            date: 3,
            rate: 2
          },
          {
            name: "Tensorflow",
            year: false,
            date: 1,
            rate: 1
          }
        ]
      },
      DataBase:{
        title: "DB・Server",
        skill:[
          {
            name: "MySQL",
            year: true,
            date: 1,
            rate: 3
          },
          {
            name: "PostgreSQL",
            year: true,
            date: 1,
            rate: 3
          },
          {
            name: "AWS(EC2, RDB)",
            year: true,
            date: 1,
            rate: 3
          },
          {
            name: "GCP(CE)",
            year: false,
            date: 5,
            rate: 2.5
          }
        ]
      }
    },
    hackathon:[
      {
        title: "MICHIKUSA",
        date: "2018/03",
        competition: "第1回 東京公共交通オープンデータチャレンジ",
        award: "INIAD特別賞"
      },
      {
        title: "クーポンマシマシ",
        date: "2018/06",
        competition: "第3回 ジロッカソン",
        award: "優勝"
      },
      {
        title: "日報スカウター",
        date: "2018/08",
        competition: "Hack U 2018 TOKYO",
        award: null
      },
      {
        title: "ばえるーポン",
        date: "2018/12",
        competition: "JP HACKS 2018",
        award: "準優勝"
      }
    ]
  },
  getters: {
    getBiography(state){
      return state.biography
    },
    getSkills(state){
      return state.skills
    },
    getHackathon(state){
      return state.hackathon
    }
  }
}

const Works = {
  namespaced: true,
  state: {
    intern:[
      {
        title: "AAA",
        content: {
          skill: "JAVA",
          description: "JAVA",
          date: "11/11",
        },
      },
      {
        title: "BBB",
        content: {
          skill: "JAVA",
          description: "JAVA",
          date: "11/11",
        },
      }
    ],
    apps:[
      {
        title: "AAA",
        // img:
        content: {
          skill: "JAVA",
          description: "JAVA",
          date: "11/11",
        },
      },
      {
        title: "BBB",
        content: {
          skill: "JAVA",
          description: "JAVA",
          date: "11/11",
        },
      }
    ]
  },
  getters: {
    getIntern(state){
      return state.intern
    },
    getApps(state){
      return state.apps
    }
  }
}


export default new Vuex.Store({
  state: {
    pageNum: 0
  },
  mutations: {
    updatePageNum(state, value){
      state.pageNum = value.pageNum
    }
  },
  actions:{
    tabAction({ commit }, pageNum){
      commit('updatePageNum', { pageNum })
    }
  },
  modules: {
    PageTitle,
    About,
    Works
  }
})
