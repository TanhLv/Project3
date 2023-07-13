<template>
  <div>
    <div class=" ticket">
      <div class="ticket__layout">
        <div class="layout__left">
          <div class="form">
            <a-form :form="form" layout="inline" @submit="handleSubmit">
              <a-form-item label="From">
                <a-input v-decorator="['note', { rules: [{ required: true, message: 'Please input your from!' }] }]"
                  placeholder="Input from" />
              </a-form-item>
              <a-form-item label="To">
                <a-input v-decorator="['note', { rules: [{ required: true, message: 'Please input your yo!' }] }]"
                  placeholder="Input to" />
              </a-form-item>
              <a-form-item>
                <a-radio-group :options="plainOptions" @change="onChange1" />
              </a-form-item>
              <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                <a-button type="primary" html-type="submit">
                  Submit
                </a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
        <div class="layout__right">
          chữ tự do
        </div>
      </div>
    </div>
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