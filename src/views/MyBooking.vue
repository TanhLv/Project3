<template>
  <div class="mybooking">
    <div>
        <div class="mybooking-body">
            <h1>My Bookings</h1>
            <a-tabs default-active-key="1">
                <a-tab-pane key="1" tab="Upcoming trips"></a-tab-pane>
                <a-tab-pane key="2" tab="Past trips" ></a-tab-pane>
            </a-tabs>
        </div>
        <div class="upcoming-trips">
            <div class="upcoming-trips-title">You have no more upcoming journeys</div>
            <button class="upcoming-trips-button">Plan a journey</button>
        </div>
        <div class="footer">
            <div class="footer-left">
                <a href="">About Trainline</a>
                <a href=""></a>
            </div>
            <div class="footer-right">            
            <a-collapse-panel key="1" header="Help and useful information">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="Train and bus companies" :disabled="false">
                <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="Train journeys in the UK" disabled>
                <p>{{ text }}</p>
            </a-collapse-panel>
            </div>
        </div>
    </div>
   
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mybooking{
    height: calc(100vh - 74px);
    width: 100%;
    display: flex;
    justify-content: center;
}
.mybooking-body{
    height: 100px;
    width:  992px;
}
.upcoming-trips{
    border: 1px dashed rgba(138, 148, 151, 1);
    border-radius: 8px;
    height: 156px;
    width: 992px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 16px;
}
.upcoming-trips-title{
    font-size: 24px;
    color: rgba(47, 56, 58, 1);
    font-weight: bold;
    padding-top: 24px;
}
.upcoming-trips-button{
    color:  #fff;
    font-size: 24px;
    background-color: #00A88F;
    border: none;
    border-radius: 4px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 24px;
    padding-right: 24px;
    margin: 24px 0 ;
    font-weight: bold; 
}
.footer{
    
    margin-top: 48px;
    height: 627px;
    width: 1034px;
    display: flex;
}
.footer-left{
    color: #192325;
   padding-right:240px ;
   font-size: 14px;

}
.footer-right{
    
}

</style>