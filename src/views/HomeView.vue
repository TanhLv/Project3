<template>
  <div>
    <a-row>
      <a-col :span="12">
         <a-form :form="form" layout="horizontal" @submit="handleSubmit">
            <a-row>
              <a-form-item 
                label="From" 
                :label-col="{ span: 4 }"
                :wrapper-col="{ span: 14 }"
              >
                <a-select
                  style="width: 200px"
                  placeholder="Enter from"
                >
                  <a-select-option value="abc">abc</a-select-option>
                </a-select>
              </a-form-item>
            </a-row>
            <a-row>
              <a-form-item label="To" :label-col="{ span: 4 }"
                :wrapper-col="{ span: 14 }">
                <a-select
                  style="width: 200px"
                  placeholder="Enter to"
                >

                </a-select>
              </a-form-item>
            </a-row>
            <a-row>
              <a-form-item :label-col="{ span: 4 }"
                :wrapper-col="{ span: 14 }" label="Ticket type">
                <a-radio-group :options="plainOptions" @change="onChange1" />
              </a-form-item>
            </a-row>
            <a-row :gutter="[16, 16]">
              <a-col :span="12">
                <a-form-item label="Start date">
                  <a-date-picker format="DD/MM/YYYY" style="width: 100%" />
                </a-form-item>
                <a-form-item label="Start time">
                  <a-time-picker style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :span="12">
                <a-form-item label="End date">
                  <a-date-picker format="DD/MM/YYYY" style="width: 100%" />
                </a-form-item>
                <a-form-item label="End time">
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
      <a-col :span="12" style="background: #ff0000; height: 50px">
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
  background-color: brown;
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
  background-color: rgb(4, 4, 99);
  margin-left: 5%;
  margin-right: 5%;
  height: 80%;
}

div.form label {
  color: aliceblue;
  margin-top: 2%;
}

.ant-form {
  width: 60%;
}

.layout__right {
  position: relative;
  margin-left: 1.714rem;
  flex-basis: 60%;
}
</style>