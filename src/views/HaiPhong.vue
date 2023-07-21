<template>
  <div style="background-color: rgba(224, 225, 225, 0.77); height: auto;">
    <a-row id="background__HP" style="background-color: aquamarine; height: 700px; width: 100%;">
      <div id="content__background">
        Well come to Hai Phong
        City
      </div>
    </a-row>

    <a-row>
      <div id="main">
        <div id="content__main" style="background-color: blueviolet; height: 150px;">
          <div id="main__1"
            style="font-size: 30px; display: flex; justify-content: center; text-align: center; color: antiquewhite; ">The
            port city of
            Vietnam
          </div>
          <div style="display: flex; justify-content: center; text-align: center; font-size: 15px; color: yellow;"> ____
          </div>
          <div
            style="margin-top: 5%; display: flex; justify-content: center; text-align: center; font-size: 15px; color: antiquewhite; ">
            Hai Phong people live with quality, Hai Phong does not go around
          </div>
        </div>
        <div style="background-color: #0fae8d; height: 250px;">
          <div id="main__2" style="display: flex;">
            <div style="flex: 1; ">
              <div
                style="display: flex; justify-content: center; text-align: center; margin-top: 25%; font-size: 25px; color:#f7fbbe;">
                Red Phoenix flower <br> City
              </div>

            </div>
            <div id="main__2--background" style=" flex: 2; height: 250px; 
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;">

            </div>
          </div>
        </div>
        <div style="background-color: beige; height: 250px;">
          <div id="main__3" style="display: flex;">
            <div id="main__3--background" style="flex: 1;background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;">

            </div>
            <div id="main__--background" style=" flex: 2; height: 250px;">
              <div>
                experience attractive tourist destinations. Beautiful enchanting and release soul into nature. Let's
                experience the service here
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-row>
  </div>
</template>

<script>

export default {
  name: "HaiPhong",
  components: {

  },
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style>
#background__HP {
  background-image: url('../assets/images/cangbien.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

#content__background {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 15%;
  font-size: 60px;
  color: rgb(253, 253, 253);
}

#main {
  background-color: blue;
  margin: 0 auto;
  max-width: 960px;
  height: 650px;
  margin-top: -5%;
}

#main__1 {
  font-size: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 5px;
}

#main__2--background {
  background-image: url('../assets/images/hoaphuong.jpg');
}

#main__3--background {
  background-image: url('../assets/images/catba.jpg');
}
</style>