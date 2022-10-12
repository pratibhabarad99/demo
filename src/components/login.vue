<template>
<div>
  <h1 class="mb-3">Login google</h1>
<form>
  <div class="form-group mb-2">
    <label for="exampleInputEmail1">Enter email </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group mb-2">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-primary mb-2">Submit</button>
  <button type="button" @click="login" class="d-block btn-primary btn">Login Using Google</button>


</form>
</div>
</template>

<script setup>
import { googleTokenLogin } from "vue3-google-login"
const login = () => {
  googleTokenLogin().then((response) => {
    console.log("Handle the response", response)
  }).catch((error)=>{
    console.log("error",error)
  })
}
   
  

</script>
