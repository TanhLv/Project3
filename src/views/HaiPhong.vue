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
        <div id="content__main" style=" height: 150px;">
          <div id="main__1"
            style="font-size: 30px; display: flex; justify-content: center; text-align: center; color: #656362; ">The
            port city of
            Vietnam
          </div>
          <div style="display: flex; justify-content: center; text-align: center; font-size: 20px; color: #0fae8d;">
            ____
          </div>
          <div
            style="margin-top: 5%; display: flex; justify-content: center; text-align: center; font-size: 15px; color: #656362; ">
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
              <div style="display: flex; 
                justify-content: center; 
                text-align: center;
                margin-top: 15%;
                font-size: 18px;
                margin-left: 2%;
                margin-right: 2%;
                color: #656362">
                experience attractive tourist destinations. Beautiful enchanting and release soul into nature. Let's
                experience the service here
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-row>



    <a-row style="margin-top: 15%;">
      <div id="main">
        <div style="background-color: #0fae8d; height: 250px;">
          <div id="main__2" style="display: flex;">
            <div id="background_bdc" style=" flex: 2; height: 250px; 
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;">
            </div>
            <div style="flex: 1; ">
              <div
                style="display: flex; justify-content: center; text-align: center; margin-top: 25%; font-size: 25px; color:#f7fbbe;">
                Red Phoenix flower <br> City
              </div>
            </div>
          </div>
        </div>
        <div id="content__main" style=" height: 150px;">
          <div id="main__1"
            style="font-size: 30px; display: flex; justify-content: center; text-align: center; color: #656362; ">The
            Hai Phong city of food
          </div>
          <div style="display: flex; justify-content: center; text-align: center; font-size: 20px; color: #0fae8d;">
            ____
          </div>
          <div
            style="margin-top: 5%; display: flex; justify-content: center; text-align: center; font-size: 15px; color: #656362; ">
            Hai Phong, where there are culinary fish, attracts visitors when coming to experience
          </div>
        </div>
        <div style="background-color: #0fae8d; height: 250px;">
          <div id="main__3" style="display: flex;">
            <div id="main__bmq" style="flex: 1;background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;">

            </div>
            <div id="main__--background" style=" flex: 2; height: 250px;">
              <div style="display: flex; 
                justify-content: center; 
                text-align: center;
                margin-top: 15%;
                font-size: 18px;
                margin-left: 2%;
                margin-right: 2%;
                color: #f7fbbe">
                Referring to Hai Phong cuisine, it is impossible to mention bread sticks. We recommend you to try it when
                you come here
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
  /* background-color: rgb(245, 211, 211); */
  background-color: beige;
  margin: 0 auto;
  max-width: 960px;
  height: 650px;
  margin-top: -5%;
}

#main1 {
  /* background-color: rgb(245, 211, 211); */
  background-color: rgb(187, 187, 131);
  margin: 0 auto;
  max-width: 960px;
  height: 250px;
  margin-top: 8%;

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

#background_bdc {
  background-image: url('../assets/images/banhdacua.jpg');
}

#main__bmq {
  background-image: url('../assets/images/banhmyque.jpg');
}
</style>