<template>
  <div>
    <!-- <img src="../assets/images/Canh-dep-thien-nhien-Viet-Nam.jpg"> -->

    <!-- <a-row :style="{ 'background-image': 'url(../assets/images/Canh-dep-thien-nhien-Viet-Nam.jpg)' }"> -->
    <a-row class="background-image">
      <a-col :span="12">
        <a-form :form="form" layout="horizontal" @submit="handleSubmit"
          style="background-color: rgba(206, 190, 15, 0.116);">
          <a-row>
            <a-form-item class="from" label="From" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
              <a-select style="width: 200px" placeholder="Enter from">
                <a-select-option value="abc">abc</a-select-option>
              </a-select>
            </a-form-item>
          </a-row>
          <a-row>
            <a-form-item class="from" label="To" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }">
              <a-select style="width: 200px" placeholder="Enter to">

              </a-select>
            </a-form-item>
          </a-row>
          <a-row>
            <a-form-item class="from" :label-col="{ span: 4 }" :wrapper-col="{ span: 14 }" label="Ticket type">
              <a-radio-group :options="plainOptions" @change="onChange1" />
            </a-form-item>
          </a-row>
          <a-row :gutter="[16, 16]">
            <a-col :span="12">
              <a-form-item class="from" label="Start date">
                <a-date-picker format="DD/MM/YYYY" style="width: 100%" />
              </a-form-item>
              <a-form-item class="from" label="Start time">
                <a-time-picker style="width: 100%" />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item class="from" label="End date">
                <a-date-picker format="DD/MM/YYYY" style="width: 100%" />
              </a-form-item>
              <a-form-item class="from" label="End time">
                <a-time-picker style="width: 100%" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button type="primary" html-type="submit">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="12">
        <div class="content" style="height: auto; margin-top: 10%; margin-right: 30%;">
          <div class="content__top"
            style=" padding: 10%; margin-top: 0; font-size: 30px; font-weight: bold; font-family:'fontslab'; color: rgba(245, 246, 247, 0.836);">
            Welcome to the
            largest railway
            system in
            Vietnam</div>
          <div class="content__bottom"
            style=" padding: 10%; margin-top: 0; font-size: 18px;color: rgba(245, 246, 247, 0.836);">Your
            satisfaction is our
            pleasure</div>
        </div>
      </a-col>
    </a-row>


    <a-row>
      <div class="content" style="height: 20%;">
        <div class="main__content" style="margin-left: 10%; margin-right: 10%; display: flex;">
          <div class="item-1" style="flex: 1;">
            <div class="icon"><a-icon type="check" /></div>
            <p class="content__item">Move anywhere on the water</p>
          </div>
          <div class="item-2" style="flex: 1;">
            <div class="icon"><a-icon type="team" /></div>
            <p class="content__item">Join everyone who uses me every day</p>
          </div>
          <div class="item-3" style="flex: 1;">
            <div class="icon"><a-icon type="message" /></div>
            <p class="content__item">support service all the time</p>
          </div>
        </div>
      </div>
    </a-row>

    <a-row style="margin-top: 5%; background-color: #ebe8e8ea;">
      <a-col :span="12">
        <div style="margin-left: 15%;">
          <p style="font-family:'fontslab'; 
          font-size: 50px;
          font-family: Anton-Regular; 
          font-style: italic;
          font-weight: 200;
          margin-top: 25%;
          ">
            Trusted distributor for retail stores and users
          </p>
          <div class="row__col">
            <div class="cell">
              <img style="font-size: 2%; width: 100%; padding: 10px; margin-top: 12%; " src="../assets/images/logo1.png"
                alt="">
            </div>
            <div class="cell">
              <img style="width: 100%; padding: 10px " src="../assets/images/logo2.png" alt="">
            </div>
            <div class="cell">
              <img style="font-size: 100px; width: 100%; margin-top: 10%;" src="../assets/images/logo3.1.png" alt="">
            </div>
          </div>
          <div class="row__col">
            <div class="cell">
              <img style="font-size: 2%; width: 100%; padding: 10px " src="../assets/images/logo4.png" alt="">
            </div>
            <div class="cell">
              <img style="font-size: 2%; width: 100%; padding: 10px " src="../assets/images/logo5.png" alt="">
            </div>
            <div class="cell"> <img style="font-size: 2%; width: 100%; padding: 10px " src="../assets/images/logo6.png"
                alt=""></div>
          </div>
        </div>
      </a-col>
      <a-col :span="12">
        <div style="margin-left: 10%; margin-right: 0%;">
          <img src="../assets/images/tauhoa.jpg" alt="">
        </div>
      </a-col>
    </a-row>

    <a-row style="margin-top: 10%; margin-left: 8%; margin-right: 0%; ">
      <div class="row">
        <div class="column">
          <router-link to="/haiphong">
            <img src="../assets/images/HaiPhong.jpg">
            <p style="font-size: 30px; color: black;">Hải Phòng City</p>
          </router-link>
        </div>
        <div class="column">
          <router-link to="/haiphong">
            <img src="../assets/images/HaGiang.jpg">
            <p style="font-size: 30px; color: black;">Lạng Sơn</p>
          </router-link>
        </div>
        <div class="column">
          <router-link to="/haiphong">
            <img src="../assets/images/binhthuan.jpg">
            <p style="font-size: 30px; color: black;">Bình Thuận</p>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <router-link to="/haiphong">
            <img src="../assets/images/Hue.jpg">
            <p style="font-size: 30px; color: black;">Huế</p>
          </router-link>
        </div>
        <div class="column">
          <router-link to="/haiphong">
            <img src="../assets/images/Danang.jpg">
            <p style="font-size: 30px; color: black;">Đà Nẵng City</p>
          </router-link>
        </div>
        <div class="column">
          <router-link to="/haiphong">
            <img src="../assets/images/HCM.jpg">
            <p style="font-size: 30px; color: black;">Hồ Chí Minh City</p>
          </router-link>
        </div>
      </div>
      <!-- <div class="container">
        <div class="row">
          <div class="col">
            <router-link style="font-size: 25px;" to="/haiphong">
              <img src="../assets/images/HaiPhong.jpg" alt="">
              <p>Ga Hải Phòng</p>
            </router-link>

          </div>
          <div class="col">
            <router-link to="/">Link 2</router-link>
            <p>Chú thích 2</p>
          </div>
          <div class="col">
            <router-link to="/">Link 3</router-link>
            <p>Chú thích 3</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <router-link to="/">Link 4</router-link>
            <p>Chú thích 4</p>
          </div>
          <div class="col">
            <router-link to="/">Link 5</router-link>
            <p>Chú thích 5</p>
          </div>
          <div class="col">
            <router-link to="/danang">
              <p>Ga Đà Nẵng</p>
            </router-link>

          </div>
        </div>
      </div> -->

    </a-row>

    <a-row style="background-color: #ebe8e8ea; margin-top: 1%;">
      <div class="content" style="height: 30%;">
        <div class="main__content1" style="margin-left: 10%; margin-right: 10%; display: flex;">
          <div class="item" style="flex: 1;">
            <div class="icon"><a-icon type="heart" theme="filled" /></div>
            <p style="display: center; justify-content: center; text-align: center; font-style: italic;">"Fourfold-T
              take-off has been
              vertical. It’s the only global digital travel
              platform
              of its sort."</p>
          </div>
          <div class="item" style="flex: 1;">
            <div class="icon"><a-icon type="team" /></div>
            <p style="display: center; justify-content: center; text-align: center; font-style: italic;">"For those
              travelling by train, the
              most efficient and trustworthy way to purchase
              tickets is Fourfold-T."</p>
          </div>
          <div class="item" style="flex: 1;">
            <div class="icon"><a-icon type="message" /></div>
            <p style="display: center; justify-content: center; text-align: center; font-style: italic;">"If you’re
              thinking of getting the
              train the best site to use is Fourfold-T.com."
            </p>
          </div>
        </div>
      </div>
    </a-row>

    <a-row>
      <div class="row"
        style="margin-top: 8%; background-color: rgba(218, 241, 218, 0.445);  display: flex; flex-direction: row;">
        <div class="col-1" style="flex: 1;">
          <!-- Nội dunimg của cột 1 -->
          <img src="../assets/images/Luuy.jpg" alt="">
        </div>
        <div class="col-2" style="flex: 2; ">
          <!-- Nội dung của cột 2 -->
          <div style="
           height: auto; 
           margin-top: 18%; 
           font-size: 30px; 
           margin-right: 10%;  
           margin-left: 10%; 
           font-family: Anton-Regular; 
          font-style: italic;
          font-weight: 200; color: rgb(49, 46, 41);">
            <p>Thank you for using our service.</p>
            <p>Keep your memories and beautiful photos</p>
          </div>
        </div>
      </div>
    </a-row>
  </div>
