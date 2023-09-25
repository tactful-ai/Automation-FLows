import flow ,{ WebchatFlow,Flow,FlowButton, Triggers}from 'automation-sdk';

export function troubleshootScreenFlow():Flow{
    const tsFlow = new WebchatFlow("troubleshootingScreenFlow", "intern_greeting", "1.0");
    
    tsFlow
    .quickReply("What Do You Need?",[
      new flow.FlowButton("1", "Network Connectivity Issues",{shootingType:"network"}, networkConnectivity()),
      new flow.FlowButton("2", "Call Quality Problems",{shootingType:"callquality"}, callQuality()),
      new flow.FlowButton("3", "Slow Data Speed",{shootingType:"dataspeed"} , dataSpeed()),
      new flow.FlowButton("4", "Billing and Account-Related Issues",{shootingType:"billingandacc"} ,billingAndAccount()) ]);
      
    return tsFlow;
  }

  export function networkConnectivity():Flow{
    const ncFlow = new WebchatFlow("networkConnectivity", "intern_networkConnectivitiy", "1.0");
    
      ncFlow
        .text([["Try And Follow These Steps,{{params.username}}",1]])
        .text([[
         `1-Locate the signal bars or signal strength indicator on your device
          2-Observe the number of bars or the signal icon; more bars indicate a stronger signal`
        , 1]])
        .text([[
          `3-Improve your signal by moving to a window or less crowded area if needed
           4-Recheck the signal strength, aiming for an improvement`
         , 2]])
        .text([[`5-Determine if you're using Wi-Fi or mobile data for your internet connection
        6-If you're on Wi-Fi, check if other devices are also experiencing slow speeds on the same network
        `,3]])
        .text([[`7-If you're on mobile data, consider switching to a different network type (e.g., 4G or 3G) to see if it improves your connection
        8-Re-test your internet speed to see if there's any improvement`,4]])
       .quickReply("Was The Issue Resolved ,{{params.username}}?", [
        new FlowButton(
            "1", 
            "Yes", 
            "1", 
            new WebchatFlow("solvedFlow", "intern_solved")
              .text([["We Are Glad To Have Helped,{{params.username}}"]])
              .jump("intern_userChoice.mainUserChoice.webchat@1.0")
        ),
        new FlowButton(
            "2", 
            "No", 
            "2", 
            new WebchatFlow("UnsolvedFlow", "intern_unsolved")
              .text([['Loading...',3]])
              .jump("intern_greeting.escalationFlow.webchat@1.0")

        ),
    ],3,["I Didn't Understand, Please choose One Of The Choices",
         "Sorry, Again I Didnt Understand Please Choose One Of The Choices",
         "Last Chance,Please Choose One Of The Choices"]);
    return ncFlow
  }

  export function callQuality():Flow{
    const cqFlow = new WebchatFlow("callQualityFlow", "intern_callquality", "1.0");
      cqFlow
        .text([["Try And Follow These Steps,{{params.username}}",1]])
          .text([[
            `1-Check your location for strong signal reception and minimal interference
             2-Ensure your microphone and speaker are unobstructed and functioning`
          , 1]])
          .text([[
            `3-Verify if the issue is with a specific call or consistent across all calls
             4-Try making a call using a different phone or device to see if the problem persists`
          , 2]])
          .text([[
            `5-If the issue continues, consider restarting your phone or checking for software updates
             6-Test call quality using a different phone or device to isolate the problem`
          , 3]])
          
        .quickReply("Was The Issue Resolved ,{{params.username}}?", [
          new FlowButton(
              "1", 
              "Yes", 
              "1", 
              new WebchatFlow("solvedFlow", "examples_category")
                .text([["We Are Glad To Have Helped,{{params.username}}"]])
                .jump("intern_userChoice.mainUserChoice.webchat@1.0")
          ),
          new FlowButton(
              "2", 
              "No", 
              "2", 
              new WebchatFlow("UnsolvedFlow", "examples_category")
                .text([['Loading...',3]])
                .jump("intern_greeting.escalationFlow.webchat@1.0")

          ),
      ] ,3,["I Didn't Understand, Please choose One Of The Choices",
      "Sorry, Again I Didnt Understand Please Choose One Of The Choices",
      "Last Chance,Please Choose One Of The Choices"]);

    return cqFlow
  }

  export function dataSpeed():Flow{
    const dsFlow = new WebchatFlow("dataSpeedFLow", "intern_dataspeed", "1.0");

      dsFlow
        .text([["Try And Follow These Steps,{{params.username}}",1]])
        .text([[
            `1-Ensure you have a strong signal for faster data
             2-Device Restart: Restart your device to refresh data connections`
        , 1]])
        .text([[
          `3-Data Usage: Confirm that you haven't exceeded your data plan limit
           4-Clear Cache: Clear your browser or app cache to potentially improve data speed`
        , 2]])
      .text([[
        `5-Network Settings: Review your network settings and enable data roaming if necessary
         6-Check for and install any available software updates for your device
         7-Close or restrict background apps that may be consuming data`
        , 3]])
      .text([[
        `7-Close or restrict background apps that may be consuming data`
        , 4]])
      .quickReply("Was The Issue Resolved ,{{params.username}}?", [
        new FlowButton(
            "1", 
            "Yes", 
            "1", 
            new WebchatFlow("solvedFlow", "examples_category")
              .text([["We Are Glad To Have Helped,{{params.username}}"]])
              .jump("intern_userChoice.mainUserChoice.webchat@1.0")
        ),
        new FlowButton(
            "2", 
            "No", 
            "2", 
            new WebchatFlow("UnsolvedFlow", "examples_category")
              .text([['Loading...',3]])
              .jump("intern_greeting.escalationFlow.webchat@1.0")

        ),
    ],3,["I Didn't Understand, Please choose One Of The Choices",
    "Sorry, Again I Didnt Understand Please Choose One Of The Choices",
    "Last Chance,Please Choose One Of The Choices"]);

    return dsFlow
  }


  export function billingAndAccount(){
    const baFlow = new WebchatFlow("billingAndAccountFlow", "intern_billandacc", "1.0");

      baFlow
        .text([["Try And Follow These Steps,{{params.username}}",1]])
        .text([[
           ` 1- Examine your billing statement for discrepancies
             2- Verify recent payment processing and accuracy`
        , 1]])
        .text([[
            `3- Ensure you've received payment confirmation for transactions
             4- Verify accurate account login information`
       , 2]])
      .quickReply("Was The Issue Resolved ,{{params.username}}?", [
        new FlowButton(
            "1", 
            "Yes", 
            "1", 
            new WebchatFlow("solvedFlow", "examples_category")
              .text([["We Are Glad To Have Helped,{{params.username}}"]])
              .jump("intern_userChoice.mainUserChoice.webchat@1.0")
        ),
        new FlowButton(
            "2", 
            "No", 
            "2", 
            new WebchatFlow("UnsolvedFlow", "examples_category")
              .text([['Loading...',3]])
              .jump("intern_greeting.escalationFlow.webchat@1.0")
        ),
    ] ,3,["I Didn't Understand, Please choose One Of The Choices",
    "Sorry, Again I Didnt Understand Please Choose One Of The Choices",
    "Last Chance,Please Choose One Of The Choices"]);

    return baFlow
  }


export function escalationFlow():Flow {
    const subFlow = new WebchatFlow("escalation", "intern_greeting", "1.0");
    subFlow
        .userInput({"question":"Please Leave Us Your Email", "contextParam": "userEmail"})
        .text([`We'll Escalate This To The Support Team And We Will Contact You,{{params.username}} `])
        .jump("intern_userChoice.mainUserChoice.webchat@1.0")

    return subFlow
}