<template>

<form class="form-signin"  method="POST">
  <img class="mb-4" src="/docs/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" v-model="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" v-model="inputPassword" class="form-control" placeholder="Password" required="">
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" @click="submit">Sign in</button>
  <p >© 2017-2020</p>
</form>
</template>

<script>
import axios from 'axios'
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

            axios.post('/checkUser',a)
            .then(res=>{
                // for (let user in res.data){
                // a.push(user)}  
                // if(res.data==='登录成功！'){
                //   this.$router.push('/home')
                // }
                // else{this.$router.push('/login')}             
               for(let b of res.data){
               if (b.Email===a.inputEmail&&
               b.Password===a.inputPassword) {
                 this.$router.push('/home');
                 console.log("登录成功");
               } else {
                 this.$router.push('/login');
                 console.log("登录失败");
               }
               }
               })
        }
    }

};
</script>

<style>

</style>