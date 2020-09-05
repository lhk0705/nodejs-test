<template>

<div>
  <img class="mb-4" src="/docs/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
  <h1 class="h3 mb-3 font-weight-normal">Please register</h1>
    <label for="userId" class="sr-only">userId</label>
  <input type="userId" v-model="userId" class="form-control" placeholder="userId" required="">
  <label for="email" class="sr-only">Email address</label>
  <input type="email" v-model="email" class="form-control" placeholder="Email address" required="" autofocus="">
  <label for="password" class="sr-only">Password</label>
  <input type="password" v-model="password" class="form-control" placeholder="Password" required="">
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
          userId:'',
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
           let a={
             "userId":this.userId,
             "email"  :this.email,
             "password":this.password
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
