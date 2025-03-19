$(document).ready(function () {
    
    // Initial values
    $(".nav-content").addClass("hidden");
    $(".sub-tab-name, .sub-tab-arrow").addClass("md:hidden");
    $(".add-cloud-storage, .filter").addClass("hidden");
    $(".all-apps-content").removeClass("hidden");
        
    // Navbar Selection Code
    $('input[name="type"]').on("change", function () {
        var selectedValue = $(this).val();

        // Hide all content divs
        $(".main-content").addClass("hidden");

        // Show the selected div
        if (selectedValue === "license") {
            $(".sub-tab-name, .sub-tab-arrow").addClass("md:hidden");
            $(".license-content").removeClass("hidden");
            $(".tab-name").text("User Licence");
        } else if (selectedValue === "storage") {
            $(".sub-tab-name, .sub-tab-arrow").addClass("md:hidden");
            $(".storage-content").removeClass("hidden");
            $(".tab-name").text("Storage"); 
        } else if (selectedValue === "apps") {
            $(".apps-content").removeClass("hidden");
            $(".sub-tab-name, .sub-tab-arrow").removeClass("md:hidden");
            $(".tab-name").text("Apps");
        }
    });

    // apps Navbar Selection Code
    $('input[name="nav"]').on("change", function () {
      var selectedValue = $(this).val();
      // Hide all content divs
      $(".nav-content").addClass("hidden");
      $(".essential-note").addClass("hidden");

      // Show the selected div
      if (selectedValue === "all-apps") {
          $(".all-apps-content").removeClass("hidden");
          $(".sub-tab-name").text("All Apps"); 
      } else if (selectedValue === "free-apps") {
        $(".free-apps-content").removeClass("hidden");
        $(".sub-tab-name").text("Free Apps"); 
      } else if (selectedValue === "in-apps") {
        $(".in-apps-content").removeClass("hidden");
        $(".sub-tab-name").text("In-App Purchases"); 
      } else if (selectedValue === "essential-apps") {
        $(".essential-apps-content").removeClass("hidden");
        $(".essential-note").removeClass("hidden");
        $(".sub-tab-name").text("Essential Apps"); 
      }
    });

    // mobile tab js
    window.tabView = function (id,title){
        if(title=="Storage"|| title=="Apps"|| title=="UserLicense"){
          $(".main-content").hide();
          $(id).show();
        }else{
          $(".nav-content, .essential-note").addClass("hidden");
          $(id).removeClass("hidden");
          if(title=="Essential Apps"){
              $(".essential-note").removeClass("hidden");
          }
        }   
        $(".tab-name").text(title);
        if(title=="Apps"){
          $(".filter").removeClass("hidden");
          $(".add-cloud-storage").addClass("hidden");
          $(".tab-name").text("All Apps");
        } else if(title=="Storage"){
          $(".filter").addClass("hidden");
          $(".add-cloud-storage").removeClass("hidden");
        }  else if(title=="User Lisence"){
          $(".filter, .add-cloud-storage").addClass("hidden");
        }
      }

    ///////// User License js //////////
    // purchase modals
    $(document).on("click", ".purchase", function () {
        $("#purchase-modal").removeClass("hidden");
        let purchase_title=$(this).data("purchasetitle");
        let purchase_desc=$(this).data("purchasedesc");
        let purchase_plan=$(this).data("plan");
        $(".purchase-title").text(purchase_title);
        $(".purchase-desc").text(purchase_desc);
        if(purchase_title=="Cancel Subscription"){
          $(".purchase-btn").removeClass("buy-btn");
          $(".purchase-btn").addClass("purchase-cancel");
          $(".purchase-cancel-btn").text("Do not Cancel");
        }else{
          $(".purchase-btn").attr("data-plan",purchase_plan);
        }
      });
      $(document).on("click", ".purchase-cancel", function () {
        $('#payment-gateway, #purchase-modal').addClass('hidden');
        $(".purchase").each(function() {
          if ($(this).text().trim() === "Current Plan") {
            $(this).text("Expired");
            $(this).attr("style", "background: var(--color-fog-gray) !important; padding-left: 2.25rem !important; padding-right: 2.25rem !important;");
          }
        });
        $(".plan-note").text("Your Starter User Plan has expired on 25th March 2025. To continue enjoying premium features, please visit the plan list and select a subscription that suits your needs.");
        $(".plan-note").removeClass("md:px-20");
        $(".plan-note").addClass("md:px-4");
      });
    // buy section
    $('.quantity-container').each(function () {
        let container = $(this);
        container.find('.increment').click(function () {
        let input = container.find('.quantity-input');
        let value = parseInt(input.val());
        input.val(value + 1);
        container.siblings('.selected-span').text('Selected: ' + (value + 1) +" "+ 'GB');
        });
        container.find('.decrement').click(function () {
        let input = container.find('.quantity-input');
        let value = parseInt(input.val());
        if (value > 1) {
            input.val(value - 1);
            container.siblings('.selected-span').text('Selected: ' + (value - 1) +" " + 'GB');
        }
        });
    });
    // When the "Buy now" button is clicked
    $('.buy-btn').click(function() {
        
        var plan = $(this).data('plan');
        var card = $('.'+ plan).closest('.cards');
        var selectedGB = card.find('.quantity-input').val();
        var price = card.find('.price').text();
        
        // Show the payment gateway modal
        $('#payment-gateway').removeClass('hidden');
        $('#purchase-modal').addClass('hidden');
        
        // Update the content in the payment gateway according to the selected plan
        switch(plan) {
            case 'starter':
                updatePaymentGateway('Starter User Plan', selectedGB + ' GB', price , "300");
                break;
            case 'enhanced':
                updatePaymentGateway('Enhanced User Plan', selectedGB + ' GB', price, "600");
                break;
            case 'premium':
                updatePaymentGateway('Premium User Plan', selectedGB + ' GB', price, "900");
                break;
        }
    });
    // Card Details validation
    $('#card-number').on('input', function() {

        let cardValue = $(this).val().replace(/\D/g, '');
        
        if (cardValue.length > 16) {
        cardValue = cardValue.substring(0, 16);
        }
    
        $(this).val(cardValue);
    });
    
    // Select the expiration date input field
    $('#expiration-date').on('input', function() {
        let expirationValue = $(this).val().replace(/\D/g, '');
    
        // Limit the input to 5 characters (MM/YY format)
        if (expirationValue.length > 4) {
        expirationValue = expirationValue.substring(0, 4);
        }
    
        // Format the value as MM/YY
        if (expirationValue.length > 2) {
        expirationValue = expirationValue.substring(0, 2) + '/' + expirationValue.substring(2);
        }
    
        $(this).val(expirationValue);
    });
    
    
    // Select the CVV input field
    $('#cvv').on('input', function() {
        let cvvValue = $(this).val().replace(/\D/g, '');
    
        // Limit the input to 3 digits (CVV format)
        if (cvvValue.length > 3) {
        cvvValue = cvvValue.substring(0, 3);
        }
    
        $(this).val(cvvValue);
    });
    
    // Restrict the input to only numbers
    $('.otp-input').on('input', function(e) {
        // Allow only numeric input and ensure only one character is entered
        var value = $(this).val().replace(/\D/g, '');
        $(this).val(value); 
    
        // Automatically move to the next input when a value is entered
        if (value.length === 1) {
        var nextInput = $(this).next('.otp-input');
        if (nextInput.length) {
            nextInput.focus();
        }
        }
        // Check if all OTP inputs are filled
        var allFilled = $('.otp-input').filter(function () {
            return $(this).val().trim() === '';
        }).length === 0;
        if (allFilled) {
            $(".thank-you").removeClass("hidden");
            setTimeout(function () {
              $(".thank-you").addClass("hidden");
          }, 2000);
            $("#payment-gateway").addClass("hidden");
            let plan_name = $(".plan-name").text().trim();
            let words = plan_name.split(" ");
            let plan;
            if (words.length > 0) {
                words[0] = words[0].toLowerCase();
                plan =words[0];
            }
            $('.'+ plan).find(".purchase").text("Current Plan");
            $('.' + plan).find(".purchase").closest("div").attr("style", "background: var(--color-fog-gray) !important; padding-left: 0.5rem !important; padding-right: 0.5rem !important;");
            $('.'+ plan).closest(".cards").find(".success").removeClass("hidden");
            $(".plan-note").html("Your Starter User Plan is set to expire on 25th March 2025. Please take necessary action. [Click <a class='purchase cursor-pointer text-link-blue' data-purchasetitle='Cancel Subscription' data-purchasedesc='Are you sure you want to cancel the Starter User Plan? You’ll lose access to premium features immediately.' >here</a> to cancel]")

        } else {
            $(".thank-you").addClass("hidden");
        }
    });
    
    // Prevent backspace from removing the previous input value
    $('.otp-input').on('keydown', function(e) {
        if (e.key === 'Backspace' && $(this).val().length === 0) {
        var prevInput = $(this).prev('.otp-input');
        if (prevInput.length) {
            prevInput.focus();
        }
        }
    });     
    
    // When the "Pay" button is clicked
    $('#pay').click(function() {
        // Check if the form fields are filled (basic validation)
        const cardNumber = $('#card-number').val();
        const expirationDate = $('#expiration-date').val();
        const cvv = $('#cvv').val();
        const name = $('input[placeholder="Name on payment method"]').val();
    
        if (cardNumber && expirationDate && cvv && name) {
        // Hide card details section
        $('.card-details').hide();
    
        // Show the hidden PIN input section
        $('#Otp-section, #cancel-pay, #info').removeClass('hidden');
        } else {
        $('#error').text("Please fill out all payment details.")
        }
    });
    
        
        function updatePaymentGateway(planName, storage, price,pay) {
            
            $('.order-summary .plan-name').text(planName);
            $('.order-summary .selected-gb').text(storage);
            $('.order-summary .selected-package').text(price);
            $('.total').text(price);
            $('#pay').text("Pay Rupees" + " " + pay);
        }
    
        // Hide the payment gateway when the user cancels
        $('#cancel-pay').click(function() {
            $('#payment-gateway').addClass('hidden');
        });
    
    const Gateway = $('#payment-gateway');  // Corrected ID
    
    $(window).click(function(event) {
        if (event.target == Gateway[0]) {  // Compare with DOM element using [0]
            $(Gateway).addClass('hidden');
        }
    });
    // Mobile carousal
    var $carousel = $("#carousel");
    var $dotsContainer = $("#carousel-dots");
    var totalItems = $(".cards").length;

    // Add navigation dots
    for (let i = 0; i < totalItems; i++) {
        $dotsContainer.append('<span class="dot w-2 h-2 bg-c-black rounded-full inline-block cursor-pointer"></span>');
    }
    $(".dot").first().addClass("bg-c-yellow");

    // Scroll to selected dot
    $(".dot").click(function () {
        var index = $(this).index();
        var scrollPosition = $(".cards").eq(index).position().left + $carousel.scrollLeft();
        $carousel.animate({ scrollLeft: scrollPosition }, 300);
    });

    // Highlight active dot
    $carousel.on("scroll", function () {
        var scrollLeft = $carousel.scrollLeft();
        $(".cards").each(function (index) {
            var leftPos = $(this).position().left + $carousel.scrollLeft();
            if (leftPos >= scrollLeft && leftPos < scrollLeft + $(this).outerWidth()) {
                $(".dot").removeClass("bg-c-yellow").addClass("bg-c-black");
                $(".dot").eq(index).addClass("bg-c-yellow");
            }
        });
    });
    ///////// Apps js //////////
    //All apps
    const all_apps = [
    { img: '/images/email.png', title: 'Email', rating: '4.6', price: '₹ 0.00' },
    { img: '/images/social.png', title: 'Social Next', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/chat.png', title: 'Chat', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/ERP-2.png', title: 'ERP', rating: '4.6', price: '₹ 0.00' },
    { img: '/images/email.png', title: 'Email', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 0.00' },
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 0.00' },
    ];
    $.each(all_apps, function (index,app) {
    const buttonText = app.price === '₹ 0.00' ? 'Free' : 'Buy Now';

    const div = `
        <button data-title="${app.title}" class="app-button highlight w-44 h-56 bg-c-lighten-gray border border-gray-3 rounded-lg flex flex-col items-center justify-center px-2 space-y-2">
        <div class="w-16 h-16">
            <img src="${app.img}" alt="${app.title}">
        </div>
        <span class="text-lg font-medium">${app.title}</span>
        <div><span>${app.rating} &#11088;</span> <span>${app.price}</span></div>
        <div class="w-36 py-1 bg-c-black text-c-yellow text-lg rounded box-shadow-1 delete-btn" data-title="Install Email" data-desc="You're about to install Email. Do you want to continue?">${buttonText}</div>
        </button>
    `;
    $('#dynamic-all-apps').append(div);
    });

    //In apps purchase
    const in_apps = [
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 250.00' },
    ];
    $.each(in_apps, function (index,app) {
    const buttonText = app.price === '₹ 0.00' ? 'Free' : 'Buy Now';

    const div = `
        <button data-title="${app.title}" class="app-button highlight w-44 h-56 bg-c-lighten-gray border border-gray-3 rounded-lg flex flex-col items-center justify-center px-2 space-y-2">
        <div class="w-16 h-16">
            <img src="${app.img}" alt="${app.title}">
        </div>
        <span class="text-lg font-medium">${app.title}</span>
        <div><span>${app.rating} &#11088;</span> <span>${app.price}</span></div>
        <div class="w-36 py-1 bg-c-black text-c-yellow text-lg rounded box-shadow-1 delete-btn" data-title="Install Email" data-desc="You're about to install Email. Do you want to continue?">${buttonText}</div>
        </button>
    `;
    $('#dynamic-in-apps').append(div);
    });

    //Free apps
    const free_apps = [
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 0.00' },
    { img: '/images/globe.png', title: 'Lorem', rating: '4.6', price: '₹ 0.00' },
    ];
    $.each(free_apps, function (index, app) {
    const buttonText = app.price === '₹ 0.00' ? 'Free' : 'Buy Now';

    const div = `
        <button data-title="${app.title}" class="app-button highlight w-44 h-56 bg-c-lighten-gray border border-gray-3 rounded-lg flex flex-col items-center justify-center px-2 space-y-2">
        <div class="w-16 h-16">
            <img src="${app.img}" alt="${app.title}">
        </div>
        <span class="text-lg font-medium">${app.title}</span>
        <div><span>${app.rating} &#11088;</span> <span>${app.price}</span></div>
        <div class="w-36 py-1 bg-c-black text-c-yellow text-lg rounded box-shadow-1 delete-btn" data-title="Install Email" data-desc="You're about to install Email. Do you want to continue?">${buttonText}</div>
        </button>
    `;
    $('#dynamic-free-apps').append(div);
    });

    //Essential apps
    const essential_apps = [
    { img: '/images/email.png', title: 'Email', rating: '4.6', price: '₹ 0.00' },
    { img: '/images/social.png', title: 'Social Next', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/chat.png', title: 'Chat', rating: '4.6', price: '₹ 250.00' },
    { img: '/images/ERP-2.png', title: 'ERP', rating: '4.6', price: '₹ 0.00' },
    ];
    $.each(essential_apps, function (index, app) {
    const buttonText = app.price === '₹ 0.00' ? 'Free' : 'Buy Now';

    const div = `
        <button data-title="${app.title}" class="app-button highlight w-44 h-56 bg-c-lighten-gray border border-gray-3 rounded-lg flex flex-col items-center justify-center px-2 space-y-2">
        <div class="w-16 h-16">
            <img src="${app.img}" alt="${app.title}">
        </div>
        <span class="text-lg font-medium">${app.title}</span>
        <div><span>${app.rating} &#11088;</span> <span>${app.price}</span></div>
        <div class="w-36 py-1 bg-c-black text-c-yellow text-lg rounded box-shadow-1 delete-btn" data-title="Install Email" data-desc="You're about to install Email. Do you want to continue?">${buttonText}</div>
        </button>
    `;
    $('#dynamic-essential-apps').append(div);
    });

    $(document).on('click', '.app-button', function() {
    const appTitle = $(this).data('title');
    handleAppClick(appTitle);
    });


    function handleAppClick() {
        // Hide the apps section
        $('#apps-section').addClass("hidden");

        // Show the buy section
        $('.buy-section').removeClass("hidden");
        $('#go-back-button').on('click', function() {
            goBackToApps();
        });
    }

    // Function to go back to the apps section
    function goBackToApps() {
        // Show the apps section
        $('#apps-section').show();

        // Hide the buy section
        $('.buy-section').hide();
    }
    //apps install uninstall modal 
    $(".delete-btn").on("click", function (event) {
        event.stopPropagation();
        let title = $(this).data("title");
        let desc = $(this).data("desc");
        if ($(this).text().trim() === "Uninstall") {
          $(".delete-title").text("Uninstall Email");
          $(".delete-desc").text("Are you sure you want to uninstall Email? This action cannot be undone.");
        } else{
          $(".delete-title").text(title);
          $(".delete-desc").text(desc);
        }
        $(".ok-btn").off("click").on("click", () => {
            $("#Delete-modal").addClass("hidden");
            if($(this).text()=="Uninstall"){
              $(this).text("Install");
            }else{
              $(this).text("Uninstall");
            }
        });
        $("#Delete-modal").removeClass("hidden");
      });        
      $(".cancel-btn").on("click", function () {
        $("#Delete-modal").addClass("hidden");
      });
    ///////// Cloud storage js //////////
    $(".edit-cloud-storage").click(function(){
        $("#cloudStorageModal").removeClass("hidden");
    });
    $("#closeModalButton").click(function(){
        $("#cloudStorageModal").addClass("hidden");
    });
    $(".dropdown button").click(function () {
      $(this).next(".dropdown-menu").toggleClass("hidden");
    });
  
    $("#dropdownBtn").click(function (e) {
      e.stopPropagation();
      $(".dropdown-menu").toggle();
    });

    $(".dropdownBtn").click(function () {
      $(this).siblings(".dropdown-menu").toggle();
    });

    $(".dropdown-menu a").click(function () {
      var dropdown = $(this).closest(".dropdown");
      var selectedText = $(this).text().trim();
      var selectedIcon = $(this).find("img").prop("outerHTML") || "";
      var selectedValue = $(this).data("value");

      dropdown.find(".selected-value").html(selectedIcon + " " + selectedText);
      dropdown.find(".dropdown-menu").hide();
      dropdown.find(".selected-value img").removeAttr("class");
      dropdown.find(".selected-value img").attr("class","w-6 h-5");

      // Logic for cloud storage dropdown
      if (selectedValue === "amazon") {
        $(".s3-oss, .s3, .default-btn").removeClass("hidden");
        $(".directory, .drive").addClass("hidden");
      } else if (selectedValue === "alibaba") {
        $(".s3-oss, .default-btn").removeClass("hidden");
        $(".directory, .s3, .drive").addClass("hidden");
      } else if (selectedValue === "onedrive") {
        $(".s3-oss, .default-btn").addClass("hidden");
        $(".directory, .drive").removeClass("hidden");
      } else if (selectedValue === "local"){
        $(".s3-oss, .s3, .drive").addClass("hidden");
        $(".default-btn, .directory").removeClass("hidden");
      }
    });

    // Hide dropdown when clicking outside
    $(document).click(function (e) {
      if (!$(e.target).closest(".dropdown").length) {
        $(".dropdown-menu").hide();
      }
    });         
    
});