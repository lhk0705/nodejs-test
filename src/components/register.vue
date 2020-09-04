<template>

<div>
  <img class="mb-4" src="/docs/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
  <h1 class="h3 mb-3 font-weight-normal">Please register</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" v-model="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" v-model="inputPassword" class="form-control" placeholder="Password" required="">
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" @click="submit">注册</button>
  <p >© 2017-2020</p>
</div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL='http://localhost:8088'
export default {
    data(){
        return{
            inputEmail:'',
            inputPassword:''
        }
    },
    methods:{
        submit(){
           let a={
             "inputEmail"  :this.inputEmail,
             "inputPassword":this.inputPassword
           }
            axios.post('http://localhost:8088/addUser',a)
            .then(res=>{console.log(res);
            this.$router.push('/')
            })
        }
    }

};
</script>

<style>

</style>
