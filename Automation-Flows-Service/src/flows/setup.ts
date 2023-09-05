import { webchatGreet } from "./greetings";
import {test} from './test';
import {MainFlow,mainUserChoices ,InvalidData} from './acc_mngmt/index';
import {accMgmtChoiceFlow, authenticate,accMgmtScreenFlow,} from './acc_mngmt/subFlows/acc_mgmt';
import {planMmgtScreenFlow} from './acc_mngmt/subFlows/plan_mgmt';
import {networkCoverageFlow} from './acc_mngmt/subFlows/network_coverage';
import {troubleshootScreenFlow} from './acc_mngmt/subFlows/troubleshoot';

export const flowsToBeSetup = [
    webchatGreet(),
    
    // list other flows here
    test()
]