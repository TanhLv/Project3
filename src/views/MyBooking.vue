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
                <div class="footer-link" >
                    <a  href="">About Trainline</a>
                </div>
                <div class="footer-link">
                    <a href="">News</a>
                </div>
                <div class="footer-link">
                    <a href="">Investors</a>
                </div>
                <div class="footer-link">
                    <a href="">Careers</a>
                </div>
                <div class="footer-link">
                    <a href="">Trainline Partner Solutions</a>
                </div>
                <div class="footer-link">
                    <a href="">Affiliates and Partnerships</a>
                </div>
                <div class="footer-link">
                    <a href="">Terms and conditions / Security</a>
                </div>
                <div class="footer-link">
                    <a href="">Privacy / Cookies</a>
                </div>
                <div class="footer-link">
                    <a href="">Modern Slavery Act (UK)</a>
                </div>
            </div>
            <div class="footer-right">            
                <a-collapse v-model="activeKey">
                    <a-collapse-panel key="1" header="Help and useful information">
                        <a-row :gutter="[16,16]">
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">Help</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Ticket refunds and changes</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Getting your ticket</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Delays and disruption</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Delay Repay</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Travel assistance</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Airport transfers</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Off-Peak train times</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Mobile apps</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Deals and offers</a>
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">Advance train tickets</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Popular train journeys</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Railcards</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Mobile Tickets</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Sleeper trains (UK only)</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Day trips</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Weekly Season Tickets</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Monthly Season Tickets</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Annual Season Tickets</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">I came by train</a>
                                </div>
                            </a-col>
                            </a-row>
                    </a-collapse-panel>
                    <a-collapse-panel key="2" header="Train and bus companies" :disabled="false">
                        <a-row :gutter="[16,16]">
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">European train companies</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Lumo</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Avanti West Coast</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">LNER</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">GWR</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">ScotRail</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Gatwick Express</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Stansted Express</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Heathrow Express</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Elizabeth line</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Leonardo Express</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Malpensa Express</a>
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">OUIGO</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">OUIGO Spain</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Westbahn</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">TGV</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Italo</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">FlixTrain</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">BlaBlaCar Bus</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Avlo</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">AVE</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Flixbus</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">National Express</a>
                                </div>
                            </a-col>
                            </a-row>
                    </a-collapse-panel>
                    <a-collapse-panel key="3" header="Train journeys in the UK" :disabled="false">
                        <a-row :gutter="[16,16]">
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">London to Manchester</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Leeds to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Birmingham</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Newcastle</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Manchester to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Edinburgh to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Liverpool</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Glasgow to Manchester</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Manchester to Glasgow</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Glasgow to Liverpool</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Birmingham to Glasgow</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Edinburgh to Glasgow</a>
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">Glasgow to Leeds</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">York to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Edinburgh</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Brighton</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Glasgow to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Cardiff to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Bristol to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Newcastle to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Edinburgh to Manchester</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Norwich</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Birmingham to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Glasgow</a>
                                </div>
                            </a-col>
                            </a-row>
                    </a-collapse-panel>
                    <a-collapse-panel key="4" header="Trains and buses in Europe" :disabled="false">
                        <a-row :gutter="[16,16]">
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">European train times</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Brussels</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Amsterdam</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Paris to Lyon</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Rome to Milan</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Paris to Milan</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Alicante to Madrid</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Rome to Florence</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Valencia to Madrid</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Barcelona</a>
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">London to Madrid</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Barcelona to Valencia</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Rome to Venice</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Rome</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Rome to Naples</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London to Amsterdam Centraal</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Malaga to Madrid</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Madrid to Barcelona</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Milan to Venice</a>
                                </div>
                            </a-col>
                            </a-row>
                    </a-collapse-panel>
                    <a-collapse-panel key="5" header="Top destinations" :disabled="false">
                        <a-row :gutter="[16,16]">
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">European destinations</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to London</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Manchester</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Birmingham</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Leeds</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Edinburgh</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Glasgow</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Heathrow Airport</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Luton Airport</a>
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">Trains to Brighton</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Gatwick Airport</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Stansted Airport</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to France</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Paris</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Amsterdam</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Disneyland Paris</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Trains to Brussels</a>
                                </div>
                            </a-col>
                            </a-row>
                    </a-collapse-panel>
                    <a-collapse-panel key="6" header="Stations" :disabled="false">
                        <a-row :gutter="[16,16]">
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">UK train stations</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">European train stations</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London Paddington</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Barcelona Sants</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Birmingham New Street</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Milan Central Station</a>
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="footer-link">
                                    <a href="">Edinburgh Waverley</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London Euston</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">London Kings Cross</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Gatwick Airport</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Paris Gare du Nord</a>
                                </div>
                                <div class="footer-link">
                                    <a href="">Amsterdam Centraal</a>
                                </div>
                            </a-col>
                            </a-row>
                    </a-collapse-panel>
                </a-collapse>
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
    min-height: 427px;
    width: 1034px;
    display: flex;
    border-top: 1px solid rgba(208, 212, 213, 1);
    border-bottom: 1px solid rgba(208, 212, 213, 1);
    padding-top:14px ;
}
.footer-left{
    
   padding-right:240px ;
   font-size: 14px;

}
.footer-right{
    width: 500px;
}
.footer-link{
    color:#192325 ;
    margin-bottom: 14px;
}
.footer-link a:hover{
    color:#192325 ;
    text-decoration: underline;
}
.footer-link a{
    color:#192325 ;
}


</style>