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
    title: 'About',
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
            name: "Pandas",
            year: false,
            date: 5,
            rate: 2
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
    },
    getTitle(state){
      return state.title
    }
  }
}

const Works = {
  namespaced: true,
  state: {
    title: 'Works',
    isShowModal: false,
    modalIndex: 0,
    intern:[
      {
        title: "AAA",
          skill: "JAVA",
          description: "JAVA",
          date: "11/11",
      },
      {
        title: "BBB",
          skill: "JAVA",
          description: "JAVA",
          date: "11/11",
      }
    ],
    apps:[
      {
        title: "MICHIKUSA",
        WorkImg: require("@/assets/profile.png"),
        skills: ['Ruby on Rails', 'Python'],
        description: "機械学習を用いたレコメンドシステム．Twitterから集めたツイートをもとに観光地のおすすめ度を機械学習により計算",
        date: "2018/05",
      },
      {
        title: "AIイベントカレンダー",
        WorkImg: require("@/assets/profile.png"),
        skills: ['Django','Python'],
        description: "AI系イベントを効率よく収集するために作成．クローリングして集めたデータを一覧で表示，テキストデータによる出力も行っている．",
        date: "2018/04",
      },
      {
        title: "クーポンマシマシ",
        WorkImg: require("@/assets/profile.png"),
        skills: ['Ruby on Rails', 'Python'],
        description: "SNSに投稿されたラーメン二郎の画像をAIで分析．二郎っぽいほど割引額の高いクーポンを発行．",
        date: "2018/06",
      },
      {
        title: "日報スカウター",
        WorkImg: require("@/assets/profile.png"),
        skills: ['Ruby on Rails', 'Python'],
        description: "日報の内容をAIで評価するSNS風アプリ。日報の新たな可能性を提案した．",
        date: "2018/08",
      },
      {
        title: "ばえるーポン",
        WorkImg: require("@/assets/profile.png"),
        skills: ['Ruby on Rails', 'Python'],
        description: "SNSに投稿された画像をAIで分析．写真のクオリティによってクーポンの割引率を決定し，発行する．",
        date: "2018/12",
      },
    ]
  },
  mutations: {
    show(state){
      state.isShowModal = true
    },
    hide(state){
      state.isShowModal = false
    },
    setIndex(state, index){
      state.modalIndex = index
    }
  },
  actions: {
    showModal({commit}, index){
      commit('setIndex', index)
      commit('show')
    },
    hideModal({commit}){
      commit('hide')
    }
  },
  getters: {
    getInterns(state){
      return state.intern
    },
    getApps(state){
      return state.apps
    },
    getApp: state => index => {
      return state.apps[index]
    },
    getIntern: state => index => {
      return state.intern[index]
    },
    getTitle(state){
      return state.title
    },
    getShowModal(state){
      return state.isShowModal
    },
    getAppsModal(state){
      return state.apps[state.modalIndex]
    },
    getInternModal(state){
      return state.intern[state.modalIndex]
    }
  }
}

const Contact = {
  namespaced: true,
  state: {
    title: 'Contact',
    profileImage: require("@/assets/profile.png"),
    accounts: [
      {
        isStackActive: false,
        link: 'https://github.com/Kyou13',
        icon: [{
          prefix: 'fab',
          iconName: 'github-square',
          className: 'fa-2x'
        }]
      },
      {
        isStackActive: false,
        link: 'https://www.facebook.com/kyohei.saito.77',
        icon: [{
        prefix: 'fab',
        iconName: 'facebook',
        className: 'fa-2x'
        }]
      },
      {
        isStackActive: false,
        link: 'https://www.instagram.com/kyoppygraphy/',
        icon: [{
        prefix: 'fab',
        iconName: 'instagram',
        className: 'fa-2x'
        }]
      },
      {
        isStackActive: true,
        link: 'https://qiita.com/Kyou13',
        icon: [
          {
            prefix: 'fas',
            iconName: 'square',
            className: 'fa-stack-2x'
          },
          {
            prefix: 'fas',
            iconName: 'search',
            className: 'fa-stack-1x fa-inverse fa-2x'
          }
        ]
      }
    ]
  },
  getters: {
    getProfileImg(state){
      return state.profileImage
    },
    getTitle(state){
      return state.title
    },
    getAccounts(state){
      return state.accounts
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
    Works,
    Contact
  }
})
