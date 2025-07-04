  if (window.matchMedia('screen and (max-width: 768px)').matches) {
    // This is for mobile
    var tour = {
      id: "xato",
      steps: [
        {
          title: "Disini adalah menu",
          content: "Anda dapat pergi ke tempat yang Anda tuju",
          target: document.querySelector("#headerTutor .pcoded-menu-caption"),
          placement: "bottom",
          showPrevButton:true
        },
        {
          title: "Ini adalah Header",
          content: "Bagian paling atas dari kaizen detail, ada beberapa menu disini",
          target: document.querySelector("#upperContent .page-header"),
          placement: "bottom"
        },
        {
          title: "General Info",
          content: "Ini adalah informasi kaizen anda, berisi tentang general kaizen berupa judul, tanggal dll",
          target: document.querySelector("#card1"),
          placement: "bottom",
          showPrevButton:true
        },
        {
          title: "Button",
          content: "This is the button of a page. Click back to go back",
          target: document.querySelector("#upperContent a"),
          placement: "bottom",
          showPrevButton:true
        },
        {
          title: "Another Heading",
          content: "This is the another heading of a page. Click back to go back",
          target: document.querySelector("#lowerContentLeft h2"),
          placement: "bottom",
          showPrevButton:true
        },
        {
          title: "Documenation",
          content: "To read full documentation, click the link",
          target: document.querySelector("#documentation p"),
          placement: "bottom",
          showPrevButton:false
        },
      ]
    };
  }
	if (window.matchMedia('screen and (min-width: 768px)').matches) {
    // This is for Larger Screen
    var tour = {
      id: "xxx",
      steps: [
        {
          title: "Halloo...",
          content: "Disini saya menyediakan tour guide loooh... Click kalo kamu butuh bantuaan yaa... 😊",
          target: document.querySelector("#tour_guide") ,          
          showCloseButton:true ,
          arrowOffset : 275,
          xOffset:-280,
          placement: "bottom"
        }
      ],
      i18n: {
        // ========== Custom tombol done 
        target: document.getElementById("tour_guide").style.backgroundColor = "red",        
        doneBtn: "Okay"
      }
      
    };
 
  }
     
  
  hopscotch.startTour(tour);
  // Start the tour!
