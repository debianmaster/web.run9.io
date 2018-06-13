import React, { Component } from 'react';
import HeaderComponent from '../header/header.component';
import SliderComponent from '../slider/slider.component';
import ClientLogosComponent from '../clientlogos/clientlogos.component';
import PlansComponent from '../plans/plans.component';
import FeaturesComponent from '../features/features.component';
import ClientsComponent from '../clients/clients.component';
import EnquieryComponent from '../enquiery/enquiery.component';
import FooterComponent from '../footer/footer.component';
import SidemenuComponent from '../sidemenu/sidemenu.component';

class DefaultComponent extends Component{

    render(){

        return(            
            <div>
                <HeaderComponent/>
                <SliderComponent/>
                <ClientLogosComponent/>
                <PlansComponent/>
                <FeaturesComponent/>
                <ClientsComponent/>
                <EnquieryComponent/>
                <FooterComponent/>
                <SidemenuComponent/>
            </div>
        );
    }
}

export default DefaultComponent;