<template>
  <div>
    <a-footer>
      <template>
        <!-- <a-footer class="footer">
          <a-row :gutter="16" justify="center">
            <a-col :span="6">
              <a-icon type="twitter" />
            </a-col>
            <a-col :span="6">
              <a-icon type="facebook" />
            </a-col>
            <a-col :span="6">
              <a-icon type="apple" />
            </a-col>
          </a-row>
          <a-divider />
          <a-row :gutter="16" justify="center">
            <a-col :span="24">
              <p>Hotline: 035619****</p>
              <p>Address: 285 Đội Cấn, Quận Ba Đình, Hà Nội</p>
            </a-col>
          </a-row>
        </a-footer> -->
        <a-row
          style="background-color:rgba(0, 0, 0, 0.767); height: auto; color: aliceblue; display: flex; margin-top: 5%;">
          <a-col :span="12" style=" font-size: 20px; margin-left: 3%; margin-top: 2%; font-family: fontslab; flex: 1;">
            <div>
              <img src="../../assets/images/trainline-mint.svg">
            </div>
            <div style="margin-top: 15px;">Fourfold-T is registered in Vietnam.
              Company number ******. <br>Registered address 4th floor number 285 D** C **.
              <br>VAT number 686868****89
            </div>
          </a-col>
          <a-col :span="12" style="flex: 1; margin-top: 2%;">
            <div style="margin-top: 2px; font-size: 18px; font-weight: bold;">Conditions of use</div>
            <div style="margin-top: 2px; font-size: 18px; font-weight: bold;">Privacy notice</div>
            <div style="margin-top: 2px; font-size: 18px; font-weight: bold;">Cookie declaration</div>
            <div style="margin-top: 2px; font-size: 18px; font-weight: bold;">Accessibility</div>
            <div style="margin-top: 2px; font-size: 18px; font-weight: bold;">Modern Slavery Act statement</div>
            <div style="margin-top: 2px; font-size: 18px; font-weight: bold;">Sitemap</div>
          </a-col>
        </a-row>
      </template>
    </a-footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  components: {

  },
  data() {

  }

}
</script>

<style>
/* .footer {
  background-color: #000;
  color: #fff;
} */
</style>