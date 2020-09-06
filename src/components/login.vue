<template>

<div>
  <img class="mb-4" src="/docs/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
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
  <button class="btn btn-lg btn-primary btn-block" @click="submit">Sign in</button>
  <p >© 2017-2020</p>
</div>
</template>

<script>
import axios from 'axios'
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

            axios.post('/checkUser',a)
            .then(res=>{
                // for (let user in res.data){
                // a.push(user)}  
                // if(res.data==='登录成功！'){
                //   this.$router.push('/home')
                // }
                // else{this.$router.push('/login')}             
              
              var user=res.data[0]
              console.log(user)
               if (user.password===a.password) {
                console.log("登录成功");
                 this.$router.push('/home');
                 
               } else {
                //  this.$router.go(0);
                 console.log("登录失败");
                 alert("请输入正确的账号密码！")
               }
               

               
               })
        }
    }

};
</script>

<style>

</style>