<template>
  <div class="container open1999">
    <h1 class="display-3 open1999-title">高雄市政府開放資料 - Open1999</h1>
    <nav class="navbar navbar-light bg-light open1999-nav">
      <!-- <a class="navbar-brand">搜尋</a> -->
      <form class="form-inline">
        <select id="searchRegion" class="custom-select open1999-region-select" v-model="searchRegion">
          <option value='all'>地區</option>
          <option v-for="(option,index) in regionOption" :key="index" :value="option">
            {{ option }}
          </option>
        </select>
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" v-model="searchKeyword" @keydown.enter.prevent="handleWorkSearch">
        <button class="btn btn-outline-success my-2 my-sm-0" type="button" @click="handleWorkSearch">查詢</button>
      </form>
    </nav>

    <div v-if="openData.length === 0" class="alert alert-info" role="alert">
      很抱歉！找不要您到的資訊。
    </div>

    <div v-else>
      <div class="alert alert-success" role="alert">
        總共查到：{{ openData.length }} 筆資料。
      </div>

      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4" v-for="item in openData" :key="item.FileNo_">
          <div class="card">
            <div class="card-status">
              <label class="btn btn-danger">{{ item.ZipName_  }}</label>
              <label class="btn btn-primary">{{ item.InformDesc_ }}</label>
              <label class="btn btn-warning">{{ item.UnitName_ }}</label>
            </div>

            <div class="card-body">
              <h4 class="card-title">{{ item.InformDesc_ }}</h4>
              <p class="card-text">{{ item.BeforeDesc_ }}</p>
              <p>
                <a :href="getGoogleMap( item.Lat_, item.Lng_ )" target="_blank" class="link">{{ item.address_ }}</a>
              </p>
              <p class="card-text card-data">
                <small class="text-muted">反應日期：{{ item.Cre_Date_ }}</small>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- end eles -->
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      searchRegion: 'all',
      searchKeyword: '',
    }
  },
  computed: {
    ...mapGetters({
      openData: 'getOpenData',
      regionOption: 'getRegionOption',
    }),
  },
  methods: {
    getGoogleMap(lat, lng) {
      return (lat && lng) ? `https://www.google.com/maps/place/${lat},${lng}` : 'javascript:;'
    },
    handleWorkSearch() {
      this.actionSearchKeywordOfOpenData(this.searchKeyword)
    },
    ...mapActions([
      'actionGetOpenData',
      'actionSearchRegionOfOpenData',
      'actionSearchKeywordOfOpenData',
    ]),
  },
  watch: {
    searchRegion(val) {
      this.actionSearchRegionOfOpenData(val)
    },
  },
  mounted() {
    // created Hook 發出 action call API
    this.actionGetOpenData()
      .then((response) => {
        console.log(response)
      })
      .catch((e) => {
        console.log(e)
      })
  },
}
</script>


<style lang="scss">
.open1999 {
  padding-top: 20px;

  .open1999-region-select {
    margin-right: 20px;
  }

  .open1999-title {
    margin-bottom: 3rem;
    margin-top: 1rem;
  }
}

.card {
  margin-bottom: 30px;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, .3);
}

.card-title {
  font-weight: bold;
}



.card-data {
  text-align: right;
}

.card-status {
  padding: 20px 22px 0;
  .btn {
    margin-right: 10px;
  }
}

.card-body {
  .link {
    color: #666;
  }
}

.open1999-nav {
  margin-bottom: 20px;
  justify-content: flex-end;
}
</style>

