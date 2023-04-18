import image1 from "../image/ligihiting1.png"
import image2 from "../image/ligihiting2.png"
import image3 from "../image/Security1.png"
import image4 from "../image/security2.png"
import image5 from "../image/climate1.png"
import image6 from "../image/climate2.png"
import image7 from "../image/climate3.png"
import image8 from "../image/climate4.png"
import image9 from "../image/audio1.png"
import image10 from "../image/audio2.png"
import image11 from "../image/utilities1.png"
import image12 from "../image/utilities2.png"



const dataCategories = [
    {
        id: 1,
        MainTitle:"LIGIHITING",
        image: image1,
        title: "ADF Dali Gateway for Control4",
        date: "October 2018",
        text: "This driver allows integration of very cost effective ADF Dali /Ethernet gateway. (HD67839-B2).",
        description: <ul>
            <li>Full-featured DriverWorks driver for light V2 integration.</li>
            <li>Allows use of DALI groups and scenes to avoid popcorn effect.</li>
            <li>Implements "one touch dimming".</li>
            <li>Supports button color tracking.</li>
            <li>Includes:</li>
            <ul>
                <li>Single load dimmer driver</li>
                <li>Single load switch driver</li>
                <li>Dali group scene driver</li>
            </ul>
            <li>Coming soon:</li>
            <ul>
                <li>Single load relay driver for use with fans and other motorization</li>
                <li>Group load dimmer driver</li>
            </ul>
        </ul>,
        category: "Ligihiting  |",
        link:<a href="https://www.blackwiredesigns.com/store/adf-dali-gateway/" target="_blank" rel="noopener noreferrer">Donwnload</a>
        
    },
    {
        id: 2,
        image: image2,
        title: "Dynalite for Control4",
        date: "August 2017",
        text: "This Dynalite driver for Control4, supports many features, and supports many of the ways in which Dynalite is programmed. It can communicate with Dynalite through RS-232 or IP communication.",
        description:
         <ul>
            This driver allows the control of a dynalite lighting system through RS-232 or IP.
         <ul>
            <li>llows the use of various Dynalite commands to match what is used in the Dynalite installation</li>
            <li>Supports Lighting, Blinds and Motorization interfaces on the Control4 UI</li>
            <li>Allows the activation of Dynalite tasks through Control4 programming</li>
        </ul></ul>,
        category: "Ligihiting  |",
        link:<a href="https://www.blackwiredesigns.com/store/c4-dynalite//" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
    {
        id: 3,
        MainTitle:"SECURITY",
        image: image3,
        title: "ICT Protege WX for Control4",
        date: "May 2020",
        text: "This driver allows the control of a ICT Protege WX security system through IP.",
        description: <ul>
            <li>Full-featured DriverWorks driver for new security system proxy. OS2.8+</li>
            <li>Contact connection for each zone.</li>
            <li>Virtual keyboard for user interface.</li>
            <li>Supports all areas and zones as programmed in panel.</li>
            <li>Supports control of outputs</li>
            <li>Supports automatic naming of areas and zones</li>
        </ul>,
        category: "  Security  |",
        link:<a href="https://www.blackwiredesigns.com/store/ict-protege-wx/" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
    {
        id: 4,
        image: image4,
        title: "Ness D8X/D16X Interface for Control4",
        date: "October 2018",
        text: "This driver allows the control of a Ness D8/16 security system through RS-232 or IP",
        description: <ul>
        <li>Full-featured DriverWorks driver for new security system proxy. OS2.8+</li>
        <li>Contact connection for each zone.</li>
        <li>Virtual keyboard for user interface.</li>
        <li>Support for emergency buttons(Fire, Medical,Panic)</li>
        <li>Supports all areas and zones as programmed in panel.</li>
        
            </ul>,
        category: "  Security  |",
        link:<a href="https://www.blackwiredesigns.com/store/ness-d8x-d16x-interface//" target="_blank" rel="noopener noreferrer">Donwnload</a>
        
    },
    {
        id: 5,
        MainTitle:"CLIMATE",
        image: image5,
        title: "ActronAir BMS Integration for Control4",
        date: "August 2020",
        text: "Driver allows direct integration with ActronAir air conditioning system by using BMS interface (ICAMIB-MOD).",
        description: <ul>
            <li>Multiple Thermostats interconnected via BMS modules</li>
            <li>Includes experience buttons for additional zone control</li>
            <li>Features all the new thermostatV2 features available with OS 2.7 or later, including Presets and Schedule.</li>
            
        </ul>,
        category: "  Climate  |",
        link:<a href="https://www.blackwiredesigns.com/store/actronair-bms-integration/" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
    {
        id: 6,
        image: image6,
        title: "Haiku Big Ass Fans Interface for RTI",
        date: "December 2020",
        text: "This RTI driver provides a complex interface for controlling Haiku Big Ass Fans and Lights. Using this driver with your RTI automation system will bring complete 2-way control of your beloved fans via any RTI interface whether it is touchscreen, remote or mobile app you will be able to adjust fan and lights from single interface.",
        description: <div>
        <p>FAN CONTROLS</p>
        <ul> 
            <li>2-way control/feedback</li>
            <li>All Speeds Control</li>
            <li>Auto Mode Control</li>
            <li>Whoosh Control</li>
            <li>Direction Control</li>
            <li>Smart Mode Control</li>
            <li>Events for various fan states (speed changed, turns on, etc ...)</li>
        </ul>
        </div>,
        description2: <div>
       <p>LIGHT CONTROLS</p>
        <ul> 
            <li>2-way control/feedback</li>
            <li>Light Level Control</li>
            <li>Auto Mode Control</li>
            <li>Whoosh Control</li>
           </ul>
           </div>,
           category:"  Climate  |",
           link:<a href="https://www.blackwiredesigns.com/store/rti-haiku-big-ass-fans-interface/" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
    {
        id: 7,
        image: image7,
        title: "WeatherFlow Tempest for Control4",
        date: "March 2021",
        text: <div>
            <p>WeatherFlow Inc. is a leader in the private sector weather industry, with over three decades of experience in applying the latest in observational, modeling, and forecasting technology to its clients’ most challenging problems.</p>
            <p>HopSoft WeatherFlow Tempest driver makes all local data from a network of tempest stations available in Control4 in real-time.</p>
            <p>Current version of the driver implements “only” local data received from Tempest station directly over LAN, next driver update will implement data such as forecast from WeatherFlow cloud.</p>
        </div>,
        description: <div>
            <p>COMMON USE SCENARIOS</p>
            <ul>
                <li>If it is raining close skylight windows</li>
                <li>If UV index is high close curtains or blinds to protect furniture or flooring</li>
                <li>If it is hailing close skylight shutters</li>
                <li>If it is windy close outdoor awning</li>
                <li>If it is rainy day do not turn on irrigation today</li>
                <li>If it is hot and rainy day turn on AC</li>
             </ul>
        </div>,
        category: "  Climate  |",
        link:<a href="https://www.blackwiredesigns.com/store/weatherflow-tempest-for-control4/" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
    {
        id: 8,
        image: image8,
        title: "Brivis/Rinnai for ELAN",
        date: "August 2021",
        text: "This driver allows IP based integration of Brivis/Rinnai N-BW2 Networker Bridge (WIFI) with ELAN system. The N-BW2 Networker Bridge (WIFI) provides a means of remotely interfacing to Brivis/Rinnai Networker based systems allowing control and monitoring of heating/cooling appliances the Networker system manages. N-BW2 is compatible with existing NC-3, NC-6 or NC-7 Wired Networker Controllers.",
        description: <div>
            <p>FEATURES</p>
            <ul>
                <li>Support for Gas Heating, Add-On Cooling and Evaporative Cooling</li>
                <li>Single Setpoint / Multi Setpoint modes</li>
                <li>Auto Naming Zones</li>
                <li>Simple Dropdown Box for Zone Addition</li>
                <li>Multi Zone Contro</li>
                <li>Events for different states (calling for cool/heat, fan running etc ... )</li>
                <li>Setpoint Control</li>
                <li>Fan Contro</li>
            </ul>
        </div>,
        category: "  Climate  |",
        link:<a href="https://www.blackwiredesigns.com/store/brivis-rinnai-for-elan/" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
    {
        id: 9,
        MainTitle:"AUDIO VISUAL",
        image: image9,
        title: "Fusion Apollo for Control4",
        date: "January 2021",
        text: "This driver allows integration of Fusion Apollo marine stereo head units.",
        description: <div>
            <p>FEATURES</p>
            <ul>
                <li>Full-featured multi proxy DriverWorks driver.</li>
                <li>FM/DAB</li>
                <li>Bluetooth</li>
                <li>USB player</li>
                <li>Aux1/Aux2/Optical inputs</li>
            </ul>
        </div>,
        category: " Audio Visual  |",
        link:<a href="https://www.blackwiredesigns.com/store/fusion-apollo/" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
    {
        id: 10,
        image: image10,
        title: "Kramer Protocol 3000 for RTI",
        date: "September 2021",
        text: <div>
            <p>This driver allows TCP or RS232 integration of various Kramer Protocol 3000 products, driver comes as bundle of model specific drivers due to inconsistencies of Protocol 3000 implementations and versions across product range. You can test driver closest to your device if bundle does not contain specific driver for model you need.model you need. Otherwise contact us and we can build driver for you.</p>
            <p>Bundle also contains detailed user manual and sample APEX file to demonstrate tagging, layers and room proxy</p>
            <p>This definitely is not driver for “quick” Friday afternoon job and you should test integration on test bench prior to installation on customer premisses.  </p>
        </div>,
        description: <div>
            <p>SUPPORTED MODELS</p>
            <ul>
                <li>VP-558</li>
                <li>VS-88UHDA</li>
            </ul>
            <p>FEATURES</p>
            <ul>
                <li>Video switching and feedback</li>
                <li>Audio switching and feedback</li>
                <li>Support for analog inputs and outputs</li>
                <li>Equalizer control and feedback</li>
                <li>Input volume control and feedback</li>
                <li>USB switching</li>
                <li>Volume for different channels control and feedback</li>
                <li>Control of Kramer step-in devices</li>
                <li>Sending of RAW command</li>
                <li>APEX ready, all functions and variables are tagged for auto programming</li>
            </ul>
        </div>,
        category: " Audio Visual  |",
        link:<a href="https://www.blackwiredesigns.com/store/kramer-protocol-3000-for-rti/" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
    {
        id: 11,
        MainTitle:"UTILITIES",
        image: image11,
        title: "Crestron Websocket Interface for RTI",
        date: "October 2020",
        text: "This RTI driver provides two way interface between RTI and Crestron Automation System via Crestron websocket driver.",
        description: <div>
            <p>FEATURES</p>
            <ul>
                <li>25 Thermostat/Climate sources which support auto programming feature (APEX)</li>
                <li>Control and Feedback for 500 Digital Signals</li>
                <li>Control and Feedback for 100 Analog Signals</li>
                <li>Control and Feedback for 100 String Signals</li>
                <li>Heartbeat to monitor websocket connection</li>
            </ul>
            <p>IMPORTANT: This driver requires “CCI Websocket Server by Control Concepts” to be installed and configured on Crestron System. More information about this module can be found in Crestron Application Market</p>
        </div>,
        category: "  Utilities",
        link:<a href="https://www.blackwiredesigns.com/store/crestron-websocket-interface/" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
    {
        id: 12,
        image: image12,
        title: "UniFi Controller Interface for RTI",
        date: "December 2020",
        text: "This RTI driver provides a complex interface to UniFi Network controller. Driver does not use any “polling” strategy and silently listens to events broadcasted by network controller. Cloud version of controller is also supported and driver uses SSL to encrypt communication.",
        description: <div>
            <p>FEATURES:</p>
            <ul>
                <p>COTROLLER</p>
                <ul>
                    <li>Event for wireless client connected</li>
                    <li>Event for wireless client disconnected</li>
                    <li>Restart any device from UI</li>
                    <li>Restart any device from APEX programming</li>
                </ul>
                <p>SWITCH</p>
                <ul>
                    <li>Override any port PoE settings (auto, off, 24Vstatic, etc ..)</li>
                    <li>PoE power cycle</li>
                    <li>Event for switch Connected</li>
                    <li>Event for switch Disconnected</li>
                    <li>Event for switch Provisioning</li>
                    <li>Event for switch Missing Heartbeat</li>
                    <li>Event for switch Adopting</li>
                </ul>
                <p>ACCESS POINT</p>
                <ul>
                    <li>Event for access point Connected</li>
                    <li>Event for access point Disconnected</li>
                    <li>Event for access point Provisioning</li>
                    <li>Event for access point Missing Heartbeat</li>
                    <li>Event for access point Adopting</li>
                </ul>
            </ul>

        </div>,
        category: "  Utilities",
        link:<a href="https://www.blackwiredesigns.com/store/unifi-controller-interface/" target="_blank" rel="noopener noreferrer">Donwnload</a>
    },
]


export default dataCategories