</template>

<script>
const plainOptions = ['Oneway', 'Return'];
export default {
  name: "HomeView",
  components: {

  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      plainOptions
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    },

    onChange1() {

    },


  }


}
</script>

<style>
.ticket {
  position: relative;
  /* background-color: brown; */
  height: auto;
  width: 100%;
  margin-top: 0%;
  left: 0%;
  right: 0%;
}

.ticket__layout {
  display: flex;
}

.layout__left {
  flex-basis: 40%;
  background-color: rosybrown;
}

.form {
  margin-top: 5%;

  margin-left: 5%;
  margin-right: 5%;
  height: 80%;
}

/* div.form label {
  color: aliceblue;
  margin-top: 2%;
} */

div.from label {
  color: beige;
}

.ant-form {
  width: 60%;
}

.layout__right {
  position: relative;
  margin-left: 1.714rem;
  flex-basis: 60%;
}

.icon {
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 25px;
  margin-top: 40px;
}

.content__item {
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
}

.row__col {
  display: flex;
}

.cell {
  width: 100px;
  height: 100px;
  /* border: 1px solid black; */
  box-sizing: border-box;
  margin-right: 15%;
  margin-top: 2%;

}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.column {
  flex-basis: calc(33.33% - 10px);
  margin-bottom: 20px;

}

.column:nth-child(3) {
  margin-left: 0%;
}

.column img {
  width: 80%;
  height: 70%;
  border-radius: 20px;
}

.main__content1 {
  display: flex;
  justify-content: space-between;
  margin: 0 20%;
}

.item {
  flex-basis: 30%;
  margin: 0 15px;
}

/* .row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
}

.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: lightgray;
  margin: 20px;
  margin-top: 7%;
  border-radius: 8px;
}

.caption {
  font-size: 16px;
} */

.background-image {
  background-image: url('../assets/images/background.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* Các thuộc tính CSS khác cho hình nền */
}

.background-image1 {
  background-image: url('../assets/images/nhang.jpg');
  /* background-size: cover;
  background-position: center center;
  background-repeat: no-repeat; */
}

/* .background-image1 {
  background-image: url('../assets/images/tauhoa.jpg');
} */
</style>