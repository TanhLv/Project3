<template>
  <div>
    <!-- <img src="../assets/images/Canh-dep-thien-nhien-Viet-Nam.jpg"> -->

    <!-- <a-row :style="{ 'background-image': 'url(../assets/images/Canh-dep-thien-nhien-Viet-Nam.jpg)' }"> -->
    <a-row class="background-image">
      <a-col :span="12">
        <a-form :form="form" layout="horizontal" @submit="handleSubmit"
          style="background-color: rgba(206, 190, 15, 0.184);">
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

    <a-row style="margin-top: 7%;">
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
              <img style="font-size: 2%; width: 100%; padding: " src="../assets/images/logo1.png" alt="">
            </div>
            <div class="cell">
              <img style="font-size: 2%; width: 100%; padding: " src="../assets/images/logo2.png" alt="">
            </div>
            <div class="cell">
              <img style="font-size: 2%; width: 100%;" src="../assets/images/logo3.jpg" alt="">
            </div>
            <div class="cell">Column 4, Row 1</div>
            <div class="cell">Column 5, Row 1</div>
            <div class="cell">Column 6, Row 1</div>
          </div>
          <div class="row__col">
            <div class="cell">Column 1, Row 2</div>
            <div class="cell">Column 2, Row 2</div>
            <div class="cell">Column 3, Row 2</div>
            <div class="cell">Column 4, Row 2</div>
            <div class="cell">Column 5, Row 2</div>
            <div class="cell">Column 6, Row 2</div>
          </div>
        </div>
      </a-col>
      <a-col :span="12">
        <div style="margin-left: 10%; margin-right: 0%;">
          <img src="../assets/images/tauhoa.jpg" alt="">
        </div>
      </a-col>
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
  border: 1px solid black;
  box-sizing: border-box;
}

.background-image {
  background-image: url('../assets/images/background.jpg');
  /* Các thuộc tính CSS khác cho hình nền */
}

/* .background-image1 {
  background-image: url('../assets/images/tauhoa.jpg');
} */
</style>