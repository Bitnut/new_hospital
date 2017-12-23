<template>
    <!-- Form -->
    <el-container>
      <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
        <el-dialog title="登录" :visible.sync="dialogFormVisible" style="width:1000px;">
          <el-form :model="form">
            <el-form-item label="账号" :label-width="formLabelWidth">
              <el-input v-model="form.id" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <img src="../assets/weibo.png" style="width:50px; height:50px;" />
            <img src="../assets/qq.png" style="width:50px; height:50px;" />
            <img src="../assets/weixin.png" style="width:50px; height:50px;" />
            <el-popover ref="popover1" placement="top-start" width="200" trigger="hover" content="选择合作企业登录。">
            </el-popover>
            <img src="../assets/hezuo.png" style="width:70px; height:50px;" v-popover:popover1 @click="authorize" /> &nbsp;&nbsp;&nbsp;
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="goLogin">确 定</el-button>
          </div>
        </el-dialog>
    </el-container>
</template>

<script>
  import ElOption from '../../node_modules/element-ui/packages/select/src/option.vue'
  //  import ElSelect from '../../node_modules/element-ui/packages/select/src/select.vue'
  import ElContainer from '../../node_modules/element-ui/packages/container/src/main.vue'
  import ElHeader from '../../node_modules/element-ui/packages/header/src/main.vue'
  import ElAside from '../../node_modules/element-ui/packages/aside/src/main.vue'
  import ElMain from '../../node_modules/element-ui/packages/main/src/main.vue'

  export default {
    components: {
      ElMain,
      ElAside,
      ElHeader,
      ElContainer,
      // ElSelect,
      ElOption
    },
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          id: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '50px'
      }
    },
    methods: {
      goLogin() {
        console.log('login')
        let object = {
          account: this.form.id,
          password: this.form.name
        }
        this.$http.post('/auth/user', object)
          .then((res) => {
            console.log(res.data)
            if (res.data.success) {
              this.$message.success(res.data.info)
              console.log(res.data.shareInfo)
              this.$router.push({
                path: '/userinfo/:info',
                name: 'UserInfo',
                params: {
                  info: {
                    account: this.form.id,
                    shareInfo: res.data.shareInfo,
                    org: 'org1'
                  }
                }
              })
            } else {
              this.$message.error(res.data.info)
            }
          }, (err) => {
            console.log('in post authorize, error is', err)
          })
          // this.$router.push('/login')
      },
      authorize () {
        this.$router.push('/login')
      }
    }
  }

</script>
<style lang="stylus" scoped>

  .el-form-item {
    margin-left: 0px
  }

</style>
