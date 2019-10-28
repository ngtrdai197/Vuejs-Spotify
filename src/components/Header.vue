<template>
  <div class="container">
    <div class="row h-100">
      <div class="col-3 h-100 d-flex align-items-center">
        <img src="../Spotify/spotify-logo.png" alt />
      </div>
      <div class="col-4 d-flex justify-content-center align-items-center">
        <div class="group-search">
          <img src="../Spotify/magnifying-glass@2x.png" alt />
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      <div class="col-5">
        <div class="notify">
          <img src="../Spotify/notifications-bell-button.png" alt />
        </div>
        <div class="profile">
          <img src="../Spotify/kyle-loftus-592128-unsplash.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.container {
    height: 65px;
  .col-4 {
    .group-search {
      img {
        width: 18px;
        height: 18px;
      }
      input {
        border: none;
        outline: none;
        margin-left: 10px;
        color: #d2d2d2;
        &::placeholder {
          padding-left: 5px;
          font-size: 13px;
        }
      }
    }
  }
  .col-5 {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .profile {
      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
    }
  }
}
</style>